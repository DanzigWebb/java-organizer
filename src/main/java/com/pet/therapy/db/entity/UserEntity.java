package com.pet.therapy.db.entity;

import jakarta.persistence.Entity;
import lombok.Data;

@Entity(name = "user")
@Data
public class UserEntity extends BaseEntity {
    private String name;
    private String email;
    private String password;
}
