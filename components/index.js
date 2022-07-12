/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/prop-types */
import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import { nanoid } from "../lib/utils.js";
import { imageStyleOptions, imageData } from "../lib/data.js";

export const ImageItem = ({
	data: {
		imageClass,
		bgImageNumber,
		bgImageUrlClassForTailwind,
		dataRepetitionElems,
		dataRepetitionOrigin,
		dataRepetitionAnimate,
		dataRepetitionInitialScale,
		dataRepetitionDuration,
		dataRepetitionEase,
		dataRepetitionStagger
	}
}) => {
	const imageWrapper = useRef();
	const queryEl = gsap.utils.selector(imageWrapper);
	const firstInnerImage = useRef();
	const timeline = useRef();

	const origin1 = dataRepetitionOrigin ? dataRepetitionOrigin.split(" ")[0] : "50%";
	const origin2 = dataRepetitionOrigin ? dataRepetitionOrigin.split(" ")[1] : "50%";
	const transformOrigin = `origin-[${origin1}_${origin2}]`;

	const property = dataRepetitionAnimate || "scale";
	const firstInnerElementProperties = {
		[property]: dataRepetitionInitialScale || 2
	};
	const animationProperties = {
		duration: dataRepetitionDuration || 0.8,
		ease: dataRepetitionEase || "power2.inOut",
		stagger: dataRepetitionStagger || -0.1,
		[property]: (i) => +!i
	};

	useEffect(() => {
		timeline.current = gsap.timeline({ paused: true }).set(firstInnerImage.current, firstInnerElementProperties).to(queryEl(".og-image__element"), animationProperties, 0);
	});

	const onEnter = () => {
		console.log(`PLAYING`);
		timeline.current && timeline.current.play();
	};

	const onLeave = () => {
		console.log(`REVERSING`);
		timeline.current && timeline.current.reverse();
	};
	const bgImageUrl = `url("/assets/${bgImageNumber}.jpg")`;
	const restOfImageRepetitions = [...Array(dataRepetitionElems - 1).keys()];
	const image__shared_classes = `relative w-full h-full origin-[inherit] will-change-transform rounded-[inherit] image-grid`;
	const image__wrap_classes = image__shared_classes;
	const image__element_classes = `${image__shared_classes} w-full bg-cover bg-fifty-fifty`;
	const imageWrapperClasses = `og-image og-image--style-${bgImageNumber} border-2 border-solid border-pink-300 ${transformOrigin} relative my-0 mx-[1vw] grid max-w-[30vw] translate-x-0 translate-y-0 cursor-pointer overflow-hidden ${imageStyleOptions[imageClass].all}`;
	// note: tailwind does not like dynamic bg url with variable: bg-[url("/assets/${bgImageNumber}.jpg")]
	// note: tailwind likes to see the class in the file I guess. without this, in dev, the bgImageurlClassForTailwind doesn't work. But I have a theory that in prod it will.
	// const bgs = {
	// 	"image-1": "bg-[url('/assets/1.jpg')]",
	// 	"image-3": "bg-[url('/assets/3.jpg')]",
	// 	"image-2": "bg-[url('/assets/2.jpg')]",
	// 	"image-4": "bg-[url('/assets/4.jpg')]",
	// 	"image-5": "bg-[url('/assets/5.jpg')]",
	// 	"image-6": "bg-[url('/assets/6.jpg')]",
	// 	"image-7": "bg-[url('/assets/7.jpg')]",
	// 	"image-8": "bg-[url('/assets/8.jpg')]",
	// 	"image-9": "bg-[url('/assets/9.jpg')]",
	// 	"image-10": "bg-[url('/assets/10.jpg')]",
	// 	"image-11": "bg-[url('/assets/11.jpg')]",
	// 	"image-12": "bg-[url('/assets/12.jpg')]",
	// 	"image-13": "bg-[url('/assets/13.jpg')]",
	// 	"image-14": "bg-[url('/assets/14.jpg')]",
	// 	"image-15": "bg-[url('/assets/15.jpg')]"
	// };

	return (
		<div ref={imageWrapper} onMouseEnter={onEnter} onMouseLeave={onLeave} className={imageWrapperClasses}>
			{/* todo: this height needs to be passed down but not sure why  */}
			{/* note: first repetition */}
			<div className={`og-image__wrap ${image__wrap_classes} overflow-hidden ${imageStyleOptions[imageClass].height}`}>
				<div ref={firstInnerImage} className={`og-image__element ${bgImageUrlClassForTailwind} ${image__element_classes} ${transformOrigin} translate-x-0 translate-y-0`}></div>
			</div>
			{/* note: rest of repetitions  */}
			{restOfImageRepetitions.map((index) => {
				const key = nanoid();
				return <div key={key} className={`og-image__element ${bgImageUrlClassForTailwind} ${image__element_classes} ${imageStyleOptions[imageClass].height}`}></div>;
			})}
		</div>
	);
};

export const ImageSection = ({ index }) => {
	const { images, name1, name2 } = imageData[index];
	console.log({ images });
	return (
		<section className="og-content mx-auto mt-[10vh] mb-[40vh] flex max-w-[1200px] flex-wrap justify-between justify-items-center text-center">
			{images.map((data) => {
				const key = nanoid();
				return <ImageItem data={data} key={key} />;
			})}
			<h2 className="og-content__title col-span-3 col-start-1 mx-0 mb-0 mt-[10vh] w-full text-[11vw] leading-[.65]">
				<span className="og-content__title-first block font-forma font-medium uppercase">{name1}</span>
				<span className="og-content__title-second font-tenez font-light uppercase not-italic">{name2}</span>
			</h2>
		</section>
	);
};
