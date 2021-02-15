import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Pokedex from '../components/Pokedex';

const Home: React.FC = () => (
    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <h1>Pokemons</h1>
            <Pokedex />
        </main>
    </div>
);

export default Home;
