/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { nanoid } from "@/utils";
import { imageData } from "@/data";
import { ImageSection } from "@/components";
import { useGlobalState } from "@/global-state";

// done: check mobile view
// done: clean css
// done: separate out data
// done: add loading
// done: not right on deploy
// done: add jsonconig for imports
// todo: test pixel for pixel. on screenshots at different point
// todo: is there a way to snapshot test animations?
// todo: feature - add being able to add ones dynamically - unsplash, easy way vs tina cms?
// todo: add sections with shapes, elements with shapes
// todo: ooh interesting, mix up the photos between the layers
// todo: can i put the bg urls in config?
// zod?
// maybe add some framer motion and reveals.
// later: background iamge solution
// later: why isn't the height being passed down to be able to use 100%
// later: should i be using layout effect?
// later: clean eslint
// later: why doesnt background image work for tailwind - try it one more time.
// later: jsdoc and typescript
// later; working with aspect ratios

// todo: 	<body class="loading cda-hidemobile">

const Main = () => {
	const loadingState = useGlobalState((state) => state.loadingState);
	const toggleLoadingState = useGlobalState((state) => state.toggleLoadingState);
	const runOnce = true;

	useEffect(() => {
		console.log(`running use effect`);
		const showLoadingTimer = setTimeout(() => {
			toggleLoadingState();
		}, 2800);

		return () => clearTimeout(showLoadingTimer);
	}, []); // runOnce, toggleLoadingState

	return (
		<main data-cy={loadingState ? 'loading' : 'loaded'} className={loadingState ? "" : "animate-fade-in-up"}>
			{loadingState && (
				<aside data-cy="loading-screen" className="fixed top-0 z-[1000] flex h-screen w-screen items-center justify-center bg-bg">
					<div className="h-[60px] w-[60px] animate-custom-loading rounded-[50%] bg-link opacity-40"></div>
				</aside>
			)}
			{imageData.map((item, index) => {
				const key = nanoid();
				return <ImageSection index={index} key={key} />;
			})}
		</main>
	);
};

export default Main;
