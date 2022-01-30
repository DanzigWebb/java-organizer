package com.pet.therapy.rest.diary.model;

import com.pet.therapy.db.entity.DiaryEntity;
import org.springframework.stereotype.Service;

@Service
public class DiaryMapper {
    public Diary toModel(DiaryEntity entity) {
        var diary = new Diary();

        diary.setId(entity.getId().toString());
        diary.setDay(entity.getDay());
        diary.setSituation(entity.getSituation());
        diary.setThink(entity.getThink());
        diary.setEmotions(entity.getEmotions());
        diary.setReaction(entity.getReaction());
        diary.setBodySensation(entity.getBodySensation());

        return diary;
    }
}