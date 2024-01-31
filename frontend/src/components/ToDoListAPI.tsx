import axios, { AxiosInstance, AxiosResponse } from "axios";

interface ToDo {
  id: number;
  description: string;
  completed: boolean;
}

export interface myToDoListApi {
  getToDos: () => Promise<ToDo[]>;
  addToDo: (addToDoRequest: any) => Promise<void>;
  deleteToDo: (id: number) => Promise<void>;
  updateToDo: (id: number, completed: boolean) => Promise<void>;
}

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

export const myToDoListApi: myToDoListApi = {
  getToDos: async (): Promise<ToDo[]> => {
    const response: AxiosResponse<ToDo[]> = await instance.get("/api/todos");
    return response.data;
  },
  addToDo: async (addToDoRequest: string) => {
    await instance.post("/api/todos", addToDoRequest, {
      headers: { "Content-type": "application/json" },
    });
  },
  deleteToDo: async (id: number) => {
    await instance.delete(`/api/todos/${id}`);
  },
  updateToDo: async (id: number, completed: boolean) => {
    await instance.patch(`/api/todos/${id}?completed=${completed}`);
  },
};
