package com.celonis.challenge.controllers;

import java.util.Map;

import com.celonis.challenge.services.CounterTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;

@Controller
public class WebSocketController {

    @Autowired
    private SimpMessageSendingOperations messagingTemplate;
    @Autowired
    private CounterTaskService counterTaskService;

    @MessageMapping("/message")
    public void processMessageFromClient(@Payload String message) throws Exception {
        String queue = new Gson().fromJson(message, Map.class).get("queue").toString();
        counterTaskService.setActiveQueue(queue);
    }

    @MessageExceptionHandler
    public String handleException(Throwable exception) {
        messagingTemplate.convertAndSend("/errors", exception.getMessage());
        return exception.getMessage();
    }

}
