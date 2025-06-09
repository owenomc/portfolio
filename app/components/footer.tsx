"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{ display: "flex", flexDirection: "column" }}
      className="bg-[var(--color-main2)]"
    >
      {/* White Line */}
      <div className="w-full h-[1px] bg-white"></div>

      {/* Welcome Section */}
      <section
        style={{
          height: "30vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div className="p-6">
          {/* Intro */}

          <br />

          {/* Social Icons */}
          <div className="flex justify-center px-4 gap-4">
            {/* GitHub */}
            <Link href="https://github.com/owenomc" target="_blank" aria-label="GitHub">
              <FaGithub className="w-12 h-12" />
            </Link>
            <Link href="https://www.linkedin.com/in/owen-crandall" target="_blank" aria-label="GitHub">
              <FaLinkedin className="w-12 h-12" />
            </Link>
          </div>

          <br />

          {/* White Line */}
          <div className="w-full h-[2px] bg-white" style={{ backgroundColor: "var(--color-main1)" }}></div>

          <br />

          <p className="text-2xl">Owen Crandall</p>
          <p className="text-md sm:text-lg text-[var(--color-main4)]">
            © 2025 owenomc.vercel.app
          </p>
          <p className="text-md sm:text-lg text-[var(--color-main4)]">
            All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
