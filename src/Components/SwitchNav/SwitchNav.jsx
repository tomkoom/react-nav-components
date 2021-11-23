import React from "react";
import css from "./SwitchNav.module.css";
import { motion } from "framer-motion";

const SwitchNav = ({ setIsNav }) => {
	return (
		<div className={css.switchnav}>
			<motion.button
				className={css.switchnav__btn}
				onClick={() => setIsNav(1)}
				whileTap={{ scale: 0.9 }}
			>
				Nav
			</motion.button>
			<motion.button
				className={css.switchnav__btn}
				onClick={() => setIsNav(3)}
				whileTap={{ scale: 0.9 }}
			>
				Nav3
			</motion.button>
			<motion.button
				className={css.switchnav__btn}
				onClick={() => setIsNav(4)}
				whileTap={{ scale: 0.9 }}
			>
				Nav4
			</motion.button>
		</div>
	);
};

export default SwitchNav;
