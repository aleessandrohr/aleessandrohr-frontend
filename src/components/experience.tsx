import { Icon } from "@/components/icon";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Experience as ExperienceType } from "@/constants/experiences";
import { Separator } from "./ui/separator";

type Props = ExperienceType;

export const Experience = ({
	start,
	end,
	title,
	subtitle,
	description,
	skills,
}: Props) => (
	<Card className="flex w-full flex-col gap-2 md:flex-row">
		<aside className="flex p-6 pb-0 font-light text-sm">
			<div className="flex items-center justify-start self-start font-medium">
				<span>{start}</span>
				<Icon name="minus" />
				<span>{end}</span>
			</div>
		</aside>
		<section>
			<CardHeader>
				<CardTitle className="flex flex-col gap-1">
					<span className="text-xl">{title}</span>
					<span className="text-base">{subtitle}</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="custom_description flex flex-col gap-2">
					{Array.isArray(description)
						? description.map(item => <p key={item}>{item}</p>)
						: description}
				</div>
			</CardContent>
			{skills && (
				<CardFooter>
					<div className="custom_description flex flex-wrap gap-2">
						<strong className="text-sm">Habilidades:</strong>
						<span>{skills.join(" · ")}</span>
					</div>
				</CardFooter>
			)}
		</section>
	</Card>
);
