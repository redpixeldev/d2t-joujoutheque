/** @type {import('tailwindcss').Config} */
module.exports = {
	future: {
		hoverOnlywhenSupported: true,
	},
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			body: ['chillax-variable', 'sans-serif'],
		},

		container: {
			center: true,
			padding: '1rem',
		},

		extend: {
			colors: {
				brand: {
					gray: {
						'50': '#f0f2f5',
						'75': '#b3bbc6',
						'100': '#898d96',
						'200': '#383434',
						'500': '#181818',
					},
					red: {
						'50': '#fea599',
						'75': '#fe452c',
						'100': '#d11800',
						'200': '#a61500',
					},
					orange: {
						'50': '#ffd1a0',
						'75': '#f59e4c',
						'100': '#ff7900',
						'200': '#e16102',
					},
					yellow: {
						'50': '#fef499',
						'75': '#ffe400',
						'100': '#e9d400',
						'200': '#c49d0b',
						'warm': '#ffb800',
					},
					green: {
						'50': '#d8ffc0',
						'75': '#96f757',
						'100': '#6cdd20',
						'200': '#80d14e',
						'300': '#5aac05',
						'400': '#159d0d'
					},
					blue: {
						'25': '#eff5fc',
						'50': '#e4f1ff',
						'75': '#a9d3ff',
						'100': '#479af6',
						'200': '#2c76c8',
						'300': '#064d9a'
					}
				}
			},
			spacing: {
				13: '3.25rem',
				15: '3.75rem',
				17: '4.25rem',
				18: '4.5rem',
				19: '4.75rem',
				76: '19rem',
				84: '21rem',
				88: '22rem',
				92: '23rem',
				100: '25rem',
				104: '26rem',
				108: '27rem',
				112: '28rem',
				116: '29rem',
				120: '30rem',
				124: '31rem',
				128: '32rem',
				132: '33rem',
				136: '34rem',
				140: '35rem',
				144: '36rem',
				148: '37rem',
				152: '38rem',
				156: '39rem',
				160: '40rem',
				164: '41rem',
				168: '42rem',
				172: '43rem',
				176: '44rem',
				180: '45rem',
				184: '46rem',
				188: '47rem',
				190: '48rem',
				194: '49rem',
				200: '50rem',
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
