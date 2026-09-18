package com.ailearning.backend.repository;

import com.ailearning.backend.entity.CourseModule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ModuleRepository extends JpaRepository<CourseModule, UUID> {

    /**
     * Lấy danh sách module của 1 khóa học sắp xếp theo thứ tự position tăng dần
     * SQL: SELECT * FROM modules WHERE course_id = ? ORDER BY position ASC
     */
    List<CourseModule> findByCourseIdOrderByPositionAsc(UUID courseId);
}
