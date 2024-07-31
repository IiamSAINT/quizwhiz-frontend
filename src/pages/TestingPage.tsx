import { useEffect, useState, useCallback } from "react";
import { io } from "socket.io-client";
import { createLoby } from "../services/QuizService";

const socket = io("http://localhost:3000/lobby", { autoConnect: false });
socket.on("connect", () => {
	console.log("Connected");
});

const TestingPage = () => {
	const [names, setName] = useState([""]);
	const createLobyCallback = useCallback(async () => {
		// Edit created Quiz to loby
		const quizData = await createLoby(
			"3fce406a-deb3-43db-a2f6-9c992a96e5ac",
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIwMzQ1ZDc0LWEyYzMtNDZiMi04MDlmLTA1Mjg1NjExNzZkMyIsImlhdCI6MTcyMjM5MzkxNSwiZXhwIjoxNzMwMTY5OTE1fQ.Z7PobJ25zx070wrjF4YV18-XPRIT9SwBzZE8ZpTBZ_g"
		);

		socket.connect();
		socket.emit("create", { name: "Divine", joinCode: quizData.data.joinCode });
		socket.on("joined", (data: string) => {
			console.log(data);
			setName((names) => {
				return [...names, data];
			});
		});
	}, []);

	useEffect(() => {
		createLobyCallback();

		// Join the created Room
		// See other users joining the Room
	}, [createLobyCallback]);

	return (
		<>
			<div>Hello from Testing Lobby</div>
			{names.map((name, i) => (
				<p key={i}>{name} Connected</p>
			))}
		</>
	);
};

export default TestingPage;
