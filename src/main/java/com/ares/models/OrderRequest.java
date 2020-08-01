package com.ares.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {
    private String city;
    private String email;
    private String firsName;
    private String lastName;
    private String phoneNumber;
    private String postIndex;
}
