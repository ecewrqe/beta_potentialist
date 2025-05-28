package com.euewrqe.beka_potentialist.controller.page;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
    
    // This class can be used to handle page-related requests
    // For example, you can add methods to return views for different pages

    // Example method to return the home page
    @GetMapping("/home")
    public String home() {
        return "home"; // This will return a view named "home.html"
    }

    // You can add more methods for other pages as needed
}
