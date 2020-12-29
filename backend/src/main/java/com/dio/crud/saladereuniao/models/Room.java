package com.dio.crud.saladereuniao.models;

import javax.persistence.*;

@Entity
@Table(name = "meetingroom")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String date;

    @Column(name = "star_hour",nullable = false)
    private String starHour;

    @Column(name = "end_hour", nullable = false)
    private String endHour;

    public Room() {
    }

    public Room(Long id, String name, String date, String starHour, String endHour) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.starHour = starHour;
        this.endHour = endHour;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStarHour() {
        return starHour;
    }

    public void setStarHour(String starHour) {
        this.starHour = starHour;
    }

    public String getEndHour() {
        return endHour;
    }

    public void setEndHour(String endHour) {
        this.endHour = endHour;
    }

    @Override
    public String toString() {
        return "Room{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", date='" + date + '\'' +
                ", starHour='" + starHour + '\'' +
                ", endHour='" + endHour + '\'' +
                '}';
    }
}
