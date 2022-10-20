import "./App.css";

function AppJSX() {
	const name = "소연";
	const list = ["우유", "딸기", "바나나"];
	return (
		<>
			<h1 className="orange">Hello!</h1>
			<h2>Hello! {name}</h2>
			<ul>
				{list.map((item) => (
					<li>{item}</li>
				))}
			</ul>
			<img
				style={{ width: "200px", height: "200px" }}
				src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
				alt=""
			/>
		</>
	);
}

export default AppJSX;
