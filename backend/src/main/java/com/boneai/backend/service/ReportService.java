package com.boneai.backend.service;

import com.boneai.backend.entity.Report;
import com.boneai.backend.entity.User;
import com.boneai.backend.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReportService {
    @Autowired
    private ReportRepository reportRepository;

    public Report generateReport(Report report) {
        return reportRepository.save(report);
    }

    public Optional<Report> getReportById(Long id) {
        return reportRepository.findById(id);
    }

    public List<Report> getReportsByUser(Long userId) {
        User user = new User();
        user.setUserId(userId);
        return reportRepository.findByUser(user);

    }
}
