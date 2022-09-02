import { FaUser } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import checkInconMobile from "../../assets/mobile/checkpoint.svg";
import { BsFillCreditCardFill } from "react-icons/bs";
const Content = () => {
	const customer = useSpring({ customers: 102424, from: { customers: 0 } });
	const card = useSpring({ cards: 123200, from: { cards: 0 } });
	return (
		<section className="md: flex md: flex-row">
			<div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 to-transparent md:w-[20%] rounded-[24px]">
				<div className="mt-16 gap-8 flex items-start">
					<FaUser size={"22px"} className="mt-[12px]" />
					<div className="text-26">
						<animated.div>
							{customer.customers.to((val) => Math.floor(val))}
						</animated.div>
						<p className="text-13 font-semibold mb-[36px]">
							Customer
						</p>
					</div>
				</div>
				<div className="gap-8 flex items-start mb-16">
					<BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
					<div className="text-26">
						<animated.div>
							{card.cards.to((val) => Math.floor(val))}
						</animated.div>
						<p className="text-13 font-semibold"> Card Issued </p>
					</div>
				</div>
			</div>
			<div className="text-13 flex flex-col w-full mt-24 font-semibold md:w-[30%] md:text-16 md:m;-[20%]">
				<div className="check-content">
					<img src={checkInconMobile} alt="" />
					<p> Card reports sent to your phone every weeks </p>
				</div>
				<div className="check-content">
					<img src={checkInconMobile} alt="" />
					<p> No external fees </p>
				</div>
				<div className="check-content">
					<img src={checkInconMobile} alt="" />
					<p> Set spending limits and restrictions </p>
				</div>
			</div>
		</section>
	);
};

export default Content;
