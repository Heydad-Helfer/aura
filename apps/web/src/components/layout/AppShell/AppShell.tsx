import type { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-dvh flex-col bg-surface">{children}</div>
	);
}
