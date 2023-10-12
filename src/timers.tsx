import { TimerCard } from "./timer-card.tsx";
import { initialItems } from "./timer-data.ts";
import styles from "./timers.module.css";

export function Timers() {
	return (
		<div className={styles[`timers`]}>
			{initialItems.map((item) => (
				<TimerCard
					key={item.title}
					description={item.project}
					elapsedMs={item.elapsedMs}
					title={item.title}
				/>
			))}
		</div>
	);
}
