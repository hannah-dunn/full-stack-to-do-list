package com.example.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.backend.exception.ToDoNotFoundException;
import com.example.backend.model.ToDo;
import com.example.backend.repository.ToDoRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ToDoServiceImpl implements ToDoService {

    private final ToDoRepository toDoRepository;

    @Override
    public ToDo getToDo(long id) {
        return toDoRepository.findById(id).orElseThrow(() -> new ToDoNotFoundException(String.format("ToDo with id '%s' not found", id)));
    }

    @Override
    public List<ToDo> getToDos() {
        return toDoRepository.findAll();
    }

    @Override
    public ToDo addToDo(String description) {
        ToDo toDo = new ToDo();
        toDo.setDescription(description);
        return toDoRepository.save(toDo);
    }

    @Override
    public void deleteToDo(long id) {
        ToDo toDo = getToDo(id);
        toDoRepository.delete(toDo);
    }

    @Override
    public void updateToDo(long id, boolean completed) {
        ToDo toDo = getToDo(id);
        toDo.setCompleted(completed);
        toDoRepository.save(toDo);
    }
}
