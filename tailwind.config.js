/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				tenez: "tenez, sans-serif",
				forma: "forma-djr-deck, sans-serif",
				quasimoda: "quasimoda, sans-serif"
			},
			colors: {
				text: "#858898",
				bg: "#0f0f0f",
				link: "#fff",
				"link-hover": "#858898",
				lightgrey: "#d3d3d3"
			},
			backgroundPosition: {
				"fifty-fifty": "50% 50%"
			},
			backgroundImage: {
				"url-1": "url('/assets/1.jpg')",
				"url-2": "url('/assets/2.jpg')",
				"url-two": "url('/assets/two.jpg')",
				"url-3": "url('/assets/3.jpg')",
				"url-4": "url('/assets/4.jpg')",
				"url-5": "url('/assets/5.jpg')",
				"url-6": "url('/assets/6.jpg')",
				"url-7": "url('/assets/7.jpg')",
				"url-8": "url('/assets/8.jpg')",
				"url-9": "url('/assets/9.jpg')",
				"url-10": "url('/assets/10.jpg')",
				"url-11": "url('/assets/11.jpg')",
				"url-12": "url('/assets/12.jpg')",
				"url-13": "url('/assets/13.jpg')",
				"url-14": "url('/assets/14.jpg')",
				"url-15": "url('/assets/15.jpg')"
			},
			animation: {
				"custom-loading": "loaderAnim 0.7s linear infinite alternate forwards"
			},
			keyframes: {
				loaderAnim: {
					to: {
						opacity: "1",
						transform: "scale3d(0.5,0.5,1)"
					}
				}
			}
		}
	},
	plugins: []
};
