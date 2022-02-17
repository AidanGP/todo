import { VStack, HStack, IconButton, Heading, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import MultiTodo from './components/MultiTodo';
import NewTodoList from './components/NewTodoList';
import { useState, useEffect } from 'react';



function App() {

  // const a = [
  //   {
  //     id: nanoid(),
  //     name: "shopping",
  //     body: [{
  //       id: nanoid(),
  //       body: "celery"
  //     },
  //     {
  //       id: nanoid(),
  //       body: "apples"
  //     }]
  //   },
  //   {
  //     id: nanoid(),
  //     name: "balls",
  //     body: [{
  //       id: nanoid(),
  //       body: "juice"
  //     },
  //     {
  //       id: nanoid(),
  //       body: "panda"
  //     }]
  //   }
  // ]


  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  function deleteTodo(id) {
    let newTodos = []
    for (let i = 0; i < todos.length; i++) {
      let checkTodos = {
        id: todos[i].id,
        name: todos[i].name,
        body: todos[i].body.filter((todo) => {
          return todo.id !== id;
        })
      }
      newTodos.push(checkTodos)
    }
    setTodos(newTodos);
  }

  const addTodo = (todoListID, todo) => {
    let newTodos = []
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === todoListID) {
        let checkTodos = {
          id: todos[i].id,
          name: todos[i].name,
          body: [...todos[i].body, todo]
        }
        newTodos.push(checkTodos)
      } else {
        newTodos.push(todos[i])
      }
    }
    setTodos(newTodos);
  }

  function editTodo(todoListID, todoItemID, newTodoName) {
    let newTodos = []
    let todoListIDX;
    let todoItemIDX;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === todoListID) {
        todoListIDX = i;
        for (let j = 0; j < todos[i].body.length; j++) {
          if (todos[i].body[j].id === todoItemID) {
            todoItemIDX = j;
          }
        }
      }
      let checkTodos = {
        id: todos[i].id,
        name: todos[i].name,
        body: todos[i].body.filter(() => {
          return true;
        })
      }
      newTodos.push(checkTodos)
    }

    newTodos[todoListIDX].body[todoItemIDX] = {
      id: newTodos[todoListIDX].body[todoItemIDX].id,
      body: newTodoName
    }
    setTodos(newTodos)
  }


  const addTodoList = (todo) => {
    setTodos([...todos, todo])
  }

  const removeTodoList = (todoListID) => {
    let newTodos = todos.filter((todoList) => {
      return todoList.id !== todoListID;
    })
    setTodos(newTodos)
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p="4">
      <IconButton
        aria-label='Dark Mode'
        icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <HStack
      >
        <Heading
          fontWeight="extrabold"
          size="2xl"
          bgGradient="linear(to-r, green.400, teal.200, blue.300)"
          bgClip="text"
          p="8"
        >
          celery todo list
        </Heading>
        <NewTodoList addTodoList={addTodoList} />

      </HStack>
      <MultiTodo allTodos={todos} deleteTodo={deleteTodo} addTodo={addTodo} removeTodoList={removeTodoList} editTodo={editTodo} />
    </VStack >
  );
}

export default App;
