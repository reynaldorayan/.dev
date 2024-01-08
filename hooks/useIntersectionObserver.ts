"use client";

import { useEffect, useRef } from "react";

export const ioConfig: IntersectionObserverInit = {
	root: null,
	rootMargin: "0px",
	threshold: 0.8,
};

export default function useIntersectionObserver(
	callback: IntersectionObserverCallback,
	intersectionObserverConfig?: IntersectionObserverInit
) {
	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			callback,
			intersectionObserverConfig ?? ioConfig
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	return ref;
}
