package com.pet.therapy.rest.user.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UserSigninRequest {
    @NotBlank(message = "Обязательное поле")
    private String login;

    @NotBlank(message = "Обязательное поле")
    private String password;
}
