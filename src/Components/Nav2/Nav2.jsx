import React, { useState, useEffect } from "react";
import css from "./Nav2.module.css";
import { NavLink } from "react-router-dom";

import { useWindowSize } from "../useWindowSize";
import { DeviceSizes } from "../DeviceSizes";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// FRAMER MOTION
import { AnimatePresence, motion, useCycle } from "framer-motion";

const navLinks = [
	{ name: "Home", to: "/" },
	{ name: "About", to: "about" },
	{ name: "Blog", to: "blog" },
	{ name: "Contact", to: "contact" },
];

const iconTimes = <FontAwesomeIcon icon={faTimes} />;
const iconBars = <FontAwesomeIcon icon={faBars} />;
const iconGithub = <FontAwesomeIcon icon={faGithub} />;

const Nav2 = ({ isNav }) => {
	const [open, setOpen] = useState(false);
	// const [open, setOpen] = useState(false, true);
	const [deviceWidth, deviceHeight] = useWindowSize();

	const sideVariants = {
		initial: { x: "100%" },
		animate: {
			x: 80,
			transition: {
				type: "spring",
				stiffness: 200,
				mass: 0.33,
				// duration: 0.2,
			},
		},
		exit: {
			x: "100%",
			transition: {
				type: "easeIn",
			},
		},
	};

	function resetMenu() {
		if (deviceWidth > DeviceSizes.laptop) {
			setOpen(false);
		}
	}

	useEffect(() => {
		resetMenu();
	}, [deviceWidth]);

	return (
		<nav
			className={css.nav2}
			style={isNav === 2 ? null : { display: "none" }}
		>
			{/* LOGO */}
			<div className={css.nav2__logoContainer}>
				<h1 className={css.nav2__logoContainer__logo}>
					ResponsiveNav2
				</h1>
				<a
					href="https://github.com/tomkoom/react-responsive-nav2"
					className={css.nav2__logoContainer__link}
					target="_blank"
					rel="norefferer noopener"
				>
					{iconGithub}
				</a>
			</div>

			{/* MENU BUTTON */}
			<motion.button
				whileTap={{ scale: 0.9 }}
				className={css.nav2__menuBtn}
				onClick={() => setOpen(!open)}
			>
				{open ? iconTimes : iconBars}
			</motion.button>

			{/* MENU */}
			{deviceWidth > DeviceSizes.laptop ? (
				<div className={css.nav2__menu}>
					{navLinks.map((l, i) => (
						<NavLink
							to={l.to}
							key={i}
							className={css.nav2__menu__item}
							style={({ isActive }) =>
								isActive
									? {
											boxShadow: "0 2px 0 #263238",
									  }
									: null
							}
						>
							{l.name}
						</NavLink>
					))}
				</div>
			) : (
				// SIDE MENU
				<AnimatePresence>
					{open ? (
						<motion.div
							className={`${css.nav2__menu} ${css.side}`}
							variants={sideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							{navLinks.map((l, i) => (
								<NavLink
									to={l.to}
									key={i}
									onClick={() => setOpen(false)}
									className={css.nav2__menu__item}
									style={({ isActive }) =>
										isActive
											? {
													boxShadow:
														"0 2px 0 #263238",
											  }
											: null
									}
								>
									{l.name}
								</NavLink>
							))}
						</motion.div>
					) : null}
				</AnimatePresence>
			)}
		</nav>
	);
};

export default Nav2;
