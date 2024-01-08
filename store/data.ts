export type DataProps = {
	developer: string;
	role: string;
	email: string;
	greeting: string;
	socials: {
		linkedin: string;
		github: string;
		facebook: string;
	};
	about: {};
	experience: {};
	projects: {};
};

const data: DataProps = {
	developer: "Rayan Reynaldo",
	role: "Junior Developer",
	email: "me@reynaldorayan.dev",
	greeting:
		"Hi! I'm a passionate developer from the Philippines who enjoys turning ideas into software solutions.",
	socials: {
		linkedin: "https://ph.linkedin.com/in/imdevry",
		github: "https://github.com/reynaldorayan",
		facebook: "https://www.facebook.com/reynaldorayan.dev",
	},
	about: {},
	experience: {},
	projects: {},
};

export default data;
