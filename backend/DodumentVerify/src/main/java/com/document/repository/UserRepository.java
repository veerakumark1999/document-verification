package com.document.repository;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.document.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByNameAndDobAndPanNumber(String name, LocalDate dob, String panNumber);
    Optional<User> findByName(String name);
    Optional<User> findByDob(LocalDate dob);
    Optional<User> findByPanNumber(String panNumber);
}
