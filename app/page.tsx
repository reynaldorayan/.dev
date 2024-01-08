"use client";

import Aside from "@/components/Layout/Aside";
import Section from "@/components/Layout/Section";
import About from "@/components/Portfolio/About";
import Experience from "@/components/Portfolio/Experience";
import Projects from "@/components/Portfolio/Projects";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useAppState, { IntersectedSectionProp } from "@/store";

export default function Home() {
	const { setIntersectedSection } = useAppState((store) => store);

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
		<main id="portfolio" className="grid md:grid-cols-2">
			<Aside />
			<article className="h-screen">
				<Section
					name="projects"
					ref={projectsRef}
					component={<Projects />}
				/>
				<Section
					name="experience"
					ref={experienceRef}
					component={<Experience />}
				/>
				<Section name="about" ref={aboutRef} component={<About />} />
			</article>
		</main>
	);
}
