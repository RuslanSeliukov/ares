package com.ares.models.db;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "orders")
@Getter
@Setter
@NoArgsConstructor
public class Order {
    @Id
    private String id;
    private String city;
    private String email;
    private String firsName;
    private String lastName;
    private String phoneNumber;
    private String postIndex;
}
