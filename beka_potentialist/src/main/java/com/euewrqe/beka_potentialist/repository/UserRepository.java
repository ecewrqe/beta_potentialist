package com.euewrqe.beka_potentialist.repository;

import com.euewrqe.beka_potentialist.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // You can add custom query methods here
}
