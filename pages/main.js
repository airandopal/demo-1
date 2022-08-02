/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { nanoid } from "@/utils";
import { imageData } from "@/data";
import { ImageSection } from "@/components";
import { useGlobalState } from "@/global-state";


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
