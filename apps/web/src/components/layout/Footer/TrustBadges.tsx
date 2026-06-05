import { FlaskConical, HeartPulse, Shield } from "lucide-react";

const badges = [
	{ icon: Shield, label: "Private & Secure" },
	{ icon: HeartPulse, label: "Clinically Guided" },
	{ icon: FlaskConical, label: "Science-Backed" },
] as const;

function BadgeItem({
	icon: Icon,
	label,
}: {
	icon: (typeof badges)[number]["icon"];
	label: string;
}) {
	return (
		<div className="flex flex-col items-center gap-2 text-center">
			<Icon className="size-6 text-primary/70" strokeWidth={1.5} />
			<span className="text-xs leading-4 text-on-surface-variant">{label}</span>
		</div>
	);
}

export function TrustBadges() {
	return (
		<section className="px-5 py-10 md:px-10">
			<div className="mx-auto flex max-w-md flex-col items-center gap-6">
				<div className="grid w-full grid-cols-2 gap-x-6">
					{badges.slice(0, 2).map((badge) => (
						<BadgeItem key={badge.label} {...badge} />
					))}
				</div>
				<BadgeItem {...badges[2]} />
			</div>
		</section>
	);
}
