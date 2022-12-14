import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
const Content = () => {
	return (
		<section className="">
			<div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px]">
				<div className="mt-16 gap-8 flex items-start">
					<FaUser size={"22px"} className="mt-[12px]" />
					<p className="text-26">
						102424
						<p className="text-13 font-semibold mb-[36px]">
							Customer
						</p>
					</p>
				</div>
			</div>
			<div className="">
				<BsFillCreditCardFill size={"22px"} className="mt-[26px]" />
				<p className="text-26">123200</p>
			</div>
		</section>
	);
};

export default Content;
