import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import data, { DataProps } from "./data";

export type IntersectedSectionProp = "about" | "experience" | "projects";

interface AppState {
	data: DataProps;
	intersectedSection: IntersectedSectionProp;
	setIntersectedSection: (intersectedSection: IntersectedSectionProp) => void;
	pageScrollPercentage: string;
	setPageScrollPercentage: (pageScrollPercentage: string) => void;
}

const useAppState = create<AppState>()(
	devtools(
		persist(
			(set, get) => ({
				data,
				//
				intersectedSection: "about",
				setIntersectedSection: (intersectedSection) =>
					set({ ...get(), intersectedSection }),
				//
				pageScrollPercentage: "0%",
				setPageScrollPercentage: (pageScrollPercentage) =>
					set({ ...get(), pageScrollPercentage }),
			}),
			{ name: "zustand-store" }
		)
	)
);

export default useAppState;
