import { FaUser } from "react-icons/fa";
const Content = () => {
	return (
		<section className="">
			<div className="ml-[70px] mr-[54px] text-bold bg-purple-600 flex items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px]">
				<div className="mt-16 flex items-center">
					<FaUser size={"22px"} className="mt-[12px]" />
					<p className="text-26">102424</p>
					<p className="text-13 font-semibold mb-[36px]">Customer</p>
				</div>
			</div>
		</section>
	);
};

export default Content;
