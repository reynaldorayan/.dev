"use client";

import { ReactNode, useEffect, useState } from "react";

const HydrationHandler = ({ children }: { children: ReactNode }) => {
	const [isHydrated, setIsHydrated] = useState(false);

	useEffect(() => setIsHydrated(true), []);

	return isHydrated ? children : <></>;
};

export default HydrationHandler;
