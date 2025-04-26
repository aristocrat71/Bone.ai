package com.boneai.backend.repository;

import com.boneai.backend.entity.Report;
import com.boneai.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReportRepository extends JpaRepository<Report, Long> {
    List<Report> findByUser(User user);
}