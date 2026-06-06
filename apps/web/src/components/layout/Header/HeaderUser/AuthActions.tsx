import { Link } from "@tanstack/react-router";

import { buttonVariants } from "#/components/ui/button";
import { cn } from "#/lib/utils";

export function AuthActions() {
	return (
		<div className="flex items-center gap-3">
			<Link
				to="/sign-in/$"
				className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
			>
				Sign in
			</Link>
			<Link
				to="/sign-up/$"
				className={cn(buttonVariants({ variant: "default", size: "sm" }))}
			>
				Sign up
			</Link>
		</div>
	);
}
