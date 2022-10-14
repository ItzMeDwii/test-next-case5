import MainLayout from "../../layouts/main";
import FooterNavigation from "../../components/FooterNavigation"
import Header from "../../components/Header"
import Image from "next/image";
import {
	InformationCircleIcon
} from "@heroicons/react/24/outline";

const home = () => {
	return (
		<div className="box-border bg-white-100 w-80 h-screen mx-auto border font-rubik">

			{/* Header Beranda */}
			<Header />
	
			{/* Kategori Produk */}
			<section>
				<div className="ml-3">
					<p className="text-base font-bold mt-2">Kategori Produk</p>
					<div className="flex flex-row gap-2.5 overflow-x-auto scrollbar-hide mt-2">
						<div className="flex flex-col bg-gradient-to-b from-gray-200 to-slate-900 rounded h-full w-full">
							<Image
								className=" rounded absolute mix-blend-overlay"
								layout="fixed"
								alt="img-bumbu"
								src="/images/bumbu.png"
								width="100"
								height="100"
							/>
							<p className="text-white text-sm font-bold -mt-5 ml-1">Bumbu</p>
						</div>
						<div className="flex flex-col bg-gradient-to-b from-gray-200 to-slate-900 rounded h-full w-full">
							<Image
								className=" rounded absolute mix-blend-overlay"
								layout="fixed"
								alt="img-bumbu"
								src="/images/bumbu.png"
								width="100"
								height="100"
							/>
							<p className="text-white text-sm font-bold -mt-5 ml-1">Bumbu</p>
						</div>
						<div className="flex flex-col bg-gradient-to-b from-gray-200 to-slate-900 rounded h-full w-full">
							<Image
								className=" rounded absolute mix-blend-overlay"
								layout="fixed"
								alt="img-bumbu"
								src="/images/bumbu.png"
								width="100"
								height="100"
							/>
							<p className="text-white text-sm font-bold -mt-5 ml-1">Bumbu</p>
						</div>
						<div className="flex flex-col bg-gradient-to-b from-gray-200 to-slate-900 rounded h-full w-full">
							<Image
								className=" rounded absolute mix-blend-overlay"
								layout="fixed"
								alt="img-bumbu"
								src="/images/bumbu.png"
								width="100"
								height="100"
							/>
							<p className="text-white text-sm font-bold -mt-5 ml-1">Bumbu</p>
						</div>
					</div>
				</div>
			</section> 

			{/* Produk Terpopuler */}
			<section>
				<div className="ml-3 mt-5">
					<div className="flex flex-row justify-between mr-3 items-center">
						<p className="text-base font-bold">Produk Terpopuler</p>
						<span className="text-xs font-bold text-[#547F1E]">Lihat Semua</span>
					</div>
					<div>
						<div className="w-72 h-36 bg-white rounded mt-2 mb-14 flex flex-col p-4 drop-shadow">
							<div>
								<div className="flex flex-row justify-between">
									<Image
										className="z-[102] rounded"
										layout="fixed"
										alt="img-kangkung"
										src="/images/kangkung.png"
										width="80"
										height="80"
									/>
									<div>
										<p className="text-lg font-semibold">Kangkung</p>
										<p className="text-sm font-semibold text-red-700 bg-yellow-400 rounded-full w-8 px-1">10%</p>
										<div className="flex flex-row mb-1">
											<p className="font-semibold text-sm">Rp. 4.680</p>
											<span className="text-xs font-medium text-gray-300 ml-1 mt-1">Rp. 52.000</span>
										</div>
										<div className="flex flex-row">
											<button className="flex flex-row bg-[#6AA434] rounded px-2 py-1 text-white mr-2">
												<p>+</p>
												<p>Tambah</p>
											</button>
											<span className="font-medium text-sm mt-1">x 1 Ikat</span>
										</div>
									</div>
									<InformationCircleIcon className="h-5 w-5 text-gray-400"/>
								</div>
								<p className="ml-36 font-normal text-xs text-red-400">Promo Maksimal: 3</p>
							</div>
						</div>
					</div>

				</div>
			</section>

			{/* Footer */}
			<FooterNavigation />
		</div>
	);
};

home.layout = MainLayout;
export default home;

