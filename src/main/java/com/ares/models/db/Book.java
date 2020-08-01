package com.ares.models.db;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "books")
@Getter
@Setter
@NoArgsConstructor
public class Book {
    @Id
    private String id;
    private String bookName;
    private String author;
    private String price;
    private String publisher;
    private String language;
    private String publicationDate;
    private String printLength;
    private String productDimension;
    private String binding;
    private String isbn;
    private String description;
    private byte[] pictureData;
}
