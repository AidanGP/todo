import { VStack, HStack, Text, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import React from 'react'

function TodoList({ todos, deleteTodo }) {
    if (!todos.length) {
        return (
            <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
                I love celery
            </Badge>
        )
    }

    return (
        <VStack
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            px="4"
            py="3"
            borderRadius="lg"
            width="100%"
            maxWidth={{ base: '90vw', sm: '80vw', lg: '40vw', xl: '30vw' }}
            alignItems="stretch">
            {todos.map(todo => (
                <HStack key={todo.id}>
                    <Text isTruncated>{todo.body}</Text>
                    <Spacer />
                    <IconButton
                        aria-label='Delete Item'
                        icon={<DeleteIcon />}
                        isRound="true"
                        onClick={() => deleteTodo(todo.id)}
                    />
                </HStack>
            ))}
        </VStack>
    )
}

export default TodoList;