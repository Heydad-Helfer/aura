import { Show, SignInButton } from "@clerk/tanstack-react-start";

export function AuthCard() {
	return (
		<Show when="signed-out">
			<section className="px-5 md:px-10">
				<div className="mx-auto max-w-md rounded-2xl bg-card p-6 shadow-ambient md:p-8">
					<h2 className="font-heading text-center text-2xl font-semibold tracking-tight text-foreground">
						Start your journey
					</h2>
					<p className="mt-1 text-center text-base text-on-surface-variant">
						Create your account to begin.
					</p>

					<SignInButton />
				</div>
			</section>
		</Show>
	);
}
