package com.boneai.backend.repository;

import com.boneai.backend.entity.XrayImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface XrayImageRepository extends JpaRepository<XrayImage, Long> {
}
