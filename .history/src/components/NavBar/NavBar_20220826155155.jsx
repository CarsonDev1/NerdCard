import { BsSunFill } from "react-icons/bs";
const NavBar = () => {
	return (
		<nav className="flex items-center">
			<div className="flex items-center">
				<div className="text-20 font-bold mr-2">NerdCard</div>
				<BsSunFill size={"24px"} />
			</div>
		</nav>
	);
};

export default NavBar;
