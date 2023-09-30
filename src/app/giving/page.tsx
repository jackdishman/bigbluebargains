"use client";

import { Typography } from "@material-tailwind/react";
import React from "react";

export default function page() {
	return (
		<div>
			<Typography
				color="blue-gray"
				className="font-normal text-center my-10"
				variant="h3">
				Raising $$$ for charitable causes and working with the community to
				recycle & reuse!
			</Typography>
			<Typography
				color="blue-gray"
				className="font-normal text-center mb-5"
				variant="h6">
				We have given back over $100,000 to our schools PTA/PTO programs and
				other charitable causes since our opening.
			</Typography>
			<Typography
				color="blue-gray"
				className="text-center mb-5 font-semibold"
				variant="h3">
				Community Donations & Participation
			</Typography>
			<div className="flex flex-col justify-around sm:flex-row mb-5">
				<div>
					<Typography
						color="blue-gray"
						className="font-normal underline"
						variant="h4">
						Some programs BBB has funded:
					</Typography>
					<ul>
						<li>North Shore Music Theatre Program</li>
						<li>Ipads</li>
						<li>Chris Herren Presentation</li>
						<li>Field Trips (Maple Sugar Farming)</li>
						<li>Art Quest</li>
						<li>SHS Interact Club</li>
						<li>
							Sports Team Fundraiser Day (earn 50% of earnings the day
							volunteered!)
						</li>
						<li>SHS Planners</li>
					</ul>
				</div>
				<div>
					<Typography
						color="blue-gray"
						className="font-normal underline"
						variant="h4">
						We have also donated items for:
					</Typography>
					<ul>
						<li>Victims of floods and fires</li>
						<li>Animal Shelters </li>
						<li>School Nurse / foster children clothing</li>
						<li>Preschool clothes and books</li>
						<li>Musical Instruments to teachers</li>
						<li>Books for Library</li>
						<li>Farmers Market</li>
					</ul>
				</div>
			</div>
			<hr />
		</div>
	);
}
