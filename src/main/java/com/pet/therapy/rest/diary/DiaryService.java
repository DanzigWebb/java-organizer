package com.pet.therapy.rest.diary;

import com.pet.therapy.db.entity.DiaryEntity;
import com.pet.therapy.db.entity.UserEntity;
import com.pet.therapy.db.repo.DiaryRepo;
import com.pet.therapy.rest.diary.model.Diary;
import com.pet.therapy.rest.diary.model.DiaryCreateRequest;
import com.pet.therapy.rest.diary.model.DiaryMapper;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class DiaryService {
    private final DiaryRepo diaryRepo;
    private final DiaryMapper diaryMapper;

    public DiaryService(DiaryRepo diaryRepo, DiaryMapper diaryMapper) {
        this.diaryRepo = diaryRepo;
        this.diaryMapper = diaryMapper;
    }

    Diary create(DiaryCreateRequest request, UserEntity user) {
        var entity = new DiaryEntity();

        entity.setDay(request.getDay());
        entity.setUser(user);

        entity.setSituation(request.getSituation());
        entity.setThink(request.getThink());
        entity.setEmotions(request.getEmotions());
        entity.setReaction(request.getReaction());
        entity.setBodySensation(request.getBodySensation());

        return diaryMapper.toModel(diaryRepo.save(entity));
    }

    List<Diary> getByRange(Date from, Date to, UserEntity user) {
        var entities = diaryRepo.getByRange(from, to, user.getId());
        return diaryMapper.entityListToModel(entities);
    }
}
