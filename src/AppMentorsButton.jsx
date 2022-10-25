import { useReducer, useMemo, useCallback, memo } from "react";
import personReducer from "./reducer/person-reducer";

// 배열 상태 관리
export default function AppMentors() {
	const [person, dispatch] = useReducer(personReducer, initialPerson);

	const handleUpdate = useCallback(() => {
		const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
		const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
		dispatch({ type: "updated", prev, current });
	}, []);

	const handleAdd = useCallback(() => {
		const name = prompt(`멘토의 이름은?`);
		const title = prompt(`멘토의 직함은?`);
		dispatch({ type: "added", name, title });
	}, []);

	const handleDelete = useCallback(() => {
		const name = prompt(`누구를 삭제하고 싶은가요?`);
		dispatch({ type: "deleted", name });
	}, []);

	return (
		<div>
			<h1>
				{person.name}는 {person.title}
			</h1>
			<p>{person.name}의 멘토는:</p>
			<ul>
				{person.mentors.map((mentor, index) => (
					<li key={index}>
						{mentor.name} ({mentor.title})
					</li>
				))}
			</ul>
			<Button text="멘토 이름 바꾸기" onClick={handleUpdate} />
			<Button text="멘토 추가하기" onClick={handleAdd} />
			<Button text="멘토 삭제하기" onClick={handleDelete} />
		</div>
	);
}

const Button = memo(({ text, onClick }) => {
	console.log("Button", text, "re-rendering 😜");
	const result = useMemo(() => calculateSomething(), []);
	return (
		<button
			onClick={onClick}
			style={{
				backgroundColor: "black",
				color: "white",
				borderRadius: "20px",
				margin: "0.4rem",
			}}
		>
			{`${text} ${result}`}
		</button>
	);
});

function calculateSomething() {
	for (let i = 0; i < 10000; i++) {
		console.log("😆");
	}
	return 10;
}

const initialPerson = {
	name: "샐리",
	title: "개발자",
	mentors: [
		{
			name: "앨리",
			title: "시니어개발자",
		},
		{
			name: "제임스",
			title: "시니어개발자",
		},
	],
};
