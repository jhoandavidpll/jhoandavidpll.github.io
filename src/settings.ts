export const profile = {
	fullName: 'Jhoan David Pillapa Llerena',
	title: 'Ing.',
	institute: 'ESPOCH',
	author_name: 'Jhoan David Pillapa Llerena', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '@',
	linkedin: 'https://www.linkedin.com/in/jhoandavidpll/',
	x: '',
	github: 'https://github.com/jhoandavidpll/',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://jhoandavidpll.github.io/', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: 	true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Jhoan David Pillapa Llerena | Data Analyst',
	default_description: 'Jhoan David Pillapa Llerena | Data Analyst',
	default_image: '/images/astro-academia.png',
}
