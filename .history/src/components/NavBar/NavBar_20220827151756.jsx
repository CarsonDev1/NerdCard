import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
const NavBar = (props) => {
	const { isMobile } = props;
	const [openMenu, setOpenMenu] = useState(false);
	const handleMenu = () => {
		setOpenMenu(!openMenu);
	};
	return (
		<nav className="flex items-center">
			<div className="flex items-center">
				<div className="text-20 font-bold mr-2">NerdCard</div>
				<BsSunFill
					size={"24px"}
					color="#e9c46a"
					className="cursor-pointer"
				/>
			</div>
			<ul className="ml-auto text-16 font-semibold">
				{openMenu ? (
					<MdOutlineClose
						size={"24px"}
						className="cursor-pointer"
						onClick={handleMenu}
					/>
				) : (
					<HiOutlineMenu
						size={"24px"}
						className="cursor-pointer"
						onClick={handleMenu}
					/>
				)}
				{openMenu && (
					<div className="absolute right-8 bg-white p-8 text-center text-black text-13 grid gap-6 rounded-sm">
						<li className=" cursor-pointer">Features</li>
						<li className=" cursor-pointer">Menu </li>
						<li className=" cursor-pointer">Our Story</li>
						<li className=" cursor-pointer">Contact</li>
					</div>
				)}
			</ul>
		</nav>
	);
};

export default NavBar;
