import { Link } from "@tanstack/react-router";

export function HeaderBrand() {
	return (
		<Link to="/" className="flex shrink-0 items-center gap-2.5">
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
	);
}
