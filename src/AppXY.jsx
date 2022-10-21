import React from "react";
import "./AppXY.css";
import { useState } from "react";

export default function AppXY() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMove = (e) => {
		setPosition({ x: e.clientX, y: e.clientY });
		/* 수평을만 이동 가능하게
		setPosition((prev) => ({ x: e.clientX, y: prev.y }));
		setPosition((prev) => ({ ...prev, x: e.clientX })); */
	};

	return (
		<div className="container" onPointerMove={handleMove}>
			<div
				className="pointer"
				style={{
					transform: `translate(${position.x}px, ${position.y}px)`,
				}}
			/>
		</div>
	);
}
