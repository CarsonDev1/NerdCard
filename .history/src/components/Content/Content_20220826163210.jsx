import { FaUser } from "react-icons/fa";
import checkInconMobile from "../../assets/mobile/checkpoint.svg";
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
				<div className="gap-8 flex items-start mb-16">
					<BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
					<p className="text-26">
						123200
						<p className="text-13 font-semibold">Card Issued</p>
					</p>
				</div>
			</div>
			<div className="text-13 flex flex-col w-full mt-24 font-semibold">
				<p className="flex gap-8 ml-[70px] mr-[29px] items-center">
					<img src={checkInconMobile} alt="" />
					<p> Card reports sent to your phone every weeks </p>
				</p>
			</div>
		</section>
	);
};

export default Content;
