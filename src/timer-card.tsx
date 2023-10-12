import { Card, Container } from "semantic-ui-react";

import { millisecondsToHuman } from "./helpers.ts";

type TimeCardProps = {
	description: string;
	elapsedMs: number;
	title: string;
};

export function TimerCard(props: TimeCardProps) {
	return (
		<Card>
			<Card.Content>
				<Card.Header>{props.title}</Card.Header>
				<Card.Meta>{props.description}</Card.Meta>
				<Container textAlign={`center`}>
					{millisecondsToHuman(props.elapsedMs)}
				</Container>
			</Card.Content>
		</Card>
	);
}
