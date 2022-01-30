package com.pet.therapy.rest.diary;

import com.pet.therapy.rest.diary.model.Diary;
import com.pet.therapy.rest.diary.model.DiaryCreateRequest;
import com.pet.therapy.rest.diary.model.DiaryMapper;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("api/v1/diary")
@Validated
public class DiaryController {

    private final DiaryService diaryService;
    private final DiaryMapper diaryMapper;

    public DiaryController(DiaryService diaryService, DiaryMapper diaryMapper) {
        this.diaryService = diaryService;
        this.diaryMapper = diaryMapper;
    }

    @PostMapping
    public @ResponseBody
    Diary create(
            @Valid @RequestBody DiaryCreateRequest request
    ) {
        var entity = diaryService.create(request);
        return diaryMapper.toModel(entity);
    }

}
