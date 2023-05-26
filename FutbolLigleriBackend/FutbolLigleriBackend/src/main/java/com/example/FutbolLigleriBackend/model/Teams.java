package com.example.FutbolLigleriBackend.model;
import jakarta.persistence.*;
@Entity
@Table(name="teams")
public class Teams {
    private long takimid;
    private String takimadi;
    private String takimskor;
    public Teams(String takimadi, String takimskor) {
        this.takimadi = takimadi;
        this.takimskor = takimskor;
    }
    public Teams() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getTakimid() {
        return takimid;
    }
    public void setTakimid(long takimid) {
        this.takimid = takimid;
    }
    @Column(name = "takimadi")
    public String getTakimadi() {
        return takimadi;
    }
    public void setTakimadi(String takimadi) {
        this.takimadi = takimadi;
    }
    @Column(name = "takimskor")
    public String getTakimskor() {
        return takimskor;
    }
    public void setTakimskor(String takimskor) {
        this.takimskor = takimskor;
    }
}