import { type ErrorComponentProps, Link } from "@tanstack/react-router";
import { CircleAlert } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ErrorPage({ error, reset }: ErrorComponentProps) {
	const [showDetails, setShowDetails] = useState(
		import.meta.env.DEV && error instanceof Error,
	);
	const message =
		error instanceof Error
			? error.message
			: "An unexpected error occurred. Please try again.";

	return (
		<div className="flex flex-1 items-center justify-center px-5 py-12 md:px-10">
			<div className="mx-auto w-full max-w-md rounded-2xl bg-card p-6 text-center shadow-ambient md:p-8">
				<div className="mx-auto flex size-14 items-center justify-center rounded-full bg-destructive/10">
					<CircleAlert
						className="size-7 text-destructive"
						strokeWidth={1.5}
						aria-hidden
					/>
				</div>

				<h1 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-foreground">
					Something went wrong
				</h1>
				<p className="mt-2 text-base leading-6 text-on-surface-variant">
					We could not load this page right now. Take a breath, then try again
					when you are ready.
				</p>

				<div className="mt-6 flex flex-col gap-3">
					<Button
						type="button"
						onClick={reset}
						className="h-12 w-full rounded-full text-base font-semibold"
					>
						Try again
					</Button>
					<Button
						variant="outline"
						render={<Link to="/" />}
						className="h-12 w-full rounded-full border-border bg-card text-sm font-medium text-foreground hover:bg-muted"
					>
						Back to home
					</Button>
				</div>

				{import.meta.env.DEV && error instanceof Error ? (
					<div className="mt-6 text-left">
						<button
							type="button"
							onClick={() => setShowDetails((visible) => !visible)}
							className="text-xs font-medium text-on-surface-variant hover:text-foreground"
						>
							{showDetails ? "Hide error details" : "Show error details"}
						</button>
						{showDetails ? (
							<pre className="mt-2 max-h-40 overflow-auto rounded-lg border border-border bg-surface-container-low p-3 text-left text-xs leading-5 text-on-surface-variant">
								{message}
							</pre>
						) : null}
					</div>
				) : null}
			</div>
		</div>
	);
}
