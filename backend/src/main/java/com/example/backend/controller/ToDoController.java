package com.example.backend.controller;

import com.example.backend.model.ToDo;
import com.example.backend.service.ToDoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoController {

    private final ToDoService toDoService;

    @GetMapping
    public List<ToDo> getToDos() {
        return toDoService.getToDos();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public ToDo addToDo(@Valid @RequestBody AddToDoRequest addToDoRequest) {
        return toDoService.addToDo(addToDoRequest.description());
    }

    @DeleteMapping("/{id}")
    public void deleteToDo(@PathVariable Long id) {
        toDoService.deleteToDo(id);
    }

    @PatchMapping("/{id}")
    public void updateToDo(@PathVariable Long id, @RequestParam Boolean completed) {
        toDoService.updateToDo(id, completed);
    }
}