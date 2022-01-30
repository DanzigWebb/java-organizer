package com.pet.therapy.rest.user;

import com.pet.therapy.config.security.jwt.JwtProvider;
import com.pet.therapy.db.entity.UserEntity;
import com.pet.therapy.db.repo.UserRepo;
import com.pet.therapy.rest.exceptions.UserNotFoundException;
import com.pet.therapy.rest.user.model.User;
import com.pet.therapy.rest.user.model.UserMapper;
import com.pet.therapy.rest.user.model.UserSigninResponse;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service()
public class UserService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;
    private final JwtProvider jwtProvider;

    public UserService(UserRepo userRepo, PasswordEncoder passwordEncoder, UserMapper userMapper, JwtProvider jwtProvider) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
        this.jwtProvider = jwtProvider;
    }

    public UserEntity getUserByLoginAndPassword(String login, String password) {
        var entity = userRepo.findByEmail(login);
        if (entity != null) {
            if (passwordEncoder.matches(password, entity.getPassword())) {
                return entity;
            }
        }

        return null;
    }

    public User create(UserEntity user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        var entity = userRepo.save(user);
        return userMapper.toModel(entity);
    }

    public UserSigninResponse signin(String login, String password) {
        var entity = getUserByLoginAndPassword(login, password);
        var user = userMapper.toModel(entity);
        var token = jwtProvider.generateToken(user.getEmail());

        return new UserSigninResponse(token, user);
    }
}
