package com.celonis.challenge.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CounterTaskRepository extends JpaRepository<CounterTask, String> {
    @Modifying
    @Query("DELETE FROM CounterTask c WHERE c.isExecuted=false")
    void cleanup();
}
