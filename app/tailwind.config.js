module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				"30%": "30%",
				"55%": "55%",
				"68%": "68%",
				"45%": "45%",
				"90%": "90%",
			},
			height: {
				"43rem": "43rem",
				"96rem": "96rem",
				"90%": "90%",
			},
			backgroundImage: {
				"main-image-1": "url('/src/Assets/image/1.png')",
				"main-image-2": "url('/src/Assets/image/2.png')",
				"subsidiary-image-1": "url('/src/Assets/image/11.jfif')",
				"subsidiary-image-2": "url('/src/Assets/image/22.jfif')",
				"subsidiary-image-3": "url('/src/Assets/image/33.jfif')",
				"subsidiary-image-4": "url('/src/Assets/image/44.jfif')",
			},
			backgroundSize: {
				"50%": "50%",
			},
		},
	},
	variants: {
		extend: {
			divideColor: ["group-hover"],
			transitionProperty: ["hover", "focus"],
		},
	},
	plugins: [],
};
