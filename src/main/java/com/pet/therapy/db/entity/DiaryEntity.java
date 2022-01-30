package com.pet.therapy.db.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.util.Date;

@Entity(name = "diary")
@Data
public class DiaryEntity extends BaseEntity {
    private Date day;

    @Lob
    private String situation;

    @Lob
    private String think;

    @Lob
    private String emotions;

    @Lob
    private String reaction;

    @Lob
    private String bodySensation;

    @ManyToOne
    private UserEntity user;
}