import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { socialMedia } from "@/data/social-media";

const menuItems = [
	{
		href: "#about",
		value: "Sobre",
	},
	{
		href: "#experiences",
		value: "Experiências",
	},
	{
		href: "#projects",
		value: "Projetos",
	},
];

const socialMediaArray = Object.values(socialMedia);

export const Profile = () => (
	<Card className="flex h-full max-h-full w-full max-w-md flex-col justify-between gap-2 overflow-y-auto md:rounded-none">
		<div>
			<CardHeader>
				<CardTitle className="flex flex-col gap-2">
					<picture className="my-4 flex h-full w-full items-center justify-center">
						<Image
							src="/static/assets/profile.jpg"
							alt="Profile"
							width={480}
							height={480}
							className="h-40 w-40 rounded-full object-cover"
						/>
					</picture>
					<h1 className="text-2xl font-bold text-center">Alessandro Henrique Ramos</h1>
					<h2 className="text-xl">Desenvolvedor Front-end</h2>
				</CardTitle>
				<CardDescription>
					<p>
						Olá! Meu nome é Alessandro Henrique Ramos e eu sou um Desenvolvedor
						Front-end focado em TypeScript e React.
					</p>
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				{menuItems.map(({ href, value }) => (
					<Button asChild key={value}>
						<Link href={href}>{value}</Link>
					</Button>
				))}
			</CardContent>
		</div>
		<CardFooter className="flex flex-wrap justify-between gap-2">
			<div className="flex gap-2">
				{socialMediaArray.map(({ href, name, icon }) => (
					<Button asChild key={name} variant="outline" size="icon">
						<Link href={href} aria-label={name} title={name} target="_blank">
							<Icon name={icon} />
						</Link>
					</Button>
				))}
			</div>
			<ModeToggle />
		</CardFooter>
	</Card>
);
