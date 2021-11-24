import React, { useState, useEffect } from "react";
import css from "./Nav.module.css";
import { NavLink } from "react-router-dom";

import { useWindowSize } from "../useWindowSize";
import { DeviceSizes } from "../DeviceSizes";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// FRAMER MOTION
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
	{ name: "Home", to: "/" },
	{ name: "About", to: "about" },
	{ name: "Blog", to: "blog" },
	{ name: "Contact", to: "contact" },
];

const iconTimes = <FontAwesomeIcon icon={faTimes} color="#263238" />;
const iconBars = <FontAwesomeIcon icon={faBars} color="#263238" />;
const iconGithub = <FontAwesomeIcon icon={faGithub} />;

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

	const menuVariants = {
		initial: { y: "-50%", opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 200,
				mass: 0.33,
				// duration: 0.2,
			},
		},
		exit: {
			y: "-100%",
			opacity: 0,
			transition: {
				type: "easeIn",
			},
		},
	};

	return (
		<nav
			className={css.nav}
			style={isNav === 1 ? null : { display: "none" }}
		>
			{/* LOGO */}
			<div className={css.nav__logoContainer}>
				<h1 className={css.nav__logoContainer__logo}>ResponsiveNav</h1>
				<a
					className={css.nav__logoContainer__link}
					href="https://github.com/tomkoom/react-responsive-nav2"
					target="_blank"
					rel="norefferer noopener"
				>
					{iconGithub}
				</a>
			</div>

			{/* MENU BTN */}
			<motion.div
				className={css.nav__menuBtn}
				onClick={() => {
					setMenuIsOpen(!menuIsOpen);
				}}
				whileTap={{ scale: 0.9 }}
			>
				{menuIsOpen ? iconTimes : iconBars}
			</motion.div>

			{/* MENU */}
			{deviceWidth > DeviceSizes.laptop ? (
				<div className={css.nav__list}>
					{navLinks.map(({ name, to }, i) => (
						<li className={css.nav__list__item} key={i}>
							<NavLink
								className={css.nav__list__item__link}
								to={to}
								style={({ isActive }) =>
									isActive
										? {
												boxShadow: "0 2px 0 #263238",
										  }
										: null
								}
							>
								{name}
							</NavLink>
						</li>
					))}
				</div>
			) : (
				<AnimatePresence>
					{menuIsOpen ? (
						<motion.ul
							className={css.nav__list__active}
							variants={menuVariants}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							{navLinks.map(({ name, to }, i) => (
								<li
									className={css.nav__list__item}
									key={i}
									onClick={() => setMenuIsOpen(false)}
								>
									<NavLink
										className={css.nav__list__item__link}
										to={to}
										style={({ isActive }) =>
											isActive
												? {
														boxShadow:
															"0 2px 0 #263238",
												  }
												: null
										}
									>
										{name}
									</NavLink>
								</li>
							))}
						</motion.ul>
					) : null}
				</AnimatePresence>
			)}
		</nav>
	);
};

export default Nav;
