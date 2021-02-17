import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { myPokemons } from '../types';
import styles from '../styles/Home.module.css';
import PokemonModal from './PokemonModal';

interface props {
    pokemon: myPokemons
}

const Pokemons: React.FC<props> = ({ pokemon }: props) => {
    const [openModal, setOpenModal] = useState<Boolean>(false);
    useEffect(() => { Modal.setAppElement('body'); }, []);

    return (
        <div className={styles.card} key={pokemon.id}>
            <img style={{ marginLeft: '130px' }} src={pokemon.sprite} alt={pokemon.name} />
            <h3 className={styles.title}>
                {pokemon.name}
            </h3>
            <button type="button" onClick={() => setOpenModal(true)}>
                More
            </button>
            <Modal
                isOpen={openModal}
                onRequestClose={() => setOpenModal(false)}
                contentLabel="Data"
            >
                <div>
                    <button type="button" onClick={() => setOpenModal(false)}>
                        X
                    </button>
                    <PokemonModal
                        id={pokemon.id}
                        name={pokemon.name}
                        sprite={pokemon.sprite}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default Pokemons;
