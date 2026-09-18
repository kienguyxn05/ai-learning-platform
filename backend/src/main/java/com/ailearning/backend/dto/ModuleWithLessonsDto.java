package com.ailearning.backend.dto;

import com.ailearning.backend.entity.Course;
import com.ailearning.backend.entity.Lesson;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ModuleWithLessonsDto {
    private UUID id;
    private UUID courseId;
    private String title;
    private Integer position;
    private List<Lesson> lessons;
}
