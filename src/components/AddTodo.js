import React from 'react';
import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useState } from 'react';

function AddTodo({ todoList, addTodo }) {
    const toast = useToast();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content) {
            toast({
                title: 'No celery :(',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
            return;
        }

        const todo = {
            id: nanoid(),
            body: content
        }
        addTodo(todoList.id, todo);
        setContent('')
    }

    const [content, setContent] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <HStack p="8">
                <Input
                    variant='filled'
                    placeholder={`Add to ${todoList.name} list...`}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button
                    colorScheme='green'
                    px="8"
                    type="submit"
                >Add Item</Button>
            </HStack>

        </form>
    )
}

export default AddTodo;