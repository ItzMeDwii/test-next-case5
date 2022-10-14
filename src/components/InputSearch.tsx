import {
	MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

const InputSearch = () => {
	return (
		<div>
			<div className="flex justify-center items-center relative w-full">
				<MagnifyingGlassIcon className="absolute left-2 h-4 w-4 text-gray-700" />
				<input
					type="search"
					placeholder="Cari sayur, bumbu dapur, lauk pauk..."
					className="bg-gray-100 text-gray-600 border rounded-full pl-7 pr-3 py-2 text-sm w-full focus:!outline-0"
				/>
			</div>
		</div>
	);
};

export default InputSearch;