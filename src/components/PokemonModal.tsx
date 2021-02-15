import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
            <h1>{name}</h1>
            <img style={{ marginLeft: '130px' }} src={sprite} alt={name} />

            <h3>General Data</h3>

            <ol>
                <li>
                    height:
                    {pokemonData.height}
                </li>
                <li>
                    weight:
                    {pokemonData.weight}
                </li>
                <li>
                    base_experience:
                    {pokemonData.base_experience}
                </li>
                <li>
                    Species:
                    {pokemonData.species}
                </li>
            </ol>

            {
                pokemonData.abilities ? (
                    <>
                        <h3>Abilities</h3>
                        <ol>
                            {pokemonData.abilities.map((a) => (
                                <li>
                                    {a.ability.name}
                                </li>
                            ))}
                        </ol>
                    </>
                ) : null
            }

            {
                pokemonData.stats ? (
                    <>
                        <h3>stats</h3>
                        <ol>
                            {pokemonData.stats.map((s) => (
                                <li>
                                    {s.stat.name}
                                    :
                                    {' '}
                                    {s.base_stat}
                                </li>
                            ))}
                        </ol>
                    </>
                ) : null
            }
        </div>
    );
};

export default PokemonModal;
