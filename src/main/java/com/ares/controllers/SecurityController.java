package com.ares.controllers;

import com.ares.models.AuthenticationRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityController {

    @PostMapping(value = "/login", consumes = "application/json", produces = MediaType.APPLICATION_JSON_VALUE)
    public String index(@RequestBody AuthenticationRequest authenticationRequest) {
        return "mockJWT";
    }

}
