package com.plonit.ploggingservice.api.plogging.controller.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class FindCountDistanceRes {

    private Long count;

    private Double distance;

}
