import Image from "next/image";
import InputSearch from "./InputSearch";

const Header = () => {
	return (
		<div>
			<section className="flex justify-center items-center">
				<div className="flex flex-col bg-[#6AA434] text-white-600 p-2.5 w-80 h-36">
					<div className="flex flex-row items-center justify-between mb-4 mt-5">
						<div className="judul flex flex-row items-center">
							<Image
								className="z-[102] absolute"
								layout="fixed"
								alt="logo-cart"
								src="/images/cart.png"
								width="44"
								height="34"
							/>
							<p className="text-white text-xl font-extralight ml-2">dapurfreshid</p>
						</div>
						<Image
							className="z-[102]"
							layout="fixed"
							alt="logo-cart"
							src="/images/union.png"
							width="30"
							height="30"
						/>
					</div>
					<div id="cari-sayur">
						<InputSearch />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Header;