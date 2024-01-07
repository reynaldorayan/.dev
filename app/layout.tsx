import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import HydrationHandler from "@/components/HydrationHandler";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Rayan Reynaldo";
const APP_DEFAULT_TITLE = "Rayan Reynaldo";
const APP_TITLE_TEMPLATE = "%s - Rayan Reynaldo";
const APP_DESCRIPTION = "";

export const metadata: Metadata = {
	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE,
	},
	description: APP_DESCRIPTION,
	manifest: "/manifest.json",
};

export const viewport: Viewport = {
	themeColor: "#FFFFFF",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={classNames(inter.className, "debug-screens")}>
				<HydrationHandler>{children}</HydrationHandler>
			</body>
		</html>
	);
}
