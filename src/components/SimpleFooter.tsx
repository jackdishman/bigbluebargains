"use client";

import { Typography } from "@material-tailwind/react";

export function SimpleFooter() {
	return (
		<footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 p-6 text-center md:justify-between">
			<Typography color="blue-gray" className="font-normal">
				&copy; 2023 Big Blue Bargains
			</Typography>
			<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
				<Typography
					href="#"
					color="blue-gray"
					className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
					<a href="https://maps.app.goo.gl/89KdTNZqWmNyDocs7" target="_blank">
						Directions
					</a>
				</Typography>
				<Typography
					href="#"
					color="blue-gray"
					className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
					<a
						href="mailto:BIGBLUEBARGAINS@GMAIL.COM"
						target="_blank"
						referrerPolicy="no-referrer">
						Email
					</a>
				</Typography>
				<Typography
					href="#"
					color="blue-gray"
					className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
					<a
						href="https://www.facebook.com/BigBlueBargains"
						target="_blank"
						referrerPolicy="no-referrer">
						Facebook
					</a>
				</Typography>
			</ul>
		</footer>
	);
}
