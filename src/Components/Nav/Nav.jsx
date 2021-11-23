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
	const control = useAnimation();

	function resetMenu() {
		if (deviceWidth > DeviceSizes.laptop) {
			setMenuIsOpen(false);
		}
	}

	useEffect(() => {
		resetMenu();
	}, [deviceWidth]);

	const animateMenu = () => {
		control.start({
			y: 68,
			transition: { type: "spring", bounce: 0.75 },
			opacity: 1,
		});
	};

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
					animateMenu();
				}}
				whileTap={{ scale: 0.9 }}
			>
				{menuIsOpen ? iconTimes : iconBars}
			</motion.div>

			<motion.ul
				className={menuIsOpen ? css.nav__list__active : css.nav__list}
				initial={{ opacity: 0, y: 0, x: 0 }}
				animate={control}
				exit={{ y: "100vh", opacity: 0 }}
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
			</motion.ul>
		</nav>
	);
};

export default Nav;
