import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from '../styles/Home.module.css';
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
        <div className={styles.grid}>
            {
                pokemons.map((p) => (<Pokemons pokemon={p} key={p.id} />))
            }
        </div>
    );
};

export default Pokedex;
