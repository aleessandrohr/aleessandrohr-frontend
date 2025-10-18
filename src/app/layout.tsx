import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Alessandro | Desenvolvedor Front-end Pleno",
	description:
		"Olá! Me chamo Alessandro e este é o portfólio do meu trabalho como Desenvolvedor Front-end Pleno focado em TypeScript e React.js.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className={inter.className}>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
