package com.adsmanagement.spaces;

import com.adsmanagement.wards.Ward;
import com.adsmanagement.wards.WardDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class SpaceDto {
    private Integer id;
    private String address;
    private Float longitude;
    private Float lat;
    private SpaceType type;
    private SpaceFormat format;
    private List<String> imgUrl;
    private boolean isPlanned;
    private WardDTO ward;
}
