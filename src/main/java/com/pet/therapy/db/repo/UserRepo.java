package com.pet.therapy.db.repo;

import com.pet.therapy.db.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserEntity, Integer> {
}
