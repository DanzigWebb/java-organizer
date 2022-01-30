package com.pet.therapy.db.repo;

import com.pet.therapy.db.entity.DiaryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepo extends JpaRepository<DiaryEntity, Integer> {
}
