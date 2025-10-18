import type { Experience } from "./experiences";

export const education = {
	ufma: {
		start: "01/2025",
		end: "01/2028",
		title: "Universidade Federal do Maranhão (UFMA)",
		subtitle: "Ciência e Tecnologia",
		description: ["Graduação em Ciência e Tecnologia."],
	},
	rocketseat: {
		start: "01/2021",
		end: "Presente",
		title: "Rocketseat",
		subtitle: "",
		description: ["Evolução constante através da Rocketseat desde 2021.	"],
	},
} as const satisfies Record<string, Experience>;
