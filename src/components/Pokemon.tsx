import React, { useState } from 'react';
import {
    Modal, ModalCloseButton, ModalOverlay, ModalContent, Avatar,
    ModalBody, ModalHeader, Box, Button, Flex, Text, useColorModeValue as mode,
} from '@chakra-ui/react';

import { myPokemons } from '../types';
import PokemonModal from './PokemonModal';

interface props {
    pokemon: myPokemons
}

const Pokemons: React.FC<props> = ({ pokemon }: props) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <>
            <Box as="section" py="12">
                <Box w="96" maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ md: '8' }}>
                    <Box
                        maxW="3xl"
                        mx="auto"
                        rounded={{ md: 'lg' }}
                        bg={mode('green.400', 'gray.700')}
                        shadow="base"
                        overflow="hidden"
                        p="2"
                    >
                        <Flex align="center" justify="space-between" px="6" py="4">
                            <Avatar name={pokemon.name} src={pokemon.sprite} />
                            <Text as="h3" fontWeight="bold" fontSize="lg">
                                {pokemon.name}
                            </Text>
                        </Flex>
                        <Box>
                            <Button variant="outline" minW="20" onClick={() => setOpenModal(true)}>
                                More
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Modal motionPreset="slideInBottom" onClose={() => setOpenModal(false)} isOpen={openModal}>
                <ModalOverlay />
                <ModalContent pb={5}>
                    <ModalHeader>{pokemon.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <PokemonModal
                            id={pokemon.id}
                            name={pokemon.name}
                            sprite={pokemon.sprite}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Pokemons;
