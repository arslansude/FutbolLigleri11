package com.example.FutbolLigleriBackend.repository;
import com.example.FutbolLigleriBackend.model.Teams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface TeamsRepository extends JpaRepository<Teams, Long>{
    }

