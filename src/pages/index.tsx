import React from 'react';
import Head from 'next/head';

import Pokedex from '../components/Pokedex';

const Home: React.FC = () => (
    <div>
        <Head>
            <title>Next Pokemon</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Pokedex />
    </div>
);

export default Home;
