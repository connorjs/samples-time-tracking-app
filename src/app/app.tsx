import { Container } from "semantic-ui-react";

import { TimersList } from "../timers-list/timers-list.tsx";
import styles from "./app.module.css";

export function App() {
	return (
		<Container>
			<h1 className={styles[`title`]}>Timers</h1>
			<hr />
			<TimersList />
		</Container>
	);
}
