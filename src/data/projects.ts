interface Projects {
	[key: string]: {
		imageUrl: string;
		title: string;
		description: string;
		links: Array<string>;
		iframeUrl?: string;
	};
}

export const projects: Projects = {
	"in.orbit": {
		imageUrl: "/static/assets/in-orbit.png",
		title: "in.orbit",
		description:
			"Adicione atividades que te fazem bem e que você quer continuar praticando toda semana.",
		links: [
			"https://inorbitmetas.vercel.app",
		],
		iframeUrl: "https://inorbitmetas.vercel.app",
	},
	letmeask: {
		imageUrl: "/static/assets/letmeask.png",
		title: "Letmeask",
		description:
			"Letmeask é perfeito para criadores de conteúdos poderem criar salas de Q&A com o seu público, de uma forma muito organizada e democrática.",
		links: ["https://letmeask-eight.vercel.app"],
		iframeUrl: "https://letmeask-eight.vercel.app",
	},
	githubClone: {
		imageUrl: "/static/assets/github-clone.png",
		title: "Github Clone",
		description: "Clone do Github escrito em TypeScript e React",
		links: ["https://github-clone-br.vercel.app"],
		iframeUrl: "https://github-clone-br.vercel.app",
	},
	techmmunityLandingPage: {
		imageUrl: "/static/assets/techmmunity-landing-page.png",
		title: "Techmmunity | Landing Page",
		description: "A Landing Page.",
		links: ["https://techmmunity.github.io"],
		iframeUrl: "https://techmmunity.github.io",
	},
};
