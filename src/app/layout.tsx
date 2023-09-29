import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StickyNavbar } from "../components/StickyNavbar";
import { SimpleFooter } from "@/components/SimpleFooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Big Blue Bargains Thrift Store",
	description: "A non-profit benefiting charitable causes in Swampscott",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<StickyNavbar />
				{children}
				<SimpleFooter />
			</body>
		</html>
	);
}
