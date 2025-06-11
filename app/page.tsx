"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../public/global.css';

const projects = [
	{
		title: "Flipfin - Finance AI",
		subtitle: "WEB & APP DEVELOPMENT",
		color: "var(--color-main1)",
		description: "Personal Finance Lessons and Games built for Web, Android and iOS",
		description2: "React Native Expo, TypeScript, Firebase, OpenAI",
		image: "/images/flipfin.jpg",
		dateStart: "June 2025",
		dateEnd: "PRESENT",
		github: "https://github.com/owenomc/flipfin",
	},
	{
		title: "GetFit & LinkedOut",
		subtitle: "APP DEVELOPMENT",
		color: "var(--color-main1)",
		description: "Software Engineering CS3541 - Android App Class Projects",
		description2: "Flutter, Dart, Firebase",
		image: "/images/linkedout.png",
		dateStart: "March 2025",
		dateEnd: "May 2025",
		github: "https://github.com/owenomc/getfit-linkedout",
	},
	{
		title: "Bulldog Rocketry Website ",
		subtitle: "WEB DEVELOPMENT",
		color: "var(--color-main1)",
		description: "Rebuilt SquareSpace Website in Next.js",
		description2: "Next.js, Node.js, TypeScript, Tailwind CSS, Git",
		image: "/images/bulldog-rocketry.png",
		dateStart: "August 2024",
		dateEnd: "May 2025",
		github: "https://github.com/owenomc/bulldog-rocketry",
	},
	{
		title: "ShareStrides",
		subtitle: "WEB DEVELOPMENT",
		color: "var(--color-main1)",
		description: "Online Fitness Platform - First Full-Stack Project",
		description2: "Next.js, Node.js, TypeScript, JavaScript, HTML, Tailwind CSS, Firebase, Git",
		image: "/images/sharestrides.png",
		dateStart: "June 2024",
		dateEnd: "September 2024",
		github: "https://github.com/owenomc/sharestrides",
	},
];

const sectionIds = ["home", "about", "projects", "contact"];

