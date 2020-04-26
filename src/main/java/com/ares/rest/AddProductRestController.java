package com.ares.rest;

import com.ares.models.AddProductRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AddProductRestController {

    @PostMapping(value = "/addProduct", consumes = "multipart/form-data", produces = MediaType.APPLICATION_JSON_VALUE)
    public String index(@ModelAttribute AddProductRequest addProductRequest) {
        return "mockJWT";
    }

}
