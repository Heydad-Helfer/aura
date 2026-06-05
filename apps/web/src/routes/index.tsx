import { createFileRoute } from "@tanstack/react-router";
import { AuthCard } from "@/components/auth/AuthCard";
import { HeroSection } from "@/components/marketing/HeroSection";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div>
			<HeroSection />
			<div className="mx-auto w-full max-w-lg">
				<AuthCard />
			</div>
		</div>
	);
}
