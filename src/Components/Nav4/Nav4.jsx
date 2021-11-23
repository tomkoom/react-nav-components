import React, { useState, useEffect } from "react";
import css from "./Nav4.module.css";
import { NavLink } from "react-router-dom";

import { useWindowSize } from "../useWindowSize";
import { DeviceSizes } from "../DeviceSizes";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

// FRAMER MOTION
import { AnimatePresence, motion, useAnimation, useCycle } from "framer-motion";

const navLinks = [
	{ name: "Home", to: "/" },
	{ name: "About", to: "about" },
	{ name: "Blog", to: "blog" },
	{ name: "Contact", to: "contact" },
];

const iconTimes = <FontAwesomeIcon icon={faTimes} color="#263238" />;
const iconBars = <FontAwesomeIcon icon={faBars} color="#263238" />;

const Nav3 = ({ isNav }) => {
	return (
		<nav
			className={css.nav4}
			style={isNav === 4 ? null : { display: "none" }}
		>
			456
		</nav>
	);
};

export default Nav3;
