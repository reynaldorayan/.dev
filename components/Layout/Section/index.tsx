import useAppState, { IntersectedSectionProp } from "@/store";
import classNames from "classnames";
import React, { PropsWithChildren, ReactNode, forwardRef } from "react";

type Props = {
	component: ReactNode;
	name: IntersectedSectionProp;
};

const Section = forwardRef<HTMLElement, PropsWithChildren<Props>>(
	({ component, name }, ref) => {
		const { intersectedSection } = useAppState((store) => store);

		const className = classNames(
			"min-h-screen md:p-12 duration-500 transition-all ease-in-out py-10 px-5"
		);

		return (
			<section ref={ref} data-slide={name} className={className}>
				{component}
			</section>
		);
	}
);

export default Section;
