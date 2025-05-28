package com.euewrqe.beka_potentialist.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.euewrqe.beka_potentialist.entity.User;
import com.euewrqe.beka_potentialist.repository.UserRepository;

@SpringBootTest
public class UserServiceTest {
    
    // This class will contain unit tests for UserService methods
    // You can use JUnit or any other testing framework to write your tests

    // @Autowired
    // private UserService userService;
    // Example test method
    @Test
    public void testGetAllUsers() {
        // Arrange
        UserRepository mockRepo = Mockito.mock(UserRepository.class);
        User user = new User("testuser", "testpass", "test@example.com");
        when(mockRepo.findAll()).thenReturn(Arrays.asList(user));
        UserService userService = new UserService(mockRepo);
        // Act
        List<User> users = userService.getAllUsers();
        // Assert
        assertNotNull(users);
        assertFalse(users.isEmpty());
        assertEquals("testuser", users.get(0).getUsername());
    }
}
