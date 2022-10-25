import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setLoading(true);
		setError(undefined);
		fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
			.then((res) => res.json())
			.then((data) => {
				console.log("네트워크 받아옴");
				setProducts(data);
				setLoading(false);
			})
			.catch((error) => setError("에러가 발생했음!"))
			.finally(() => setLoading(false));

		return () => {
			console.log("clean");
			//컴포넌트가 없어질때 메모리를 정리해야되거나 소켓 네트워크 통신을 닫아야할때 useEffect에 return 함수를 콜백해주면 정리됨.
		};
	}, [salesOnly]);

	return [loading, error, products];
}
