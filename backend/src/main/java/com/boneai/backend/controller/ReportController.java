package com.boneai.backend.controller;

import com.boneai.backend.entity.Report;
import com.boneai.backend.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reports")
public class ReportController {
    @Autowired
    private ReportService reportService;

    @PostMapping("/generate")
    public Report generateReport(@RequestBody Report report) {
        return reportService.generateReport(report);
    }

    @GetMapping("/{id}")
    public Optional<Report> getReport(@PathVariable Long id) {
        return reportService.getReportById(id);
    }

    @GetMapping("/user/{userId}")
    public List<Report> getUserReports(@PathVariable Long userId) {
        return reportService.getReportsByUser(userId);
    }
}
