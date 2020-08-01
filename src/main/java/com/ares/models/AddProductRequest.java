package com.ares.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddProductRequest {
    private String bookName;
    private String author;
    private String price;
    private String publisher;
    private String language;
    private String publicationDate;
    private String printLength;
    private String productDimensions;
    private String binding;
    private String isbn;
    private String description;
    private MultipartFile file;
}
