import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AppState {}

const useAppState = create<AppState>()(
	devtools(persist((set, get) => ({}), { name: "appState" }))
);

export default useAppState;
