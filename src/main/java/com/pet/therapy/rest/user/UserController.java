package com.pet.therapy.rest.user;

import com.pet.therapy.config.security.CustomUserDetails;
import com.pet.therapy.rest.user.model.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("api/v1/")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/profile")
    @ResponseBody
    public User getProfile(
            @AuthenticationPrincipal CustomUserDetails user
    ) {
        return userService.mappedUser(user.getEntity());
    }
}
