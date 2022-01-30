package com.pet.therapy.rest.user.model;

import com.pet.therapy.db.entity.UserEntity;
import com.pet.therapy.utils.mapper.MapperBase;
import org.springframework.stereotype.Service;

@Service
public class UserMapper extends MapperBase<User, UserEntity> {

    @Override
    public User toModel(UserEntity entity) {
        var user = new User();

        user.setId(entity.getId().toString());
        user.setEmail(entity.getEmail());
        user.setName(entity.getName());

        return user;
    }
}
