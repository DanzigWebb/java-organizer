package com.pet.therapy.rest.diary.model;

import com.pet.therapy.db.entity.DiaryEntity;
import com.pet.therapy.utils.MapperBase;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiaryMapper extends MapperBase {
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

    public List<Diary> listToModel(List<DiaryEntity> entities) {
        return entityListToModel(entities, this::toModel);
    }
}