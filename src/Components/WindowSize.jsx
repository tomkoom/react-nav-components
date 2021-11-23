import React from "react";
import { useWindowSize } from "./useWindowSize";
import css from "./WindowSize.module.css";

const WindowSize = () => {
	const [deviceWidth, deviceHeight] = useWindowSize();
	return (
		<section className={css.windowSize}>
			<div className={css.windowSize__badge}>
				<p>
					{deviceWidth}px x {deviceHeight}px
				</p>
			</div>
			<p>Breakpoint: 1024px</p>
		</section>
	);
};

export default WindowSize;
