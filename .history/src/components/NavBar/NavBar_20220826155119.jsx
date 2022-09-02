import { BsSunFill } from "react-icons/bs";
const NavBar = () => {
	return (
		<nav className="flex items-center">
			<div className="flex items-center">
				<div className="text-20 font-bold">NerdCard</div>
				<BsSunFill />
			</div>
		</nav>
	);
};

export default NavBar;
