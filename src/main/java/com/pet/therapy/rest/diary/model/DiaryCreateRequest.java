package com.pet.therapy.rest.diary.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.Date;

@Data
public class DiaryCreateRequest {

    Date day;

    @NotBlank(message = "Обязательное поле")
    String situation;

    @NotBlank(message = "Обязательное поле")
    String think;

    @NotBlank(message = "Обязательное поле")
    String emotions;

    @NotBlank(message = "Обязательное поле")
    String reaction;

    @NotBlank(message = "Обязательное поле")
    String bodySensation;
}
