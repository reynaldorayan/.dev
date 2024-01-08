import { IntersectedSectionProp } from "@/store";
import React, { PropsWithChildren, ReactNode, forwardRef } from "react";

type Props = {
	component: ReactNode;
	name: IntersectedSectionProp;
};

const Section = forwardRef<HTMLElement, PropsWithChildren<Props>>(
	({ component, name }, ref) => {
		return (
			<section ref={ref} data-slide={name} className="min-h-screen md:p-12">
				{component}
			</section>
		);
	}
);

export default Section;
