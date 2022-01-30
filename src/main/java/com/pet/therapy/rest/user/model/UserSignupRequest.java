package com.pet.therapy.rest.user.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

@Data
public class UserSignupRequest {
    @NotBlank(message = "Обязательное поле")
    @Email(message = "Невалидный Email")
    private String email;

    @NotBlank(message = "Обязательное поле")
    private String name;

    @NotBlank(message = "Обязательное поле")
    @Length(min = 6, message = "Пароль должен содержать минимум 6 символов")
    private String password;
}
