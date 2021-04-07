package com.celonis.challenge.services;

/**
 * Constants for countable Task status.
 */
public interface ITaskStatus {
    String NOT_CONFIGURED = "Not Configured";
    String NOT_EXECUTED = "Not Executed";
    String EXECUTING = "Executing";
    String CANCELED = "Canceled";
    String FINISHED = "Finished";
}
