package com.pet.therapy.rest.user;

import com.pet.therapy.db.entity.UserEntity;
import com.pet.therapy.rest.user.model.User;
import com.pet.therapy.rest.user.model.UserSigninRequest;
import com.pet.therapy.rest.user.model.UserSigninResponse;
import com.pet.therapy.rest.user.model.UserSignupRequest;
import jakarta.validation.Valid;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
@Validated
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/sign-up")
    @ResponseBody
    public User signup(@Valid @RequestBody UserSignupRequest request) {
        var entity = new UserEntity();

        entity.setName(request.getName());
        entity.setEmail(request.getEmail());
        entity.setPassword(request.getPassword());

        return userService.create(entity);
    }

    @PostMapping("/sign-in")
    @ResponseBody
    public UserSigninResponse signin(@Valid @RequestBody UserSigninRequest request) {
        return userService.signin(request.getLogin(), request.getPassword());
    }
}
