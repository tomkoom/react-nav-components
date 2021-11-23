import React, { useState, useEffect } from "react";
import css from "./Nav.module.css";
import { NavLink } from "react-router-dom";

import { useWindowSize } from "../useWindowSize";
import { DeviceSizes } from "../DeviceSizes";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

// FRAMER MOTION
import { motion, useAnimation } from "framer-motion";

const navLinks = [
	{ name: "Home", to: "/" },
	{ name: "About", to: "about" },
	{ name: "Blog", to: "blog" },
	{ name: "Contact", to: "contact" },
];

const iconTimes = <FontAwesomeIcon icon={faTimes} color="#263238" />;
const iconBars = <FontAwesomeIcon icon={faBars} color="#263238" />;

const Nav = ({ isNav }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [deviceWidth, deviceHeight] = useWindowSize();

	function resetMenu() {
		if (deviceWidth > DeviceSizes.laptop) {
			setMenuIsOpen(false);
		}
	}

	useEffect(() => {
		resetMenu();
	}, [deviceWidth]);

	return (
		<nav
			className={css.nav}
			style={isNav === 1 ? null : { display: "none" }}
		>
			<motion.div className={css.nav__logoContainer}>
				<h1 className={css.nav__logoContainer__logoTitle}>
					ResponsiveNav
				</h1>
			</motion.div>

			<motion.div
				className={css.nav__menuIcon}
				onClick={() => {
					setMenuIsOpen(!menuIsOpen);
				}}
				whileTap={{ scale: 0.9 }}
			>
				{menuIsOpen ? iconTimes : iconBars}
			</motion.div>

			<ul
				className={menuIsOpen ? css.nav__list__active : css.nav__list}
			>
				{navLinks.map(({ name, to }, i) => (
					<li
						className={css.nav__list__item}
						key={i}
						onClick={() => setMenuIsOpen(false)}
					>
						<NavLink
							to={to}
							style={({ isActive }) =>
								isActive
									? {
											textDecoration: "none",
											color: "#263238",
											boxShadow: "0 2px 0 #263238",
									  }
									: {
											textDecoration: "none",
											color: "#263238",
									  }
							}
						>
							{name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
