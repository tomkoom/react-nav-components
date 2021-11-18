import React, { useState, useEffect } from "react";
// import "./Nav.css";

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
		<nav className="nav">
			<div className="nav__logo-container">
				<h1 className="nav__logo-container__logo-title">
					Responsive Nav
				</h1>
			</div>

			<div className="nav__device-size-info">
				<p>
					{deviceWidth}px x {deviceHeight}px
				</p>
			</div>

			<div
				className="nav__menu-icon"
				onClick={() => setMenuBtn(!menuBtn)}
			>
				{menuBtn ? iconTimes : iconBars}
			</div>

			<ul className={menuBtn ? "nav__list active" : "nav__list"}>
				{navLinks.map(({ name, to, i }) => (
					<li className="nav__list__item" key={i}>
						<a
							className="nav__list__item__link"
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
