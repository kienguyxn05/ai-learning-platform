package com.ailearning.backend.service;

import com.ailearning.backend.dto.CourseDetailDto;
import com.ailearning.backend.dto.ModuleWithLessonsDto;
import com.ailearning.backend.entity.Course;
import com.ailearning.backend.entity.CourseModule;
import com.ailearning.backend.entity.Lesson;
import com.ailearning.backend.repository.CourseRepository;
import com.ailearning.backend.repository.LessonRepository;
import com.ailearning.backend.repository.ModuleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CourseService {

    private final CourseRepository courseRepository;
    private final ModuleRepository moduleRepository;
    private final LessonRepository lessonRepository;

    /**
     * Lấy toàn bộ khóa học
     */
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    /**
     * Lấy chi tiết khóa học theo slug kèm toàn bộ Module và Lesson
     */
    public Optional<CourseDetailDto> getCourseDetailBySlug(String slug) {
        Optional<Course> courseOpt = courseRepository.findBySlug(slug);
        if (courseOpt.isEmpty()) {
            return Optional.empty();
        }

        Course course = courseOpt.get();
        List<CourseModule> modules = moduleRepository.findByCourseIdOrderByPositionAsc(course.getId());

        List<ModuleWithLessonsDto> moduleDtos = modules.stream().map(mod -> {
            List<Lesson> lessons = lessonRepository.findByModuleIdOrderByPositionAsc(mod.getId());
            return ModuleWithLessonsDto.builder()
                    .id(mod.getId())
                    .courseId(mod.getCourseId())
                    .title(mod.getTitle())
                    .position(mod.getPosition())
                    .lessons(lessons)
                    .build();
        }).toList();

        return Optional.of(CourseDetailDto.builder()
                .course(course)
                .modules(moduleDtos)
                .build());
    }

    /**
     * Lấy chi tiết 1 bài học theo slug
     */
    public Optional<Lesson> getLessonBySlug(String slug) {
        return lessonRepository.findBySlug(slug);
    }
}
