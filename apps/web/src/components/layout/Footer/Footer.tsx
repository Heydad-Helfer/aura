import { LegalFooter } from "#/components/layout/Footer/LegalFooter";
import { TrustBadges } from "#/components/layout/Footer/TrustBadges";

const Footer = () => {
	return (
		<footer className="mt-auto shrink-0 bg-surface">
			<div className="container mx-auto px-4 py-8">
				<div className="mx-auto w-full max-w-lg">
					<TrustBadges />
					<LegalFooter />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
