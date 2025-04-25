package com.boneai.backend.config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dtchcrwn9",
                "api_key", "224466977721211",
                "api_secret", "WBqAry5UJrCuCHGza_1M2xGSjSs",
                "secure", true
        ));
    }
}
