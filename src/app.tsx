import { Container } from "semantic-ui-react";

import styles from "./app.module.css";
import { Timers } from "./timers.tsx";

export function App() {
	return (
		<Container>
			<h1 className={styles[`title`]}>Timers</h1>
			<hr />
			<Timers />
		</Container>
	);
}
