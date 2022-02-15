import React from 'react';
import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useState } from 'react';

function AddTodo({ addTodo }) {
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
        addTodo(todo);
        setContent('')
    }

    const [content, setContent] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <HStack pt="8">
                <Input
                    variant='filled'
                    placeholder='buy another celery sprig...'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button
                    colorScheme='green'
                    px="8"
                    type="submit"
                >more celery</Button>
            </HStack>

        </form>
    )
}

export default AddTodo;