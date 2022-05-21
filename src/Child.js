import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, childColor }) {

	function handleClick() {
		const newColor = getRandomColor();
		onChangeColor(newColor)
	}

	return <div
		onClick={handleClick}
		className="child"
		style={{ backgroundColor: childColor }} />;
}

export default Child;
