import { createFileRoute } from "@tanstack/react-router";
import { AuthCard } from "@/components/auth/AuthCard";
import { HeroSection } from "@/components/marketing/HeroSection";
import { LegalFooter } from "@/components/marketing/LegalFooter";
import { TrustBadges } from "@/components/marketing/TrustBadges";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div>
			<HeroSection />
			<div className="mx-auto w-full max-w-lg">
				<AuthCard />
			</div>
			<div className="mx-auto w-full max-w-lg">
				<TrustBadges />
				<LegalFooter />
			</div>
		</div>
	);
}
