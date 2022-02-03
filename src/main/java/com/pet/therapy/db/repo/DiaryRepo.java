package com.pet.therapy.db.repo;

import com.pet.therapy.db.entity.DiaryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface DiaryRepo extends JpaRepository<DiaryEntity, Long> {
    @Query("SELECT d FROM diary d WHERE d.day >= ?1 AND d.day <= ?2 AND d.user.id = ?3")
    List<DiaryEntity> getByRange(Date fromDate, Date toDate, Long userId);
}
