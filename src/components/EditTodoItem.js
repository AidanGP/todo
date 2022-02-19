import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { useState } from 'react';
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

function EditTodoItem({ todoList, todo, editTodo }) {
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

        editTodo(todoList.id, todo.id, content);
        setContent('')
    }

    const [content, setContent] = useState('');
    return (
        <>

            <IconButton
                aria-label='Edit Item'
                icon={<EditIcon />}
                isRound="true"
                onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Item</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit}>
                        <ModalBody>
                            <Input
                                variant='filled'
                                placeholder={`Editing ${todo.body}...`}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='green' mr={3} type="submit" onClick={onClose}>
                                Edit
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditTodoItem