"use client";

import React from "react";
import { Carousel } from "@material-tailwind/react";

export default function ImageCarousel() {
	return (
		<div>
			<Carousel className="rounded-xl">
				<img src="/images/1.webp" alt="image1" />
				<img src="/images/2.webp" alt="image2" />
				<img src="/images/3.webp" alt="image3" />
				<img src="/images/4.webp" alt="image4" />
				<img src="/images/5.webp" alt="image5" />
				<img src="/images/6.webp" alt="image6" />
				<img src="/images/7.webp" alt="image7" />
			</Carousel>
		</div>
	);
}
