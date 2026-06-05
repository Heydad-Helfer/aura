export function LegalFooter() {
	return (
		<footer className="px-5 pb-8 text-center md:px-10">
			<p className="text-xs text-on-surface-variant/70">
				© 2024 Aura Wellbeing
			</p>
			<div className="mt-2 flex items-center justify-center gap-4 text-xs text-on-surface-variant/70">
				<button type="button" className="hover:text-foreground hover:underline">
					Privacy Policy
				</button>
				<button type="button" className="hover:text-foreground hover:underline">
					Terms of Service
				</button>
			</div>
		</footer>
	);
}
