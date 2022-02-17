import React from 'react'
import { HStack, VStack, IconButton, Badge } from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function MultiTodo({ allTodos, deleteTodo, addTodo, removeTodoList, editTodo }) {
    if (!allTodos.length) {
        return (
            <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
                no more celery on yo list
            </Badge>
        )
    }
    return (
        <HStack
            alignItems="flex-start"
        >
            {allTodos.map(todoList => (
                <VStack
                    px="4"
                    key={todoList.id}
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
        </HStack>


    )
}

export default MultiTodo