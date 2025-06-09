'use client';
import React from "react";

const NotFound: React.FC = () => {
  return (
       <main
      className="bg-[var(--color-main2)] flex flex-col items-center min-h-screen px-4"
    >
      
      {/* Divider */}
      <div
        className="w-3/4 h-px my-12"
        style={{ backgroundColor: "var(--color-main1)" }}
      />

      {/* About Section */}
      <section
        id="about"
        className="w-full max-w-3xl flex flex-col items-center text-center py-48"
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--color-main1)" }}
        >
          404
        </h2>
        <p className="text-lg max-w-xl" style={{ color: "var(--color-main1)" }}>
          Page not found. It seems the page you are looking for does not exist.
        </p>
      </section>

      {/* Divider */}
      <div
        className="w-3/4 h-px my-12"
        style={{ backgroundColor: "var(--color-main1)" }}
      />
    </main>
  );
};

export default NotFound;
