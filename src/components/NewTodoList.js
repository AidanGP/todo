import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    useToast
} from '@chakra-ui/react'


function NewTodoList({ addTodoList }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content) {
            toast({
                title: 'No content',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
            return;
        }

        const todo = {
            id: nanoid(),
            name: content,
            body: []
        }
        addTodoList(todo);
        setContent('')
    }

    const [content, setContent] = useState('');
    return (
        <>

            <IconButton
                aria-label='New List'
                icon={< AddIcon />}
                isRound="true"
                onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New List</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit}>
                        <ModalBody>
                            <Input
                                variant='filled'
                                placeholder='New list name...'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='green' mr={3} type="submit" onClick={onClose}>
                                Add
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NewTodoList

