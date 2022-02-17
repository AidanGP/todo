import { VStack, HStack, Text, IconButton, StackDivider, Spacer, Badge, Heading } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import React from 'react'

import EditTodoItem from './EditTodoItem'

function TodoList({ todoList, deleteTodo, editTodo }) {
    if (!todoList.body.length) {
        return (
            <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
                {todoList.name} is empty :p
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
            alignItems="stretch"
        >

            <Heading>{todoList.name}</Heading>

            {todoList.body.map(todo => (
                <HStack key={todo.id}>
                    <Text isTruncated>{todo.body}</Text>
                    <Spacer />
                    <EditTodoItem todoList={todoList} todo={todo} editTodo={editTodo} />
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