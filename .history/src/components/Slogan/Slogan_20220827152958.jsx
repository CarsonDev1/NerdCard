import Cards from "../../assets/desktop/isocard.svg";
const Slogan = () => {
	return (
		<section className="text-36 my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md: items-center md:text-48 ">
			<div className="text-center">
				<p className="">
					Earn <span className="text-purple-300">More</span>
				</p>
				<p className="">Pay Less</p>
				<button className="text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-300">
					Start
				</button>
			</div>
			<div className="mt-[69px]">
				<img src={Cards} alt="credit card" />
			</div>
		</section>
	);
};

export default Slogan;
