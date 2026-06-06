import { Bell } from "lucide-react";

import { Button } from "#/components/ui/button";

/** Mock notification count — replace with real data when notifications ship. */
export const MOCK_UNREAD_COUNT = 3;

export function NotificationBell() {
	return (
		<Button
			type="button"
			variant="ghost"
			size="icon-sm"
			className="relative text-on-surface-variant hover:text-on-surface"
			aria-label={`Notifications, ${MOCK_UNREAD_COUNT} unread`}
		>
			<Bell />
			{MOCK_UNREAD_COUNT > 0 ? (
				<span className="absolute -top-0.5 -right-0.5 flex size-4 min-w-4 items-center justify-center rounded-full bg-error px-1 text-[10px] font-semibold leading-none text-on-error">
					{MOCK_UNREAD_COUNT > 9 ? "9+" : MOCK_UNREAD_COUNT}
				</span>
			) : null}
		</Button>
	);
}
