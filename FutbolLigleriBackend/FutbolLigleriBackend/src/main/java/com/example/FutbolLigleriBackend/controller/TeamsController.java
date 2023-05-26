package com.example.FutbolLigleriBackend.controller;
import com.example.FutbolLigleriBackend.model.Teams;
import com.example.FutbolLigleriBackend.repository.TeamsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;
@CrossOrigin("*")
@RestController
@RequestMapping("/futbolligleri")
public class TeamsController {
    @Autowired
    private TeamsRepository teamsRepository;
    @GetMapping("/teams")
    public List<Teams> getAllTeams() {
        List<Teams> team = teamsRepository.findAll();
        Collections.shuffle(team);
        int length = team.size();
        int middle = length / 2;
        List<Teams> firstHalf = team.subList(0, middle);
        List<Teams> secondHalf = team.subList(middle, length);
        System.out.println("Birinci Takım:");
        for (Teams teams : firstHalf) {
            System.out.println(teams.getTakimadi());
        }
        System.out.println("İkinci Takım:");
        for (Teams teams : secondHalf) {
            System.out.println(teams.getTakimadi());
        }
        return team;
    }
    }
