"use client";

import { SocialIcon } from "react-social-icons";
import useAppState from "@/store";
import classNames from "classnames";
import React from "react";
import Anchor from "./Anchor";

type Props = {};

function Aside({}: Props) {
	const { data } = useAppState((store) => store);

	const wrapper = classNames("md:h-screen");

	const content = classNames(
		"relative lg:fixed h-[25vh] p-5 lg:p-0 lg:h-screen lg:w-5/12 grid lg:place-items-center"
	);

	return (
		<aside className={wrapper}>
			<div className={content}>
				<div className="max-w-md lg:max-w-lg grid gap-2 lg:gap-3 lg:p-7">
					<div>
						<h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-800">
							{data.developer}
						</h1>
						<h3 className="text-lg md:text-xl font-semibold text-indigo-700 leading-snug">
							{data.role}
						</h3>
					</div>
					<p className="text-base md:text-lg">{data.greeting}</p>
				</div>

				<div className="hidden max-w-md md:max-w-lg lg:flex justify-start flex-col gap-4 w-full lg:p-7">
					<Anchor to="about" label="About" />
					<Anchor to="experience" label="Experience" />
					<Anchor to="projects" label="Projects" />
				</div>

				<div className="max-w-md lg:max-w-lg flex gap-2 w-full mt-2 md:m-0 lg:p-7">
					<SocialIcon
						url={data.socials.github}
						target="_blank"
						className="hover:scale-110 transition-transform ease-linear"
						network="github"
						style={{ width: "35px", height: "35px" }}
					/>
					<SocialIcon
						url={data.socials.facebook}
						target="_blank"
						className="hover:scale-110 transition-transform ease-linear"
						network="facebook"
						style={{ width: "35px", height: "35px" }}
					/>
					<SocialIcon
						url={data.socials.linkedin}
						target="_blank"
						className="hover:scale-110 transition-transform ease-linear"
						network="linkedin"
						style={{ width: "35px", height: "35px" }}
					/>
				</div>
			</div>
		</aside>
	);
}

export default Aside;
