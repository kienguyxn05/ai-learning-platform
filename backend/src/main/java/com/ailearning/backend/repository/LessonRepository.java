package com.ailearning.backend.repository;

import com.ailearning.backend.entity.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, UUID> {

    /**
     * Tìm bài học theo slug
     * SQL: SELECT * FROM lessons WHERE slug = ?
     */
    Optional<Lesson> findBySlug(String slug);

    /**
     * Lấy các bài học của 1 module sắp xếp theo position tăng dần
     * SQL: SELECT * FROM lessons WHERE module_id = ? ORDER BY position ASC
     */
    List<Lesson> findByModuleIdOrderByPositionAsc(UUID moduleId);
}
