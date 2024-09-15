import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Loading } from "@/components/ui/loading";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
	imageUrl: string;
	title: string;
	description: string;
	links: Array<string>;
	iframeUrl?: string;
}

export const Project = ({
	imageUrl,
	title,
	description,
	links,
	iframeUrl,
}: Props) => (
	<Card className="flex w-full flex-col gap-2 md:flex-row">
		<aside className="flex w-full flex-col justify-between gap-4 p-6 pb-0 md:max-w-64 md:pb-6">
			<div className="w-full">
				<Image
					src={imageUrl}
					width={500}
					height={500}
					alt={title}
					className="w-full rounded-lg"
				/>
			</div>

			<div className="w-full">
				<Dialog>
					<DialogTrigger className="w-full" asChild>
						<Button disabled={!iframeUrl}>Experimente clicando aqui!</Button>
					</DialogTrigger>
					{iframeUrl && (
						<DialogContent className="h-[85vh] max-h-[85vh] w-[85vw] max-w-[85vw] rounded-lg">
							<div className="relative w-full p-2">
								<Skeleton className="z-index-0 flex h-full w-full items-center justify-center rounded-lg shadow-lg">
									<Loading>Carregando</Loading>
								</Skeleton>
								<iframe
									src={iframeUrl}
									title={title}
									className="absolute top-0 right-0 bottom-0 left-0 z-index-40 h-full w-full rounded-lg"
									loading="lazy"
								/>
							</div>
						</DialogContent>
					)}
				</Dialog>
			</div>
		</aside>
		<section>
			<CardHeader>
				<CardTitle className="flex flex-col gap-1">
					<span className="text-xl">{title}</span>
				</CardTitle>
				<CardDescription className="custom_description">
					{description}
				</CardDescription>
				<CardFooter className="flex flex-col items-start gap-2 p-0 pt-2 text-secondary-foreground text-sm">
					{links.map(link => (
						<Link
							key={link}
							className="flex items-center justify-center gap-2"
							href={link}
							target="_blank"
						>
							<span className="underline">{link}</span>
							<Icon name="external-link" />
						</Link>
					))}
				</CardFooter>
			</CardHeader>
		</section>
	</Card>
);
