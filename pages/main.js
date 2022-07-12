import Head from "next/head";
import gsap from 'gsap';
import { customAlphabet } from 'nanoid'
import { useRef, useEffect } from 'react';


const nanoid = customAlphabet('1234567890abcdef', 10)

const imageStyleOptions = {
    imageStyle1: "w-[285px] h-[450px] rounded-[145px]",
    imageStyle2: "w-[320px] h-[320px] rounded-[50%]",
    imageStyle3: "w-[285px] h-[450px] rounded",
    imageStyle4: "w-[285px] h-[450px] rounded-tl rounded-t-[145px] rounded-b-none",
}
const ImageItem = ({ data: { imageClass, bgImageNumber, 
    dataRepetitionElems, 
    dataRepetitionOrigin,
    dataRepetitionAnimate,
    dataRepetitionInitialScale,
    dataRepetitionDuration,
    dataRepetitionEase,
    dataRepetitionStagger, ...props } }) => {

    const imageWrapper = useRef()
    const queryEl = gsap.utils.selector(imageWrapper);
    const firstInnerImage = useRef()
    const timeline = useRef()

    // gsap.set(this.DOM.el, {backgroundImage: 'none'});
    // todo: remove background image - but not sure when this is supposed to happen? is it on hover? 
    // bg-[url('/assets/${bgImageNumber}.jpg')] 

    // gsap.set([this.DOM.el, this.DOM.innerElems[0]], {transformOrigin: this.DOM.el.dataset.repetitionOrigin || '50% 50%'});
    const origin1 = dataRepetitionOrigin ? dataRepetitionOrigin.split(' ')[0] : '50%'
    const origin2 = dataRepetitionOrigin ? dataRepetitionOrigin.split(' ')[1] : '50%'
    const transformOrigin = `origin-[${origin1}_${origin2}]`

    const property = dataRepetitionAnimate || 'scale';
    const firstInnerElementProperties = {
        [property]: dataRepetitionInitialScale || 2
    }
    const animationProperties = {
        duration: dataRepetitionDuration || 0.8,
        ease: dataRepetitionEase || 'power2.inOut',
        stagger: dataRepetitionStagger || -0.1,
        [property]: i => +!i
    }

    useEffect(() => {            
        timeline.current = gsap.timeline({ paused: true })
                                .set(firstInnerImage.current, firstInnerElementProperties)
                                .to(queryEl(".image__element"), animationProperties, 0)
    });

    // custom-bg-${bgImageNumber} - before when i thought needed the bg image
    const onEnter = ({ currentTarget }) => {
        console.log(`PLAYING`)
        timeline.current && timeline.current.play()
      };
      
      const onLeave = ({ currentTarget }) => {
        console.log(`REVERSING`)
        timeline.current && timeline.current.reverse()
      };
const bgImageUrl = `url("/assets/${bgImageNumber}.jpg")`
    return (
        <div ref={imageWrapper} onMouseEnter={onEnter} onMouseLeave={onLeave} className={`og-image og-image--style-${bgImageNumber} ${transformOrigin} translate-x-0 translate-y-0 relative grid my-0 overflow-hidden cursor-pointer mw-[30vw] mx-[1vw] ${imageStyleOptions[imageClass]}`} {...props}>
            {/* first repetition  */}
            <div class="image__wrap">
                <div ref={firstInnerImage} class={`image__element ${transformOrigin} translate-x-0 translate-y-0`} style={{ backgroundImage: bgImageUrl }}></div>
            </div>
            {/* rest of repetitions  */}
            {[...Array(dataRepetitionElems - 1).keys()].map(index => {
                const key = nanoid()
                return <div key={key} class="image__element" style={{ backgroundImage: bgImageUrl }}></div>
            })}
        </div>
    )
}




