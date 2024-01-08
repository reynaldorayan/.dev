import useAppState, { IntersectedSectionProp } from "@/store";
import classNames from "classnames";
import Link from "next/link";
import { PropsWithChildren, forwardRef } from "react";

type Props = {
	label?: string;
	to: IntersectedSectionProp;
};

const Anchor = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
	({ label, to }, ref) => {
		const { intersectedSection } = useAppState((store) => store);

		const wrapper = classNames(
			// Base styles
			"relative flex gap-2 items-center",
			// Before base styles
			"before:relative before:border",
			// Animation
			"duration-500 ease-in-out",
			// Logical styles
			{
				["before:w-[40px]"]: !to.includes(intersectedSection),
				["before:w-[100px]"]: to.includes(intersectedSection),
			}
		);

		const handleNavigate = (to: IntersectedSectionProp) => {
			const section = document.querySelector(`[data-slide="${to}"]`);

			if (section) {
				section.scrollIntoView({ behavior: "smooth" });
			}
		};

		return (
			<div onClick={() => handleNavigate(to)} className={wrapper} ref={ref}>
				{label ?? to}
			</div>
		);
	}
);

export default Anchor;
