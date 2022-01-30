package com.pet.therapy.rest.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND, reason="Сущность не найдена")
public class EntityNotFoundException extends RuntimeException {
}