const HOME: React.FC = () => {
    const [bgColor, setBgColor] = useState("var(--color-main2)");
    const [visited, setVisited] = useState<Set<string>>(new Set());
    const [snapEnabled, setSnapEnabled] = useState(true);
    const [openProjectIdx, setOpenProjectIdx] = useState<number | null>(null);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const mainRef = useRef<HTMLDivElement>(null);

    // Always start at top on reload
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Use Intersection Observer for visited sections
    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if (entry.isIntersecting) {
                        setVisited((prev) => {
                            if (prev.has(id)) return prev;
                            const next = new Set(prev);
                            next.add(id);
                            return next;
                        });
                    }
                });
            },
            {
                threshold: 0.5, // 50% of section visible
            }
        );

        sectionIds.forEach((id) => {
            const el = sectionRefs.current[id];
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Handler to change background color
    const handleBgChange = (color: string) => {
        setBgColor(color);
    };

    return (
        <>
            {/* Progress Navigation Bar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-main2)] flex justify-center py-2 shadow">
                <ul className="flex gap-2 sm:gap-8 px-2">
                    {sectionIds.map((id) => {
                        const navTextColor =
                            bgColor === "var(--color-main2)" ? "white" : bgColor;
                        return (
                            <li
                                key={id}
                                className="flex items-center gap-1 sm:gap-2 text-base sm:text-lg"
                            >
                                <a
                                    href={`#${id}`}
                                    className="font-semibold"
                                    style={{
                                        color: navTextColor,
                                        transition: "color 0.2s",
                                    }}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </a>
                                {visited.has(id) && (
                                    <span
                                        className="inline-block"
                                        aria-label="Visited"
                                        style={{
                                            fontSize: "1.1em",
                                            color: navTextColor,
                                        }}
                                    >
                                        ✓
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <main
                ref={mainRef}
                className="bg-[var(--color-main2)] flex flex-col items-center min-h-screen px-1 sm:px-4"
                style={{
                    background: bgColor,
                    paddingTop: "48px", // slightly less for mobile
                    scrollSnapType: snapEnabled ? "y mandatory" : "none",
                    overflowY: "scroll",
                    height: "100vh",
                }}
            >
                {/* Welcome Section */}
                <section
                    id="home"
                    ref={(el) => {
                        sectionRefs.current["home"] = el;
                    }}
                    className="w-full max-w-md sm:max-w-4xl flex flex-col items-center text-center gap-4 min-h-screen justify-center px-2"
                    style={{ scrollSnapAlign: "start" }}
                >
                    <p
                        className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-extrabold"
                        style={{ color: "var(--color-main1)" }}
                    >
                        owenomc
                    </p>

                    {/* bg-color changing buttons */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                        <p
                            className="font-semibold px-0 py-3 max-w-xs sm:max-w-xl"
                            style={{ color: "var(--color-main1)" }}
                        >
                            bg-
                        </p>

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
                    className="w-11/12 sm:w-3/4 h-px my-8 sm:my-12"
                    style={{ backgroundColor: "var(--color-main1)" }}
                />

                {/* About Section */}
                <section
                    id="about"
                    ref={(el) => {
                        sectionRefs.current["about"] = el;
                    }}
                    className="w-full max-w-xs xs:max-w-sm sm:max-w-3xl flex flex-col items-center text-center py-6 sm:py-16 min-h-screen justify-center px-1 sm:px-2"
                    style={{ scrollSnapAlign: "start" }}
                >
                    <h2
                        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
                        style={{ color: "var(--color-main1)" }}
                    >
                        ABOUT
                    </h2>
                    <p
                        className="text-sm xs:text-base sm:text-lg max-w-xs sm:max-w-xl mb-2"
                        style={{ color: "var(--color-main1)" }}
                    >
                        My name is Owen Crandall, a Computer Science Major at the University
                        of Minnesota Duluth with experience in frontend development, UI/UX
                        design, and mobile apps.
                    </p>

                    <p
                        className="text-lg xs:text-xl sm:text-2xl md:text-3xl max-w-xs sm:max-w-xl font-bold mt-2 sm:mt-6"
                        style={{ color: "var(--color-main1)" }}
                    >
                        Skills
                    </p>

                    {/* Skills Section */}
                    <section className="w-full flex flex-wrap justify-center gap-1 xs:gap-2 sm:gap-4 py-2 sm:py-8 mb-2">
                        {[
                            "UX/UI DESIGN",
                            "Frontend",
                            "Node.js",
                            "Next.js",
                            "React",
                            "Flutter",
                            "Android",
                        ].map((label) => (
                            <span
                                key={label}
                                className="rounded-full px-3 xs:px-4 sm:px-6 py-1 sm:py-2 font-semibold text-xs xs:text-sm sm:text-base tracking-wide mb-1"
                                style={{
                                    border: "2px solid var(--color-main1)",
                                    color: "var(--color-main1)",
                                }}
                            >
                                {label}
                            </span>
                        ))}
                    </section>

                    <p
                        className="text-lg xs:text-xl sm:text-2xl md:text-3xl max-w-xs sm:max-w-xl font-bold mt-2 sm:mt-6"
                        style={{ color: "var(--color-main1)" }}
                    >
                        Languages
                    </p>

                    {/* Languages Section */}
                    <section className="w-full flex flex-wrap justify-center gap-1 xs:gap-2 sm:gap-4 py-2 sm:py-8 mb-2">
                        {[
                            "C++",
                            "Java",
                            "JavaScript",
                            "TypeScript",
                            "Python",
                            "SQL",
                            "Dart",
                            "HTML",
                            "CSS",
                        ].map((label) => (
                            <span
                                key={label}
                                className="rounded-full px-3 xs:px-4 sm:px-6 py-1 sm:py-2 font-semibold text-xs xs:text-sm sm:text-base tracking-wide mb-1"
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
                    className="w-11/12 sm:w-3/4 h-px my-8 sm:my-12"
                    style={{ backgroundColor: "var(--color-main1)" }}
                />

                {/* Projects Header */}
                <section
                    id="projects"
                    ref={(el) => {
                        sectionRefs.current["projects"] = el;
                    }}
                    className="w-full max-w-md sm:max-w-4xl flex flex-col items-center text-center py-8 min-h-screen justify-center px-2"
                    style={{ scrollSnapAlign: "end" }}
                >
                    <p
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                        style={{ color: "var(--color-main1)" }}
                    >
                        PROJECTS
                    </p>

                    {/* Projects List */}
                    <section className="w-full flex flex-col gap-4 sm:gap-8 py-4 sm:py-8">
                        {openProjectIdx === null
                            ? projects.map((project, idx) => (
									<div
										key={project.title}
										className="rounded-xl shadow-lg flex flex-col items-stretch p-3 sm:p-6"
										style={{
											border: "2px solid var(--color-main1)",
										}}
									>
										<button
											className="flex justify-between items-center w-full text-left focus:outline-none"
											onClick={() => setOpenProjectIdx(idx)}
											aria-expanded={false}
											aria-controls={`project-details-${idx}`}
											style={{ background: "transparent" }}
											type="button"
										>
											<div className="flex-1 text-center md:text-left">
												<p
													className="text-sm sm:text-md font-medium"
													style={{ color: "var(--color-main1)" }}
												>
													{project.subtitle}
												</p>
												<h3
													className="text-xl sm:text-2xl font-bold"
													style={{ color: project.color }}
												>
													{project.title}
												</h3>
											</div>
											<span
												className="ml-2 text-2xl select-none"
												style={{ color: "var(--color-main1)" }}
												aria-hidden="true"
											>
												▼
											</span>
										</button>
									</div>
							  ))
							: (
								<div
									className="rounded-xl shadow-lg flex flex-col items-stretch p-3 sm:p-6"
									style={{
										border: "2px solid var(--color-main1)",
									}}
								>
									<button
										className="flex justify-between items-center w-full text-left focus:outline-none"
										onClick={() => setOpenProjectIdx(null)}
										aria-expanded={true}
										aria-controls={`project-details-${openProjectIdx}`}
										style={{ background: "transparent" }}
										type="button"
									>
										<div className="flex-1 text-center md:text-left">
											<p
												className="text-sm sm:text-md font-medium"
												style={{ color: "var(--color-main1)" }}
											>
												{projects[openProjectIdx].subtitle}
											</p>
											<h3
												className="text-xl sm:text-2xl font-bold"
												style={{ color: projects[openProjectIdx].color }}
											>
												{projects[openProjectIdx].title}
											</h3>
										</div>
										<span
											className="ml-2 text-2xl select-none"
											style={{ color: "var(--color-main1)" }}
											aria-hidden="true"
										>
											▲
										</span>
									</button>
									{/* Only the details are conditionally rendered */}
									<div
										id={`project-details-${openProjectIdx}`}
										className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center bg-white/80 rounded-xl p-2 xs:p-3 sm:p-4 shadow-inner transition-all duration-300"
										style={{ color: "var(--color-main1)" }}
									>
										{/* Project Image */}
										{projects[openProjectIdx].image && (
                                        	<img
                                                src={projects[openProjectIdx].image}
                                                alt={projects[openProjectIdx].title}
                                                className="w-40 xs:w-40 sm:w-40 h-40 xs:h-40 sm:h-40 object-cover rounded-lg border shadow-md mb-2 sm:mb-0"
                                                style={{ borderColor: "var(--color-main1)" }}
                                            />
                                        )}
										<div className="flex-1 flex flex-col items-center sm:items-start gap-1 xs:gap-2">
											{/* Dates */}
											<div className="text-xs sm:text-sm font-semibold mb-1" style={{ color: "var(--color-main2)" }}>
												{projects[openProjectIdx].dateStart} – {projects[openProjectIdx].dateEnd}
											</div>
											{/* Description */}
											<div className="text-base sm:text-lg font-bold mb-1 text-center sm:text-left" style={{ color: "var(--color-main2)" }}>
												{projects[openProjectIdx].description}
											</div>
											{/* Skills Bubbles from description2 */}
											<div className="flex flex-wrap gap-1 xs:gap-2 py-1 mb-2 justify-center sm:justify-start">
												{projects[openProjectIdx].description2
													?.split(",")
													.map((skill) => skill.trim())
													.filter(Boolean)
													.map((skill) => (
														<span
															key={skill}
															className="rounded-full px-2 xs:px-3 py-1 font-semibold text-xs sm:text-sm tracking-wide border shadow"
															style={{
																border: "2px solid var(--color-main2)",
																color: "var(--color-main2)",
															}}
														>
															{skill}
														</span>
													))}
											</div>
											{/* GitHub Link */}
											{projects[openProjectIdx].github && (
												<a
													href={projects[openProjectIdx].github}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 px-4 py-2 rounded-full border transition group shadow mt-1"
													style={{
														border: "2px solid var(--color-main2)",
														color: "var(--color-main2)",
													}}
												>
													<FaGithub className="w-5 h-5" />
													<span className="text-sm sm:text-md block group-hover:hidden font-semibold">View Code</span>
													<span className="text-sm sm:text-md hidden group-hover:block break-all font-semibold">{projects[openProjectIdx].github}</span>
												</a>
											)}
										</div>
									</div>
								</div>
							)
						}
					</section>
				</section>

				{/* Divider */}
				<div
					className="w-11/12 sm:w-3/4 h-px my-8 sm:my-12"
					style={{ backgroundColor: "var(--color-main1)" }}
				/>

				{/* Contact Section */}
				<section
					id="contact"
					ref={(el) => {
						sectionRefs.current["contact"] = el;
					}}
					className="w-full max-w-md sm:max-w-3xl flex flex-col items-center text-center min-h-screen justify-center gap-4 sm:gap-6 py-8 sm:py-16 px-2"
					style={{ scrollSnapAlign: "center" }}
				>
					<p
						className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
						style={{ color: "var(--color-main1)" }}
					>
						CONTACT
					</p>
					<p
						className="text-base sm:text-lg mb-2"
						style={{ color: "var(--color-main1)" }}
					>
						Interested in working together or want to connect?
					</p>
					<a
						href="https://mail.google.com/mail/?view=cm&fs=1&to=owenmcrandall@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block font-semibold px-8 py-3 rounded-full shadow transition relative group mb-4"
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

					{/* White Line */}
					<div
						className="w-full h-[2px] mb-4"
						style={{ backgroundColor: "var(--color-main1)" }}
					></div>

					<p className="text-md sm:text-lg">
						Source code for this portfolio is available on{" "}
						<Link
							href="https://github.com/owenomc/portfolio"
							target="_blank"
							className="inline-block font-semibold rounded-full transition relative group"
						>
							<span className="block group-hover:hidden">GitHub</span>
							<span className="hidden group-hover:block">
								https://github.com/owenomc/portfolio
							</span>
						</Link>
					</p>

					{/* Social Icons */}
					<div className="flex justify-center px-4 gap-4 mb-2">
						<Link
							href="https://www.linkedin.com/in/owen-crandall"
							target="_blank"
							aria-label="LinkedIn"
						>
							<FaLinkedin className="w-12 h-12" />
						</Link>
						<Link
							href="https://github.com/owenomc"
							target="_blank"
							aria-label="GitHub"
						>
							<FaGithub className="w-12 h-12" />
						</Link>
					</div>

					<p className="text-2xl">Owen Crandall</p>
					<p className="text-md sm:text-lg">
						© 2025 owenomc.vercel.app <br />
						All rights reserved.
					</p>
				</section>
			</main>
		</>
	);
};

export default HOME;
