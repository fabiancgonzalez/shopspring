package com.cart.ecom_proj.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public record ProductSummary(
        Integer id,
        String name,
        String description,
        String brand,
        BigDecimal price,
        String category,
        LocalDate releaseDate,
        boolean productAvailable,
        Integer stockQuantity,
        String imageName,
        String imageType
) {
}
