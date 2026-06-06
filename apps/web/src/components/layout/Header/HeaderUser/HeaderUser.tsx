import { Show, UserButton } from "@clerk/tanstack-react-start";

import { AuthActions } from "./AuthActions";
import { NotificationBell } from "./NotificationBell";

export function HeaderUser() {
	return (
		<>
			<Show when="signed-in">
				<div className="hidden items-center gap-3 sm:flex">
					<NotificationBell />
					<UserButton />
				</div>
			</Show>

			<Show when="signed-out">
				<div className="hidden sm:flex">
					<AuthActions />
				</div>
			</Show>
		</>
	);
}
