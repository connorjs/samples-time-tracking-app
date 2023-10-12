type TimerItem = {
	elapsedMs: number;
	id: string;
	project: string;
	title: string;
};

const SECONDS_TO_MS = 1000;
const MINUTES_TO_MS = 60 * SECONDS_TO_MS;
const HOURS_TO_MS = 60 * MINUTES_TO_MS;

export const initialItems: TimerItem[] = [
	{
		elapsedMs: HOURS_TO_MS + 30 * MINUTES_TO_MS + 56 * SECONDS_TO_MS,
		id: `09f0dfo-1`,
		project: `House Chores`,
		title: `Mow the lawn`,
	},
	{
		elapsedMs: 21 * MINUTES_TO_MS + 13 * SECONDS_TO_MS,
		id: `bo0Rg3x-2`,
		project: `Office Chores`,
		title: `Clear paper jam`,
	},
	{
		elapsedMs: 14 * HOURS_TO_MS + 29 * SECONDS_TO_MS,
		id: `V234Vkp-3`,
		project: `Life Chores`,
		title: `Ponder origins of universe`,
	},
];
