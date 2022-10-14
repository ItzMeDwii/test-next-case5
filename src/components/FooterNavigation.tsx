import {
	BuildingStorefrontIcon,
	Bars4Icon,
	UserIcon
} from "@heroicons/react/24/solid";

const check = () => {
	return (
		<div>
			<section className="flex flex-row justify-between p-7 items-center w-auto h-16 bg-white border-t">
				<div className="flex flex-col items-center">
					<BuildingStorefrontIcon className="absolute h-6 w-8 text-[#6AA434]" />
					<p className="text-xs font-semibold text-[#6AA434] mt-6">Belanja</p>
				</div>
				<div className="flex flex-col items-center">
					<Bars4Icon className="absolute h-6 w-8 text-slate-400" />
					<p className="text-xs font-medium text-slate-400 mt-6">Riwayat</p>
				</div>
				<div className="flex flex-col items-center">
					<UserIcon className="absolute h-6 w-8 text-slate-400" />
					<p className="text-xs font-medium text-slate-400 mt-6">Profil</p>
				</div>
			</section>
		</div>
	);
};

export default check;