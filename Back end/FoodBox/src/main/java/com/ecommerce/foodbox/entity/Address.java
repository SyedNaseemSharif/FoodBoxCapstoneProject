package com.ecommerce.foodbox.entity;

import lombok.Getter;

import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="address")
@Getter
@Setter
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="Flat")
    private String Flat;

    @Column(name="AreaStreetVillage")
    private String AreaStreetVillage;

    @Column(name="LandMark")
    private String LandMark;

    @Column(name="TownCity")
    private String TownCity;

    @Column(name="State")
    private String State;
    
    @Column(name="Pincode")
    private String Pincode;

    @OneToOne
    @PrimaryKeyJoinColumn
    private Order order;
}





