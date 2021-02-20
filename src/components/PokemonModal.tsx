import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Image, List, ListItem, ListIcon, Text, Divider,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

interface props {
    id: number,
    name: string,
    sprite: string,
}

const PokemonModal: React.FC<props> = ({ id, name, sprite }: props) => {
    const [pokemonData, setPokemonData] = useState<any>([]);

    const fetchPokemonData = async (): Promise<void> => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

            const myData = {
                species: data.species.name,
                stats: data.stats,
                height: data.height,
                weight: data.weight,
                base_experience: data.base_experience,
                abilities: data.abilities,
            };

            setPokemonData(myData);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => { fetchPokemonData(); }, []);

    return (
        <div>
            <Image
                borderRadius="base"
                boxSize="150px"
                marginY="9"
                marginX="28"
                src={sprite}
                alt={name}
                background="gray.400"
            />

            <Text>General Data : </Text>

            <List spacing={1}>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    height:
                    {' '}
                    {pokemonData.height}
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    weight:
                    {' '}
                    {pokemonData.weight}
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Species:
                    {' '}
                    {pokemonData.species}
                </ListItem>
            </List>

            <Divider m="2" />

            {
                pokemonData.abilities ? (
                    <>
                        <Text>Abilities: </Text>
                        <List spacing={1}>
                            {pokemonData.abilities.map((a) => (
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color="green.500" />
                                    {a.ability.name}
                                </ListItem>
                            ))}
                        </List>
                    </>
                ) : null
            }

            <Divider m="2" />

            {
                pokemonData.stats ? (
                    <>
                        <Text>Stats: </Text>
                        <List spacing={1}>
                            {pokemonData.stats.map((s) => (
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color="green.500" />
                                    {s.stat.name}
                                    :
                                    {' '}
                                    {s.base_stat}
                                </ListItem>
                            ))}
                        </List>
                    </>
                ) : null
            }
        </div>
    );
};

export default PokemonModal;
