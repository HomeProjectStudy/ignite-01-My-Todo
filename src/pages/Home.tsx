import React, { useState } from "react";
import { Alert } from "react-native";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (newTaskTitle == "") {
      Alert.alert("O campo está vazio, por favor digite alguma coisa!");
      return;
    }
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };
    setTasks((oldState) => [...oldState, data]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            done: !task.done,
          }
        : task
    );

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
