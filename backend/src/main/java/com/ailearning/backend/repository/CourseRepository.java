package com.ailearning.backend.repository;

import com.ailearning.backend.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CourseRepository extends JpaRepository<Course, UUID> {

    /**
     * Tìm khóa học theo slug (đường dẫn URL)
     * Spring Data JPA tự động dịch tên hàm thành câu lệnh SQL:
     * SELECT * FROM courses WHERE slug = ?
     */
    Optional<Course> findBySlug(String slug);
}
