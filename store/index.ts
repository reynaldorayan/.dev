import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import data, { DataProps } from "./data";

export type IntersectedSectionProp = "about" | "experience" | "projects";

interface AppState {
	data: DataProps;
	intersectedSection: IntersectedSectionProp;
	setIntersectedSection: (intersectedSection: IntersectedSectionProp) => void;
}

const useAppState = create<AppState>()(
	devtools(
		persist(
			(set, get) => ({
				data,
				intersectedSection: "about",
				setIntersectedSection: (intersectedSection) =>
					set({ ...get(), intersectedSection }),
			}),
			{ name: "appState" }
		)
	)
);

export default useAppState;
