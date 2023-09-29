import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
	return (
		<main className="">
			<h1 className="text-center text-xl font-semibold py-5">
				Raising $$$ for community charitable causes while working with the
				community to recycle & reuse!
			</h1>
			<div className="flex flex-col sm:flex-row p-5 leading-relaxed">
				<p className="text-center pb-5 w-full sm:w-1/3">
					Big Blue Bargains is a volunteer run thrift store giving back to the
					community by supporting charitable causes. The store is supported by
					donations such as clothing and shoes for men, women and children,
					jewelry, pocketbooks, wallets, giftware, housewares, sports equipment,
					and small furniture. The store also benefits the Swampscott Community
					by providing residents a way to recycle and reuse items locally that
					may have otherwise been thrown out or sent to another charity.
				</p>
				<div className="w-full flex-shrink-0 sm:w-1/3 px-5">
					<ImageCarousel />
				</div>
				<p className="text-center pb-5 w-full sm:w-1/3">
					We were forced to close during covid and will now be re-opening in
					October 2023 at 491 Humphrey street in Swampscott. Will update on our
					Facebook and Instagram pages when the exact opening date will be.
				</p>
			</div>
		</main>
	);
}
