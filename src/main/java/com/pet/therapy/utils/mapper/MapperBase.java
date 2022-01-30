package com.pet.therapy.utils.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class MapperBase<T, Y> {

    public List<T> entityListToModel(List<Y> list) {
        if (list == null) {
            return new ArrayList<>();
        }

        return list.stream()
                .map(this::toModel)
                .collect(Collectors.toList());
    }

    public T toModel(Y entity) {
        return null;
    }
}
