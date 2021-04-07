package com.celonis.challenge.services;

import com.celonis.challenge.exceptions.NotFoundException;
import com.celonis.challenge.model.CounterTask;
import com.celonis.challenge.model.CounterTaskRepository;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
public class CounterTaskService {

    @Autowired
    private SimpMessagingTemplate template;
    private static Map<String,Thread> threadMap = new ConcurrentHashMap<>();
    private final CounterTaskRepository counterTaskRepository;
    private static List<CounterTask> newList = Collections.synchronizedList(new ArrayList<>());
    private StringBuffer activeQueue= new StringBuffer("all");

    public void setActiveQueue(String activeQueue) {
        this.activeQueue.replace(0,this.activeQueue.length(),activeQueue);
    }

    public CounterTaskService(CounterTaskRepository counterTaskRepository) {
        this.counterTaskRepository = counterTaskRepository;

    }

    public List<CounterTask> listTasks() {
        List<CounterTask> taskList = counterTaskRepository.findAll();
        newList.clear();
        newList.addAll(taskList);
        return taskList;
    }

    public CounterTask createTask(CounterTask counterTask) {
        counterTask.setId(null);
        counterTask.setIsExecuted(false);
        counterTask.setStatus(ITaskStatus.NOT_EXECUTED);
        counterTask.setCreationDate(new Date());
        CounterTask savedTask = counterTaskRepository.save(counterTask);
        this.newList.add(savedTask);
        return savedTask;
    }

    public CounterTask getTask(String taskId) {
        return get(taskId);
    }

    public CounterTask update(String taskId, CounterTask counterTask) {
        CounterTask existing = get(taskId);
        existing.setCreationDate(counterTask.getCreationDate());
        existing.setName(counterTask.getName());
        existing.setStatus(counterTask.getStatus());
        return counterTaskRepository.save(existing);
    }

    public void delete(String taskId) {
        counterTaskRepository.delete(taskId);
        Predicate<CounterTask> isDeleted = item -> item.getId().equals(taskId);
        newList.removeIf(isDeleted);
    }

    public void executeTask(String taskId) {
        CounterTaskService counterTask = get(taskId);
        counterTask.setIsExecuted(true);
        counterTask.setStatus(ITaskStatus.EXECUTING);
        counterTaskRepository.save(counterTask);
        Thread counterThread = new Thread(() -> {
            final int y = counterTask.getY();
            while (counterTask.getX().get() < y){
                try {
                    Thread.sleep(1000);
                    counterTask.getX().incrementAndGet();
                    counterTask.setStatus(ITaskStatus.EXECUTING);
                    if(activeQueue.toString().equals("all")){
                        newList = newList.stream().map(o -> o.getId().equals(taskId) ? counterTask : o)
                        .collect(Collectors.toList());
                        // Push notifications to front-end
                        template.convertAndSend("/topic/notify", new Gson().toJson(newList));
                    } else if (activeQueue.toString().equals(taskId)){
                        template.convertAndSend("/topic/notify/"+taskId, new Gson().toJson(counterTask));
                    }
                    System.out.println(Thread.currentThread().getName()+": "+counterTask);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            counterTask.setStatus(ITaskStatus.FINISHED);
            update(taskId,counterTask);
            if(activeQueue.toString().equals("all")){
                newList = newList.stream().map(o -> o.getId().equals(taskId) ? counterTask : o).collect(Collectors.toList());
                template.convertAndSend("/topic/notify", new Gson().toJson(newList));
            }
            Thread.currentThread().stop();
        },taskId);
        threadMap.put(taskId,counterThread);
        counterThread.setDaemon(true);
        counterThread.start();
    }

    public void cancelTask(String taskId) {
        CounterTask counterTask = getTask(taskId);
        counterTask.setStatus(ITaskStatus.CANCELED);
        update(taskId,counterTask);
        if(activeQueue.toString().equals("all")){
            newList = newList.stream().map(o -> o.getId().equals(taskId) ? counterTask : o).collect(Collectors.toList());
            template.convertAndSend("/topic/notify", new Gson().toJson(newList));
        }
        Thread thread = threadMap.get(taskId);
        thread.stop();
        threadMap.remove(taskId);
    }

    public Integer monitorTask(String taskId) {
        return getTask(taskId).getX().get();
    }

    private CounterTask get(String taskId) {
        CounterTask counterTask = counterTaskRepository.findOne(taskId);
        if (counterTask == null) {
            throw new NotFoundException();
        }
        return counterTask;
    }

    @Scheduled(fixedRate = 9000000)
    @Transactional
    public void cleanup() {
          counterTaskRepository.cleanup();
    }
}
