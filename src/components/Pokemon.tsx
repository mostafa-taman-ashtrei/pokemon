import React, { useState } from 'react';
import { myPokemons } from '../types';
import styles from '../styles/Home.module.css';
import Pokemon from './PokemonModal';

interface props {
    pokemon: myPokemons
}

const Pokemons: React.FC<props> = ({ pokemon }: props) => {
    const [openModal, setOpenModal] = useState<Boolean>(false);
    return (
        <div className={styles.card} key={pokemon.id}>
            <img style={{ marginLeft: '130px' }} src={pokemon.sprite} alt={pokemon.name} />
            <h3 className={styles.title}>
                {pokemon.name}
            </h3>
            <button type="button" onClick={() => setOpenModal(!openModal)}>
                More
            </button>
            {openModal ? (
                <Pokemon
                    id={pokemon.id}
                    name={pokemon.name}
                    sprite={pokemon.sprite}
                />
            ) : null}
        </div>
    );
};

export default Pokemons;
