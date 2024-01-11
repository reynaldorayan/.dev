import useAppState from "@/store";
import React from "react";

type Props = {};

function ScrollProgressBar({}: Props) {
	const { pageScrollPercentage } = useAppState((store) => store);

	return (
		<div className="h-[.4rem] w-full bg-white fixed top-0 z-[999]">
			<div
				style={{ width: pageScrollPercentage }}
				className="h-[.4rem] w-0 bg-indigo-900 transition-all duration-1000 ease-in-out"
			></div>
		</div>
	);
}

export default ScrollProgressBar;
