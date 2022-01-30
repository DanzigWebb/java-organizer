package com.pet.therapy.rest.diary;

import com.pet.therapy.db.entity.DiaryEntity;
import com.pet.therapy.db.repo.DiaryRepo;
import com.pet.therapy.rest.diary.model.DiaryCreateRequest;
import org.springframework.stereotype.Service;

@Service
public class DiaryService {
    private final DiaryRepo diaryRepo;

    public DiaryService(DiaryRepo diaryRepo) {
        this.diaryRepo = diaryRepo;
    }


    DiaryEntity create(DiaryCreateRequest request) {
        var entity = new DiaryEntity();

        entity.setDay(request.getDay());

        entity.setSituation(request.getSituation());
        entity.setThink(request.getThink());
        entity.setEmotions(request.getEmotions());
        entity.setReaction(request.getReaction());
        entity.setBodySensation(request.getBodySensation());

        return diaryRepo.save(entity);
    }
}
