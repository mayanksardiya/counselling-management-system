package com.admission.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String email;
    private String password;
    private String phone;
    private Double tenthMarks;
    private Double twelfthMarks;
    private Double entranceScore;
    private String preferredBranch;
    private String status = "PENDING";

    private LocalDateTime createdAt = LocalDateTime.now();
}