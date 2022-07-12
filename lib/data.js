export const imageStyleOptions = {
	imageStyle1: { height: "h-[450px]", width: "w-[285px]", all: "w-[285px] h-[450px] rounded-[145px]" },
	imageStyle2: { height: "h-[320px]", width: "w-[320px]", all: "w-[320px] h-[320px] rounded-[50%]" },
	imageStyle3: { height: "h-[450px]", width: "w-[285px]", all: "w-[285px] h-[450px] rounded" },
	imageStyle4: { height: "h-[450px]", width: "w-[285px]", all: "w-[285px] h-[450px] rounded-tl rounded-t-[145px] rounded-b-none" }
};

export const imageData = [
	{
		images: [
			{
				imageClass: "imageStyle1",
				dataRepetition: true,
				dataRepetitionElems: 3,
				dataRepetitionStagger: "-0.12",
				dataRepetitionInitialScale: "1.5",
				bgImageNumber: "1",
				bgImageUrlClassForTailwind: "bg-[url('/assets/1.jpg')]"
			},
			{
				imageClass: "imageStyle1",
				dataRepetition: true,
				dataRepetitionElems: 4,
				bgImageNumber: "3",
				bgImageUrlClassForTailwind: "bg-[url('/assets/3.jpg')]"
			},
			{
				imageClass: "imageStyle1",
				dataRepetition: true,
				dataRepetitionElems: 5,
				dataRepetitionStagger: "-0.15",
				dataRepetitionInitialScale: "1.05",
				dataRepetitionDuration: "0.5",
				dataRepetitionEase: "power1.inOut",
				bgImageNumber: "2",
				bgImageUrlClassForTailwind: "bg-[url('/assets/2.jpg')]"
			}
		],
		name1: "Mathilde",
		name2: "Badeaux"
	},
	{
		images: [
			{
				imageClass: "imageStyle2",
				dataRepetition: true,
				dataRepetitionElems: 3,
				dataRepetitionOrigin: "50% 100%",
				dataRepetitionStagger: "-0.12",
				dataRepetitionInitialScale: "1.5",
				bgImageNumber: "4",
				bgImageUrlClassForTailwind: "bg-[url('/assets/4.jpg')]"
			},
			{
				imageClass: "imageStyle2",
				dataRepetition: true,
				dataRepetitionElems: 4,
				dataRepetitionOrigin: "50% 100%",
				bgImageNumber: "5",
				bgImageUrlClassForTailwind: "bg-[url('/assets/5.jpg')]"
			},
			{
				imageClass: "imageStyle2",
				dataRepetition: true,
				dataRepetitionElems: 5,
				dataRepetitionOrigin: "50% 100%",
				bgImageNumber: "6",
				bgImageUrlClassForTailwind: "bg-[url('/assets/6.jpg')]"
			}
		],
		name1: "Louise",
		name2: "Le Sueur"
	},
	{
		images: [
			{
				imageClass: "imageStyle3",
				dataRepetition: true,
				dataRepetitionElems: 5,
				dataRepetitionOrigin: "0% 50%",
				dataRepetitionAnimate: "scaleX",
				bgImageNumber: "7",
				bgImageUrlClassForTailwind: "bg-[url('/assets/7.jpg')]"
			},
			{
				imageClass: "imageStyle3",
				dataRepetition: true,
				dataRepetitionElems: 2,
				dataRepetitionOrigin: "100% 50%",
				dataRepetitionAnimate: "scaleX",
				bgImageNumber: "8",
				bgImageUrlClassForTailwind: "bg-[url('/assets/8.jpg')]"
			},
			{
				imageClass: "imageStyle3",
				dataRepetition: true,
				dataRepetitionElems: 4,
				dataRepetitionOrigin: "50% 50%",
				dataRepetitionAnimate: "scaleX",
				bgImageNumber: "9",
				bgImageUrlClassForTailwind: "bg-[url('/assets/9.jpg')]"
			}
		],
		name1: "Camille",
		name2: "Vigneau"
	},
	{
		images: [
			{
				imageClass: "imageStyle3",
				dataRepetition: true,
				dataRepetitionElems: 4,
				dataRepetitionOrigin: "50% 0%",
				dataRepetitionAnimate: "scaleY",
				dataRepetitionStagger: "-0.12",
				dataRepetitionInitialScale: "1.8",
				bgImageNumber: "10",
				bgImageUrlClassForTailwind: "bg-[url('/assets/10.jpg')]"
			},
			{
				imageClass: "imageStyle3",
				dataRepetition: true,
				dataRepetitionElems: 6,
				dataRepetitionOrigin: "150% 100%",
				dataRepetitionAnimate: "scaleY",
				dataRepetitionStagger: "-0.12",
				dataRepetitionInitialScale: "1.3",
				dataRepetitionDuration: "0.5",
				dataRepetitionEase: "power1.inOut",
				bgImageNumber: "11",
				bgImageUrlClassForTailwind: "bg-[url('/assets/11.jpg')]"
			},
			{
				imageClass: "imageStyle3",
				dataRepetition: true,
				dataRepetitionElems: 4,
				dataRepetitionOrigin: "50% 50%",
				dataRepetitionAnimate: "scaleY",
				dataRepetitionStagger: "-0.13",
				dataRepetitionInitialScale: "1.5",
				dataRepetitionDuration: "0.5",
				dataRepetitionEase: "sine.inOut",
				bgImageNumber: "12",
				bgImageUrlClassForTailwind: "bg-[url('/assets/12.jpg')]"
			}
		],
		name1: "Marie",
		name2: "Boutiette"
	},
	{
		images: [
			{
				imageClass: "imageStyle4",
				dataRepetition: true,
				dataRepetitionElems: 6,
				dataRepetitionOrigin: "50% 100%",
				dataRepetitionAnimate: "scaleY",
				bgImageNumber: "13",
				bgImageUrlClassForTailwind: "bg-[url('/assets/13.jpg')]"
			},
			{
				imageClass: "imageStyle4",
				dataRepetition: true,
				dataRepetitionElems: 6,
				dataRepetitionOrigin: "50% 100%",
				dataRepetitionInitialScale: "1.2",
				bgImageNumber: "14",
				bgImageUrlClassForTailwind: "bg-[url('/assets/14.jpg')]"
			},
			{
				imageClass: "imageStyle4",
				dataRepetition: true,
				dataRepetitionElems: 6,
				dataRepetitionOrigin: "50% 100%",
				dataRepetitionInitialScale: "2.5",
				bgImageNumber: "15",
				bgImageUrlClassForTailwind: "bg-[url('/assets/15.jpg')]"
			}
		],
		name1: "Aurélie",
		name2: "Campeau"
	}
];
