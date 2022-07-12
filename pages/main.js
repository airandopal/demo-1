/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/prop-types */
import React from "react";
import { nanoid } from "../lib/utils.js";
import { imageData } from "../lib/data.js";
import { ImageSection } from "../components/index.js";

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
const Main = () => {
	return (
		<main>
			{imageData.map((item, index) => {
				const key = nanoid();
				return <ImageSection index={index} key={key} />;
			})}
		</main>
	);
};

export default Main;
