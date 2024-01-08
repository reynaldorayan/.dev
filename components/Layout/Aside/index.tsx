"use client";

import useAppState from "@/store";
import classNames from "classnames";
import React from "react";
import Anchor from "./Anchor";

type Props = {};

function Aside({}: Props) {
	const { data } = useAppState((store) => store);

	const wrapper = classNames("md:h-screen");

	const content = classNames(
		"relative md:fixed md:border-r md:border-r-gray-100 md:h-screen md:w-6/12"
	);

	return (
		<aside className={wrapper}>
			<div className={content}>
				<div className="">
					<div>
						<h1 className="">{data.developer}</h1>
						<h3 className="">{data.role}</h3>
					</div>
					<p className="">{data.greeting}</p>
				</div>
				<div className="mt-16 mx-32 flex flex-col gap-4">
					<Anchor to="about" label="About" />
					<Anchor to="experience" label="Experience" />
					<Anchor to="projects" label="Projects" />
				</div>
			</div>
		</aside>
	);
}

export default Aside;
