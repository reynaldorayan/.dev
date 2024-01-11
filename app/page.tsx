"use client";

import Aside from "@/components/Layout/Aside";
import Section from "@/components/Layout/Section";
import About from "@/components/Portfolio/About";
import Experience from "@/components/Portfolio/Experience";
import Projects from "@/components/Portfolio/Projects";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useAppState, { IntersectedSectionProp } from "@/store";
import { useEffect } from "react";
import { BsArrowDownUp, BsArrowDown, BsArrowUp } from "react-icons/bs";

export default function Home() {
	const {
		intersectedSection,
		setIntersectedSection,
		pageScrollPercentage,
		setPageScrollPercentage,
	} = useAppState((store) => store);

	const handleScroll = () => {
		const windowHeight = window.innerHeight;
		const fullHeight = document.documentElement.scrollHeight;
		const currentPosition = window.scrollY;

		const scrollPercentage = Math.round(
			(currentPosition / (fullHeight - windowHeight)) * 100
		);

		setPageScrollPercentage(scrollPercentage.toString().concat("%"));
	};

	useEffect(() => {
		setIntersectedSection("about");
		setPageScrollPercentage("0px");

		if (typeof window !== undefined) {
			addEventListener("scroll", handleScroll);
		}

		return () => {
			removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleObserverCallback: IntersectionObserverCallback = (
		entries,
		observer
	) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const section = entry.target.getAttribute(
					"data-slide"
				) as IntersectedSectionProp;
				setIntersectedSection(section);
			}
		});
	};

	const aboutRef = useIntersectionObserver(handleObserverCallback);
	const experienceRef = useIntersectionObserver(handleObserverCallback);
	const projectsRef = useIntersectionObserver(handleObserverCallback);

	return (
		<main id="portfolio" className="grid lg:grid-cols-[42%_58%] select-none">
			<Aside />

			<article className="h-screen">
				<Section name="about" ref={aboutRef} component={<About />} />
				<Section
					name="experience"
					ref={experienceRef}
					component={<Experience />}
				/>
				<Section
					name="projects"
					ref={projectsRef}
					component={<Projects />}
				/>
			</article>

			<div className="fixed bottom-0 left-2 z-[99] animate-bounce flex flex-col gap-1 justify-center items-center">
				<div className="border-b border-gray-500 text-sm">
					{pageScrollPercentage}
				</div>
				{intersectedSection === "about" ? (
					<BsArrowDown size={15} className="animate-pulse" />
				) : intersectedSection === "experience" ? (
					<BsArrowDownUp size={15} className="animate-pulse" />
				) : (
					<BsArrowUp size={15} className="animate-pulse" />
				)}
			</div>

			<ScrollProgressBar />
		</main>
	);
}
