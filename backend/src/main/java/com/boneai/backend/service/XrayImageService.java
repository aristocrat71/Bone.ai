package com.boneai.backend.service;

import com.boneai.backend.entity.XrayImage;
import com.boneai.backend.repository.XrayImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class XrayImageService {
    @Autowired
    private XrayImageRepository xrayImageRepository;

    public XrayImage saveImage(XrayImage image) {
        return xrayImageRepository.save(image);
    }

    public Optional<XrayImage> getImageById(Long id) {
        return xrayImageRepository.findById(id);
    }
}
