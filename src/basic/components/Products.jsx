import React, { useState } from "react";
import useProducts from "../../hooks/use-products";

export default function Products() {
	const [checked, setChecked] = useState(false);
	const [loading, error, products] = useProducts({ salesOnly: checked });

	const handleChange = () => {
		setChecked(!checked);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

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
