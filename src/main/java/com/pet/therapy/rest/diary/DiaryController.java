package com.pet.therapy.rest.diary;

import com.pet.therapy.config.security.CustomUserDetails;
import com.pet.therapy.rest.diary.model.Diary;
import com.pet.therapy.rest.diary.model.DiaryCreateRequest;
import com.pet.therapy.rest.diary.model.DiaryMapper;
import jakarta.validation.Valid;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("api/v1/diary")
@Validated
public class DiaryController {

    private final DiaryService diaryService;

    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }

    @PostMapping
    public @ResponseBody
    Diary create(
            @Valid @RequestBody DiaryCreateRequest request,
            @AuthenticationPrincipal CustomUserDetails user
    ) {
        return diaryService.create(request, user.getEntity());
    }

    @GetMapping
    public @ResponseBody
    List<Diary> get(
            @RequestParam Long from,
            @RequestParam Long to,
            @AuthenticationPrincipal CustomUserDetails user
    ) {
        Date fromDate = new Date(from);
        Date toDate = new Date(to);

        return diaryService.getByRange(fromDate, toDate, user.getEntity());
    }
}
