package com.pet.therapy.rest.diary.model;

import lombok.Data;

import java.util.Date;

@Data
public class Diary {

    String id;
    Date day;

    String situation;
    String think;
    String emotions;
    String reaction;
    String bodySensation;
}
