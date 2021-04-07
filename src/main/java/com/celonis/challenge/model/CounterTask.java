package com.celonis.challenge.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
import java.util.concurrent.atomic.AtomicInteger;

@Entity
public class CounterTask {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String name;

    private Date creationDate;

    private AtomicInteger x;

    private int y;

    private boolean isExecuted;

    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public boolean getIsExecuted() {
        return isExecuted;
    }

    public void setIsExecuted(boolean executed) {
        isExecuted = executed;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public AtomicInteger getX() {
        return x;
    }

    public void setX(AtomicInteger x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    @Override
    public String toString() {
        return "CounterTask{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", x=" + x +
                ", y=" + y +
                ", status='" + status + '\'' +
                '}';
    }
}
