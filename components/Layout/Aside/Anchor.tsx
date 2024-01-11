import useAppState, { IntersectedSectionProp } from "@/store";
import classNames from "classnames";
import { PropsWithChildren, forwardRef } from "react";

type Props = {
	label?: string;
	to: IntersectedSectionProp;
};

export const handleNavigate = (to: IntersectedSectionProp) => {
	const section = document.querySelector(`[data-slide="${to}"]`);

	if (section) {
		section.scrollIntoView({ behavior: "smooth" });
	}
};

const Anchor = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
	({ label, to, children }, ref) => {
		const { intersectedSection } = useAppState((store) => store);

		const wrapper = classNames(
			// Base styles
			"relative flex gap-2 items-center tracking-wide",
			// Before base styles
			"before:relative before:border-y before:rounded-r-full before:border-indigo-200 before:duration-1000 before:transition-all before:ease-in-out",
			// Logical styles
			{
				["before:w-[60px] cursor-pointer"]:
					!to.includes(intersectedSection),
				["before:w-[120px] cursor-not-allowed"]:
					to.includes(intersectedSection),
			}
		);

		return (
			<div onClick={() => handleNavigate(to)} className={wrapper} ref={ref}>
				{label ?? children ?? to}
			</div>
		);
	}
);

export default Anchor;
