import { useCallback } from "react";
import { Button, Card } from "semantic-ui-react";

import { millisecondsToHuman } from "./helpers.ts";
import styles from "./timer-card.module.css";

type TimeCardProps = {
	description: string;
	elapsedMs: number;
	id: string;
	isRunning: boolean;
	onStart: (id: string) => void;
	onStop: (id: string) => void;
	title: string;
};

export function TimerCard(props: TimeCardProps) {
	const handleClick = useCallback(
		() => (props.isRunning ? props.onStop : props.onStart)(props.id),
		[props.id, props.isRunning, props.onStart, props.onStop],
	);

	// const [elapsedTime, setElapsed

	return (
		<Card>
			<Card.Content>
				<Card.Header>{props.title}</Card.Header>
				<Card.Meta>{props.description}</Card.Meta>
				<p className={styles[`time`]}>{millisecondsToHuman(props.elapsedMs)}</p>
			</Card.Content>
			<Button
				className={`bottom attached`}
				color={props.isRunning ? `red` : `green`}
				onClick={handleClick}
			>
				{props.isRunning ? `Stop` : `Start`}
			</Button>
		</Card>
	);
}
