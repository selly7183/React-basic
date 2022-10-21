import React, { useEffect, useState } from "react";

export default function Products() {
	const [products, setProducts] = useState([]);
	const [checked, setChecked] = useState(false);
	const handleChange = () => {
		setChecked(!checked);
	};

	useEffect(() => {
		fetch(`data/${checked ? "sale_" : ""}products.json`)
			.then((res) => res.json())
			.then((data) => {
				console.log("네트워크 받아옴");
				setProducts(data);
			});
		return () => {
			console.log("clean");
			//컴포넌트가 없어질때 메모리를 정리해야되거나 소켓 네트워크 통신을 닫아야할때 useEffect에 return 함수를 콜백해주면 정리됨.
		};
	}, [checked]);

	return (
		<>
			<input
				type="checkbox"
				id="checkbox"
				value={checked}
				onChange={handleChange}
			/>
			<label htmlFor="checkbox">Show Only 🔥Sale</label>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<article>
							<h3>{product.name}</h3>
							<h3>{product.price}</h3>
						</article>
					</li>
				))}
			</ul>
		</>
	);
}
