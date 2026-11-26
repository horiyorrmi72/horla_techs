'use client';
import { useEffect, useState } from 'react';

const fmt = new Intl.DateTimeFormat('en-GB', {
	timeZone: 'Africa/Lagos',
	hour: 'numeric',
	minute: '2-digit',
	hour12: true,
});
const hourFmt = new Intl.DateTimeFormat('en-GB', {
	timeZone: 'Africa/Lagos',
	hour: 'numeric',
	hour12: false,
});

/**
 * The current time in Lagos, plus a gentle hint about whether the team is
 * likely at their desks. Rendered only after mount to avoid hydration mismatch.
 */
export default function LagosTime({ withStatus = false, className }) {
	const [now, setNow] = useState(null);

	useEffect(() => {
		setNow(new Date());
		const id = setInterval(() => setNow(new Date()), 30_000);
		return () => clearInterval(id);
	}, []);

	if (!now) return <span className={className}>Lagos, Nigeria</span>;

	const hour = Number(hourFmt.format(now));
	const awake = hour >= 8 && hour < 20;

	return (
		<span className={className}>
			{fmt.format(now).toLowerCase()} in Lagos
			{withStatus && (awake ? ' - we’re around' : ' - we’ll reply in the morning')}
		</span>
	);
}
