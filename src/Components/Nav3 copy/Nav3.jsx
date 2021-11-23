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

const sideVariants = {
	closed: { transition: { staggerChildren: 0.2, staggerDirection: 1 } },
	open: { transition: { staggerChildren: 0.2, staggerDirection: -1 } },
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
			<AnimatePresence>
				{open ? (
					<motion.aside
						initial={{ width: 0 }}
						animate={{ width: 300 }}
						exit={{
							width: 0,
							transition: { delay: 0.7, duration: 0.3 },
						}}
					>
						<motion.div
							className={css.container}
							variants={sideVariants}
							initial="closed"
							animate="open"
							exit="closed"
						>
							{navLinks.map((l, i) => (
								<NavLink
									to={l.to}
									key={i}
									whileHover={{ scale: 1.1 }}
									variants={itemVariants}
								>
									{l.name}
								</NavLink>
							))}
						</motion.div>
					</motion.aside>
				) : null}
			</AnimatePresence>
			<div className={css.nav3__btnContainer}>
				<button className={css.nav3__btn} onClick={cycleOpen}>
					{open ? iconTimes : iconBars}
				</button>
			</div>
		</nav>
	);
};

export default Nav3;
