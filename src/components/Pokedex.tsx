import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Wrap, WrapItem, Center,
} from '@chakra-ui/react';

import { myPokemons } from '../types';
import Pokemons from './Pokemon';

const Pokedex: React.FC = () => {
    const [pokemons, setPokemons] = useState<myPokemons[]>([]);

    const fetchPokemons = async (): Promise<void> => {
        try {
            const { data: { results } } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=9');
            const myData = results.map((r, i) => ({
                id: i + 1,
                name: r.name,
                url: r.url,
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`,
            }));
            setPokemons(myData);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => { fetchPokemons(); }, []);

    return (
        <Wrap spacing="40px" py="2" mx="9">
            {
                pokemons.map((p) => (
                    <WrapItem>
                        <Center w="290px" h="300px" mx="10">
                            <Pokemons pokemon={p} key={p.id} />
                        </Center>
                    </WrapItem>
                ))
            }
        </Wrap>
    );
};

export default Pokedex;
