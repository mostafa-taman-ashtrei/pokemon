import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/NavBar';

const MyApp: React.FC<AppProps> = (
    { Component, pageProps }: AppProps,
) => (
    <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
    </ChakraProvider>
);

export default MyApp;
