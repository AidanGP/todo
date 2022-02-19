import React from 'react'
import { VStack, Stack, IconButton, Badge } from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function MultiTodo({ allTodos, deleteTodo, addTodo, removeTodoList, editTodo }) {
    if (!allTodos.length) {
        return (
            <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
                You have no lists
            </Badge>
        )
    }
    return (
        <Stack
            // alignItems="flex-start"
            direction={{ base: "column-reverse", sm: "column-reverse", md: "row" }}
        >
            {allTodos.map(todoList => (
                <VStack
                    p="4"
                    key={todoList.id}
                    justify="true"
                >
                    <TodoList todoList={todoList} deleteTodo={deleteTodo} editTodo={editTodo} />
                    <AddTodo todoList={todoList} addTodo={addTodo} />

                    <IconButton
                        aria-label='Remove List'
                        icon={<SmallCloseIcon />}
                        isRound="true"
                        onClick={() => removeTodoList(todoList.id)}
                    />
                </VStack>
            ))}
        </Stack>


    )
}

export default MultiTodo