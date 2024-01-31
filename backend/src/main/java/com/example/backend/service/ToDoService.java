package com.example.backend.service;

import java.util.List;

import com.example.backend.model.ToDo;

public interface ToDoService {

    ToDo getToDo(long id);
    List<ToDo> getToDos();
    ToDo addToDo(String description);
    void deleteToDo(long id);
    void updateToDo(long id, boolean completed);
} 

