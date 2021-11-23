import React, { useState, useEffect } from "react";
import css from "./Nav3.module.css";
import { NavLink } from "react-router-dom";

import { useWindowSize } from "../useWindowSize";
import { DeviceSizes } from "../DeviceSizes";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

// FRAMER MOTION
import { AnimatePresence, motion, useCycle } from "framer-motion";

const navLinks = [
	{ name: "Home", to: "/" },
	{ name: "About", to: "about" },
	{ name: "Blog", to: "blog" },
	{ name: "Contact", to: "contact" },
];

const iconTimes = <FontAwesomeIcon icon={faTimes} color="#263238" />;
const iconBars = <FontAwesomeIcon icon={faBars} color="#263238" />;

const Nav3 = ({ isNav }) => {
	const [open, cycleOpen] = useCycle(false, true);
	const [deviceWidth, deviceHeight] = useWindowSize();

	return (
		<nav
			className={css.nav3}
			style={isNav === 3 ? null : { display: "none" }}
		>
			<h1 className={css.nav3__logo}>ResponsiveNav3</h1>

			{/* MENU BUTTON */}
			<motion.button
				whileTap={{ scale: 0.9 }}
				className={css.nav3__menuBtn}
				onClick={cycleOpen}
			>
				{open ? iconTimes : iconBars}
			</motion.button>

			{/* MENU */}
			{deviceWidth > DeviceSizes.laptop ? (
				<div className={css.nav3__menu}>
					{navLinks.map((l, i) => (
						<NavLink
							to={l.to}
							key={i}
							className={css.nav3__menu__item}
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
							className={`${css.nav3__menu} ${css.side}`}
							initial={{ x: "100%" }}
							animate={{
								x: 0,
							}}
							exit={{
								x: "100%",
							}}
							transition={{
								type: "spring",
								bounce: 0,
								duration: 0.4,
							}}
						>
							{navLinks.map((l, i) => (
								<NavLink
									to={l.to}
									key={i}
									onClick={() => cycleOpen(!open)}
									className={css.nav3__menu__item}
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

export default Nav3;
