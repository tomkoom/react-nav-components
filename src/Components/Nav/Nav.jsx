import React, { useState, useEffect } from "react";
import css from "./Nav.module.css";

import { useWindowSize } from "../useWindowSize";
import { DeviceSizes } from "../DeviceSizes";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
	{ name: "Home", to: "#" },
	{ name: "About", to: "#" },
	{ name: "Blog", to: "#" },
	{ name: "Contact", to: "#" },
];

const iconTimes = <FontAwesomeIcon icon={faTimes} color="#263238" />;
const iconBars = <FontAwesomeIcon icon={faBars} color="#263238" />;

const Nav = () => {
	const [menuBtn, setMenuBtn] = useState(false);
	const [deviceWidth, deviceHeight] = useWindowSize();

	function resetMenuBtn() {
		if (deviceWidth > DeviceSizes.tablet) {
			setMenuBtn(false);
		}
	}

	useEffect(() => {
		resetMenuBtn();
	}, [deviceWidth]);

	return (
		<nav className={css.nav}>
			<div className={css.nav__logoContainer}>
				<h1 className={css.nav__logoContainer__logoTitle}>
					Responsive Nav
				</h1>
			</div>

			<div
				className={css.nav__menuIcon}
				onClick={() => setMenuBtn(!menuBtn)}
			>
				{menuBtn ? iconTimes : iconBars}
			</div>

			<ul
				className={
					menuBtn ? `${css.nav__list} ${css.active}` : css.nav__list
				}
			>
				{navLinks.map(({ name, to, i }) => (
					<li className={css.nav__list__item} key={i}>
						<a
							className={css.nav__list__item__link}
							href={to}
							rel="noreferrer noopener"
						>
							{name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