const info = [
    {
        images: [{
            imageClass: "imageStyle1",
            dataRepetition: true,
            dataRepetitionElems: 3,
            dataRepetitionStagger: "-0.12",
            dataRepetitionInitialScale: "1.5",
            bgImageNumber: '1'
        },
        {
            imageClass: "imageStyle1",
            dataRepetition: true,
            dataRepetitionElems: 4,
            bgImageNumber: '3'

        },
        {
            imageClass: "imageStyle1",
            dataRepetition: true,
            dataRepetitionElems: 5,
            dataRepetitionStagger: "-0.15",
            dataRepetitionInitialScale: "1.05",
            dataRepetitionDuration: "0.5",
            dataRepetitionEase: "power1.inOut",
            bgImageNumber: '2'
        }],
        name1: 'Mathilde',
        name2: 'Badeaux'
    },
    {
        images: [{
            imageClass: "imageStyle2",
            dataRepetition: true,
            dataRepetitionElems: 3,
            dataRepetitionOrigin: "50% 100%",
            dataRepetitionStagger: "-0.12",
            dataRepetitionInitialScale: "1.5",
            bgImageNumber: '4'
        },
        {
            imageClass: "imageStyle2",
            dataRepetition: true,
            dataRepetitionElems: 4,
            dataRepetitionOrigin: "50% 100%",
            bgImageNumber: '5'

        },
        {
            imageClass: "imageStyle2",
            dataRepetition: true,
            dataRepetitionElems: 5,
            dataRepetitionOrigin: "50% 100%",
            bgImageNumber: '6'
        }],
        name1: 'Louise',
        name2: 'Le Sueur'
    },
    {
        images: [
            {
                imageClass: "imageStyle3",
                dataRepetition: true,
                dataRepetitionElems: 5,
                dataRepetitionOrigin: "0% 50%",
                dataRepetitionAnimate: "scaleX",
                bgImageNumber: '7'
            },
            {
                imageClass: "imageStyle3",
                dataRepetition: true,
                dataRepetitionElems: 2,
                dataRepetitionOrigin: "100% 50%",
                dataRepetitionAnimate: "scaleX",
                bgImageNumber: '8'

            },
            {
                imageClass: "imageStyle3",
                dataRepetition: true,
                dataRepetitionElems: 4,
                dataRepetitionOrigin: "50% 50%",
                dataRepetitionAnimate: "scaleX",
                bgImageNumber: '9'
            },
        ],
        name1: 'Camille',
        name2: 'Vigneau'
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
                bgImageNumber: '10'
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
                bgImageNumber: '11'

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
                bgImageNumber: '12'
            },
        ],
        name1: 'Marie',
        name2: 'Boutiette'
    },
    {
        images: [
            {
                imageClass: "imageStyle4",
                dataRepetition: true,
                dataRepetitionElems: 6,
                dataRepetitionOrigin: "50% 100%",
                dataRepetitionAnimate: "scaleY",
                bgImageNumber: '13'
            },
            {
                imageClass: "imageStyle4",
                dataRepetition: true,
                dataRepetitionElems: 6,
                dataRepetitionOrigin: "50% 100%",
                dataRepetitionInitialScale: "1.2",
                bgImageNumber: '14'

            },
            {
                imageClass: "imageStyle4",
                dataRepetition: true,
                dataRepetitionElems: 6,
                dataRepetitionOrigin: "50% 100%",
                dataRepetitionInitialScale: "2.5",
                bgImageNumber: '15'
            },
        ],
        name1: 'Aurélie',
        name2: 'Campeau'
    }
]

const ImageSection = ({ index }) => {
    const { images, name1, name2 } = info[index]
    console.log({ images })
    return (
        <section className="og-content flex flex-wrap justify-between mx-auto text-center justify-items-center mt-[10vh] mb-[40vh] mw-[1200px]">
            {images.map((data) => {
                const key = nanoid()
                return <ImageItem data={data} key={key} />
            })}
            <h2 className="w-full mx-0 mb-0 text-[11vw] mt-[10vh] leading-[.65] col-start-1 col-span-3">
                <span className="block font-medium uppercase font-forma">{name1}</span>
                <span className="not-italic font-light uppercase font-tenez">{name2}</span>
            </h2>
        </section>
    )
}
// todo: 	<body class="loading cda-hidemobile">

const Main = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/ejf4jfz.css" />
            </Head>
            <main>
                {info.map((item, index) => {
                    const key = nanoid()
                    return <ImageSection index={index} key={key} />
                })}
            </main>
        </>
    )
}

export default Main
