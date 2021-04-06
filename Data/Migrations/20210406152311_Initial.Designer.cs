﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using romeyouup.Helpers;

namespace romeyouup.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210406152311_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.4");

            modelBuilder.Entity("romeyouup.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("FirstName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("LastName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Password")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Username")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("romeyouup.Entities.User", b =>
                {
                    b.OwnsMany("romeyouup.Entities.RefreshToken", "RefreshTokens", b1 =>
                        {
                            b1.Property<int>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("int");

                            b1.Property<DateTime>("Created")
                                .HasColumnType("datetime(6)");

                            b1.Property<string>("CreatedByIp")
                                .HasColumnType("longtext CHARACTER SET utf8mb4");

                            b1.Property<DateTime>("Expires")
                                .HasColumnType("datetime(6)");

                            b1.Property<string>("ReplacedByToken")
                                .HasColumnType("longtext CHARACTER SET utf8mb4");

                            b1.Property<DateTime?>("Revoked")
                                .HasColumnType("datetime(6)");

                            b1.Property<string>("RevokedByIp")
                                .HasColumnType("longtext CHARACTER SET utf8mb4");

                            b1.Property<string>("Token")
                                .HasColumnType("longtext CHARACTER SET utf8mb4");

                            b1.Property<int>("UserId")
                                .HasColumnType("int");

                            b1.HasKey("Id");

                            b1.HasIndex("UserId");

                            b1.ToTable("RefreshToken");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.Navigation("RefreshTokens");
                });
#pragma warning restore 612, 618
        }
    }
}