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

const itemVariants = {
	closed: { opacity: 0 },
	open: { opacity: 1 },
};

const iconTimes = <FontAwesomeIcon icon={faTimes} color="#263238" />;
const iconBars = <FontAwesomeIcon icon={faBars} color="#263238" />;

const Nav3 = ({ isNav }) => {
	const [open, cycleOpen] = useCycle(false, true);
	console.log(open);

	return (
		<nav
			className={css.nav3}
			style={isNav === 3 ? null : { display: "none" }}
		>
			<div className={css.nav3__logoContainer}>
				<h1 className={css.nav3__logoContainer__logoTitle}>
					ResponsiveNav3
				</h1>
			</div>

			<AnimatePresence>
				{open ? (
					<motion.div
						className={css.nav3__sideMenu}
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
						<div className={css.nav3__sideMenu__navLinks}>
							{navLinks.map((l, i) => (
								<NavLink
									to={l.to}
									key={i}
									className={
										css.nav3__sideMenu__navLinks__item
									}
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
						</div>
					</motion.div>
				) : null}
			</AnimatePresence>

			{/* MENU BUTTON */}
			<motion.div
				className={css.nav3__btnContainer}
				whileTap={{ scale: 0.9 }}
			>
				<button
					className={css.nav3__btnContainer__btn}
					onClick={cycleOpen}
				>
					{open ? iconTimes : iconBars}
				</button>
			</motion.div>
		</nav>
	);
};

export default Nav3;
