export function millisecondsToHuman(ms: number) {
	const seconds = Math.floor((ms / 1000) % 60);
	const minutes = Math.floor((ms / 1000 / 60) % 60);
	const hours = Math.floor(ms / 1000 / 60 / 60);

	return [
		pad(hours.toString(), 2),
		pad(minutes.toString(), 2),
		pad(seconds.toString(), 2),
	].join(`:`);
}

function pad(numberString: string, size: number) {
	let padded = numberString;
	while (padded.length < size) padded = `0${padded}`;
	return padded;
}
