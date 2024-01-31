import React, { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoTable from "./ToDoTable";
import { myToDoListApi } from "../components/ToDoListAPI";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    handleToDos();
  }, []);

  const handleToDos = async () => {
    try {
      const response = await myToDoListApi.getToDos();
      setTodos((response as any).data);
    } catch (error) {
      handleLogError(error);
    }
  };

  const onFinish = async (addToDoRequest: string) => {
    try {
      await myToDoListApi.addToDo(addToDoRequest);
      await handleToDos();
    } catch (error) {
      handleLogError(error);
    }
  };

  const onComplete = async (key: number) => {
    try {
      await myToDoListApi.updateToDo(key, true);
      await handleToDos();
    } catch (error) {
      handleLogError(error);
    }
  };

  const onDelete = async (key: number) => {
    try {
      await myToDoListApi.deleteToDo(key);
      await handleToDos();
    } catch (error) {
      handleLogError(error);
    }
  };

  const handleLogError = (error: any) => {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
  };

  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#333",
    fontSize: "3em",
  };

  return (
    <div>
      <h1 style={headerStyle}>To Do List</h1>
      <ToDoForm onFinish={onFinish} />
      <ToDoTable todos={todos} onComplete={onComplete} onDelete={onDelete} />
    </div>
  );
}

export default Home;
