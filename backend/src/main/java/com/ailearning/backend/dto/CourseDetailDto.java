package com.ailearning.backend.dto;

import com.ailearning.backend.entity.Course;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseDetailDto {
    private Course course;
    private List<ModuleWithLessonsDto> modules;
}
