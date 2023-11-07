"use client";

import React from "react";
import ImageCarousel from "@/components/ImageCarousel";
import { Card, Typography } from "@material-tailwind/react";

export default function HomePage() {
	const TABLE_HEAD = ["Day", "Hours"];
	const TABLE_ROWS = [
		{ day: "Tuesday", hours: "9am to noon" },
		{ day: "Thursday", hours: "3pm to 6pm" },
		{ day: "Saturday", hours: "9am to 1pm" },
	];
	return (
		<div>
			<Typography variant="h1" className="text-center p-5">
				Raising $$$ for community charitable causes in Swampscott while working
				with the community to recycle & reuse!
			</Typography>
			<div className="flex flex-col sm:flex-row p-5 leading-relaxed">
				<div className=" w-full sm:w-1/3">
					<Typography variant="paragraph" className="text-center pb-5">
						Big Blue Bargains is a volunteer run thrift store giving back to the
						community by supporting charitable causes. The store is supported by
						donations such as clothing and shoes for men, women and children,
						jewelry, pocketbooks, wallets, giftware, housewares, sports
						equipment, and small furniture. The store also benefits the
						Swampscott Community by providing residents a way to recycle and
						reuse items locally that may have otherwise been thrown out or sent
						to another charity.
					</Typography>
					<Typography variant="h6" className="underline">
						Address:{" "}
						<a href="https://maps.app.goo.gl/89KdTNZqWmNyDocs7" target="_blank">
							491 Humphrey St. Swampscott, MA 01907
						</a>
					</Typography>
					<div className="py-5">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.125094649235!2d-70.90910008759008!3d42.467628071062926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e36b580dba838d%3A0x32626e6d3ea494e7!2s491%20Humphrey%20St%2C%20Swampscott%2C%20MA%2001907!5e0!3m2!1sen!2sus!4v1696083043037!5m2!1sen!2sus"
							width="100%"
							height="250px"
							loading="lazy"></iframe>
					</div>
				</div>
				<div className="w-full flex-shrink-0 sm:w-1/3 px-5">
					<ImageCarousel />
				</div>
				<div className="w-full flex-shrink-0 sm:w-1/3 px-5">
					<Typography variant="h3" className="pb-5 text-center">
						Store Hours
					</Typography>
					<Card>
						<table className="w-full table-auto text-left">
							<thead>
								<tr>
									{TABLE_HEAD.map((head) => (
										<th
											key={head}
											className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal leading-none opacity-70">
												{head}
											</Typography>
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{TABLE_ROWS.map(({ day, hours }, index) => {
									const isLast = index === TABLE_ROWS.length - 1;
									const classes = isLast
										? "p-4"
										: "p-4 border-b border-blue-gray-50";

									return (
										<tr key={day}>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal">
													{day}
												</Typography>
											</td>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal">
													{hours}
												</Typography>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</Card>
				</div>
			</div>
		</div>
	);
}
