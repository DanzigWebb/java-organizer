package com.pet.therapy.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class MapperBase {

    protected <T, R> List<T>
    entityListToModel(List<R> list, Function<? super R, ? extends T> fn) {
        if (list == null) {
            return new ArrayList<>();
        }

        return list.stream().map(fn).collect(Collectors.toList());
    }
}
