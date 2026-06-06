import { Show, UserButton } from "@clerk/tanstack-react-start";
import { Link } from "@tanstack/react-router";

export function Header() {
	return (
		<header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between border-b border-outline-variant/15 bg-surface/25 px-5 backdrop-blur-xl backdrop-saturate-150 md:px-10">
			<Link to="/" className="flex items-center gap-2.5">
				<img
					src="/assets/logo.png"
					alt=""
					className="size-9 rounded-lg"
					width={36}
					height={36}
				/>
				<span className="font-heading text-xl font-semibold tracking-tight text-primary">
					Aura
				</span>
			</Link>
			<Show when="signed-in">
				<UserButton />
			</Show>
			<button
				type="button"
				className="text-sm font-medium text-on-surface-variant transition-colors hover:text-foreground"
			>
				Help
			</button>
		</header>
	);
}
