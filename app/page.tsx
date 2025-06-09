"use client";
import React, { useState } from "react";

const projects = [
  {
    title: "CODENAME X",
    subtitle: "PROJECT 1",
    color: "var(--color-main1)",
    description: "A brief description of Codename X goes here.",
  },
  {
    title: "CODENAME Z",
    subtitle: "PROJECT 2",
    color: "var(--color-main1)",
    description: "A brief description of Codename Z goes here.",
  },
  {
    title: "CODENAME Y",
    subtitle: "PROJECT 3",
    color: "var(--color-main1)",
    description: "A brief description of Codename Y goes here.",
  },
];

const HOME: React.FC = () => {
  const [bgColor, setBgColor] = useState("var(--color-main2)");

  // Handler to change background color
  const handleBgChange = (color: string) => {
    setBgColor(color);
  };

  return (
    <main
      className="bg-[var(--color-main2)] flex flex-col items-center min-h-screen px-4"
      style={{ background: bgColor }}
    >
      {/* Welcome Section */}
      <section className="w-full max-w-4xl flex flex-col items-center text-center py-56 gap-4">
        <p
          className="text-6xl md:text-8xl font-extrabold"
          style={{ color: "var(--color-main1)" }}
        >
          owenomc
        </p>

        {/* bg-color changing buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            className="font-semibold px-8 py-3 rounded-full shadow transition"
            style={{
              color: "var(--color-main1)",
              border: "2px solid var(--color-main1)",
              background: "var(--color-main2)",
            }}
            onClick={() => handleBgChange("var(--color-main2)")}
          >
            <span className="block">Black</span>
          </button>
          <button
            type="button"
            className="font-semibold px-8 py-3 rounded-full shadow transition border-2"
            style={{
              color: "var(--color-main1)",
              borderColor: "var(--color-main1)",
              background: "var(--color-main5)",
            }}
            onClick={() => handleBgChange("var(--color-main5)")}
          >
            <span className="block">Blue</span>
          </button>
          <button
            type="button"
            className="font-semibold px-8 py-3 rounded-full shadow transition border-2"
            style={{
              color: "var(--color-main1)",
              borderColor: "var(--color-main1)",
              background: "var(--color-main6)",
            }}
            onClick={() => handleBgChange("var(--color-main6)")}
          >
            <span className="block">Red</span>
          </button>
          <button
            type="button"
            className="font-semibold px-8 py-3 rounded-full shadow transition border-2"
            style={{
              color: "var(--color-main1)",
              borderColor: "var(--color-main1)",
              background: "var(--color-main7)",
            }}
            onClick={() => handleBgChange("var(--color-main7)")}
          >
            <span className="block">Green</span>
          </button>
          <button
            type="button"
            className="font-semibold px-8 py-3 rounded-full shadow transition border-2"
            style={{
              color: "var(--color-main1)",
              borderColor: "var(--color-main1)",
              background: "var(--color-main8)",
            }}
            onClick={() => handleBgChange("var(--color-main8)")}
          >
            <span className="block">Yellow</span>
          </button>
        </div>
      </section>

      {/* Divider */}
      <div
        className="w-3/4 h-px my-12"
        style={{ backgroundColor: "var(--color-main1)" }}
      />

      {/* About Section */}
      <section
        id="about"
        className="w-full max-w-3xl flex flex-col items-center text-center py-16"
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--color-main1)" }}
        >
          ABOUT
        </h2>
        <p className="text-lg max-w-xl" style={{ color: "var(--color-main1)" }}>
          My name is Owen Crandall, a Computer Science Major at the University
          of Minnesota Duluth with experience in frontend development, UI/UX
          design, and mobile apps.
        </p>

        {/* Skills Section */}
        <section className="w-full max-w-3xl flex flex-wrap justify-center gap-4 py-8 ">
          {[
            "UX/UI DESIGN",
            "FRONTEND",
            "ANDROID DEVELOPMENT",
            "NEXT.JS",
            "REACT",
            "FIGMA",
          ].map((label) => (
            <span
              key={label}
              className="rounded-full px-6 py-2 font-semibold text-base tracking-wide"
              style={{
                border: "2px solid var(--color-main1)",
                color: "var(--color-main1)",
              }}
            >
              {label}
            </span>
          ))}
        </section>
      </section>

      {/* Divider */}
      <div
        className="w-3/4 h-px my-12"
        style={{ backgroundColor: "var(--color-main1)" }}
      />

      {/* Projects Header */}
      <section
        id="projects"
        className="w-full max-w-4xl flex flex-col items-center text-center py-8"
      >
        <p
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--color-main1)" }}
        >
          PROJECTS
        </p>
        <p className="text-lg max-w-xl" style={{ color: "var(--color-main1)" }}>
          Showcasing my skills and creativity
        </p>
        
      {/* Projects List */}
      <section className="w-full max-w-4xl flex flex-col gap-8 py-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 p-6"
            style={{
              border: "2px solid var(--color-main1)",
            }}
          >
            <div className="flex-1 text-center md:text-left">
              <p
                className="text-lg font-medium"
                style={{ color: "var(--color-main1)" }}
              >
                {project.subtitle}
              </p>
              <h3
                className="text-2xl font-bold"
                style={{ color: project.color }}
              >
                {project.title}
              </h3>
              <p className="mt-2" style={{ color: "var(--color-main1)" }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </section>
      </section>

      {/* Divider */}
      <div
        className="w-3/4 h-px my-12"
        style={{ backgroundColor: "var(--color-main1)" }}
      />

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full max-w-3xl flex flex-col items-center text-center py-16"
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--color-main1)" }}
        >
          CONTACT
        </h2>
        <p className="text-lg mb-4" style={{ color: "var(--color-main1)" }}>
          Interested in working together or want to connect?
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=owenmcrandall@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-semibold px-8 py-3 rounded-full shadow transition relative group"
          style={{
            color: "var(--color-main1)",
            border: "2px solid var(--color-main1)",
          }}
        >
          <span className="block group-hover:hidden">Email Me</span>
          <span className="hidden group-hover:block">
            Open new tab with Gmail
          </span>
        </a>
      </section>
    </main>
  );
};

export default HOME;
