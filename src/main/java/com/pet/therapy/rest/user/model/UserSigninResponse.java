package com.pet.therapy.rest.user.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserSigninResponse {
    String token;
    User user;
}
