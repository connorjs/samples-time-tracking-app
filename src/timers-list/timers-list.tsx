import { useCallback, useEffect, useState } from "react";

import { TimerCard } from "../timer-card/timer-card.tsx";
import { initialItems } from "../timer-data/timer-data.ts";
import styles from "./timers-list.module.css";

export function TimersList() {
	const [runningTimer, setRunningTimer] = useState<string>();
	const [lastStartTime, setLastStartTime] = useState<number>();
	const [timeSince, setTimeSince] = useState<number>();

	useEffect(() => {
		if (lastStartTime === undefined) return;
		const interval = setInterval(
			() => setTimeSince(Date.now() - lastStartTime),
			500, // Twice a second to better handle sub-second time updates.
		);
		return () => {
			clearInterval(interval);
		};
	}, [lastStartTime]);

	const handleStart = useCallback(
		(id: string) => {
			if (runningTimer) {
				updateElapsedTime(runningTimer, lastStartTime);
			}
			setRunningTimer(id);
			setLastStartTime(Date.now());
			setTimeSince(0);
		},
		[lastStartTime, runningTimer], // TODO: This causes each item to re-render 🤔
	);

	const handleStop = useCallback(
		(id: string) => {
			updateElapsedTime(id, lastStartTime);
			setRunningTimer(undefined);
			setLastStartTime(undefined);
			setTimeSince(undefined);
		},
		[lastStartTime], // TODO: This causes each item to re-render 🤔
	);

	return (
		<div className={styles[`timers`]}>
			{initialItems.map((item) => (
				<TimerCard
					key={item.id}
					description={item.project}
					elapsedMs={
						runningTimer === item.id && timeSince
							? item.elapsedMs + timeSince
							: item.elapsedMs
					}
					id={item.id}
					isRunning={runningTimer === item.id}
					onStart={handleStart}
					onStop={handleStop}
					title={item.title}
				/>
			))}
		</div>
	);
}

function updateElapsedTime(id: string, lastStartTime: number | undefined) {
	if (!lastStartTime) return;

	const item = initialItems.find((item) => item.id === id);
	if (!item) return;

	item.elapsedMs = item.elapsedMs + (Date.now() - lastStartTime);
}
