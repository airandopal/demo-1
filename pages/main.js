/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { nanoid } from "../lib/utils.js";
import { imageData } from "../lib/data.js";
import { ImageSection } from "../components/index.js";
import { useGlobalState } from "../lib/global-state.js";

// done: check mobile view
// done: clean css
// done: separate out data
// todo: add loading - // todo: 	<body class="loading cda-hidemobile">
// todo: background iamge solution
// todo: test pixel for pixel. on screenshots at different point
// todo: add jsonconig for imports
// todo: is there a way to snapshot test animations?
// todo: feature - add being able to add ones dynamically
// todo: add sections with shapes, elements with shapes
// zod?
// maybe add some framer motion and reveals.
// later: why isn't the height being passed down to be able to use 100%
// later: should i be using layout effect?
// later: clean eslint
// later: why doesnt background image work for tailwind - try it one more time.
// later: jsdoc and typescript

// todo: 	<body class="loading cda-hidemobile">

const mainClasses = ["fixed", "z-[1000]", "content-['']"];
const classes = [...mainClasses];
const prefixes = ["before", "after"];
const sharedBeforeAndAfter = classes.flatMap((twClass) => prefixes.map((prefix) => `${prefix}:${twClass}`)).join(" ");
console.log({ sharedBeforeAndAfter });

const before = `before:top-0 before:left-0 before:w-full before:h-full before:bg-bg`;
const after = `after:top-[50%] after:left-[50%] after:w-[60px] after:h-[60px] after:mt-[-30px] after:mr-0 after:mb-0 after:ml-[-30px] after:rounded-[50%] after:opacity-40 after:bg-link after:animate-custom-loading`;
const loadingClasses = `${sharedBeforeAndAfter} ${before} ${after}`;
console.log({ loadingClasses });

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
		<main className={loadingState ? loadingClasses : "animate-fade-in-up"}>
			{imageData.map((item, index) => {
				const key = nanoid();
				return <ImageSection index={index} key={key} />;
			})}
		</main>
	);
};

export default Main;
