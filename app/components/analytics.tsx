"use client";

export function Analytics() {
	const token = "8e7aba08-e77f-4771-b885-07279f117212";
	if (!token) {
		return null;
	}
	return (
		<script
			src="https://beamanalytics.b-cdn.net/beam.min.js"
			data-token={token}
			async
		/>
	);
}
