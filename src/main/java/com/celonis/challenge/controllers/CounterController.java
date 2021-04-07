package com.celonis.challenge.controllers;

import com.celonis.challenge.model.CounterTask;
import com.celonis.challenge.model.ProjectGenerationTask;
import com.celonis.challenge.services.CounterTaskService;
import com.celonis.challenge.services.FileService;
import com.celonis.challenge.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/counters")
public class CounterController {
    @Autowired
    private CounterTaskService counterTaskService;

    public CounterController(CounterTaskService counterTaskService) {
        this.counterTaskService = counterTaskService;
    }

    @GetMapping("/")
    public List<CounterTask> listTasks() {
        return counterTaskService.listTasks();
    }

    @PostMapping("/")
    public CounterTask createTask(@RequestBody @Valid CounterTask counterTask) {
        return counterTaskService.createTask(counterTask);
    }

    @GetMapping("/{taskId}")
    public CounterTask getTask(@PathVariable String taskId) {
        return counterTaskService.getTask(taskId);
    }

    @PutMapping("/{taskId}")
    public CounterTask updateTask(@PathVariable String taskId,
                                            @RequestBody @Valid CounterTask counterTask) {
        return counterTaskService.update(taskId, counterTask);
    }

    @DeleteMapping("/{taskId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTask(@PathVariable String taskId) {
        counterTaskService.delete(taskId);
    }

    @PostMapping("/{taskId}/execute")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void executeTask(@PathVariable String taskId) {
        counterTaskService.executeTask(taskId);
    }

    @PostMapping("/{taskId}/cancel")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void getResult(@PathVariable String taskId) {
        counterTaskService.cancelTask(taskId);
    }

    @GetMapping("/{taskId}/monitor")
    public Integer monitorTask(@PathVariable String taskId) {
        return counterTaskService.monitorTask(taskId);
    }

}
