package com.ailearning.backend.controller;

import com.ailearning.backend.dto.CourseDetailDto;
import com.ailearning.backend.entity.Course;
import com.ailearning.backend.entity.Lesson;
import com.ailearning.backend.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Cho phép Next.js gọi API
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    /**
     * API: Lấy danh sách tất cả khóa học
     * URL: GET http://localhost:8080/api/courses
     */
    @GetMapping("/courses")
    public List<Course> getCourses() {
        return courseService.getAllCourses();
    }

    /**
     * API: Lấy chi tiết 1 khóa học theo slug (kèm modules & lessons)
     * URL: GET http://localhost:8080/api/courses/{slug}
     */
    @GetMapping("/courses/{slug}")
    public ResponseEntity<CourseDetailDto> getCourseBySlug(@PathVariable String slug) {
        return courseService.getCourseDetailBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * API: Lấy chi tiết 1 bài học theo slug
     * URL: GET http://localhost:8080/api/lessons/{slug}
     */
    @GetMapping("/lessons/{slug}")
    public ResponseEntity<Lesson> getLessonBySlug(@PathVariable String slug) {
        return courseService.getLessonBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
