import { Show } from "@clerk/tanstack-react-start";
import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AuthCard() {
	return (
		<section className="px-5">
			<div className="mx-auto max-w-md rounded-2xl bg-card p-6 shadow-md shadow-primary/10 md:p-8">
				<Show when="signed-out">
					<div className="flex justify-center items-center gap-4">
						<Link
							to="/sign-in/$"
							className={cn(
								buttonVariants({ variant: "default" }),
								"flex-1 h-12 rounded-full",
							)}
						>
							Join
						</Link>

						<Link
							to="/sign-up/$"
							className={cn(
								buttonVariants({ variant: "outline" }),
								"flex-1 h-12 rounded-full",
							)}
						>
							Continue
						</Link>
					</div>
				</Show>

				<Show when="signed-in">
					<p className="text-center text-base text-foreground">Welcome back</p>
				</Show>
			</div>
		</section>
	);
}
