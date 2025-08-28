import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Alessandro | Desenvolvedor de Software",
	description: "Olá! Meu nome é Alessandro Henrique Ramos este é o portfólio do meu trabalho como desenvolvedor de software.",
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
