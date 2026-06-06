import { Show, UserButton, useUser } from "@clerk/tanstack-react-start";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { Bell, Menu } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import { headerNavItems } from "#/lib/nav-items";
import { cn } from "#/lib/utils";

import { MOCK_UNREAD_COUNT } from "../HeaderUser/NotificationBell";

function HeaderMenuNavItem({ label, to }: { label: string; to: string }) {
	const matchRoute = useMatchRoute();
	const isActive = Boolean(matchRoute({ to, fuzzy: false }));

	return (
		<DropdownMenuItem
			render={<Link to={to} />}
			className={cn(isActive && "text-primary font-medium")}
		>
			{label}
		</DropdownMenuItem>
	);
}

function HeaderMenuSignedOut() {
	return (
		<>
			<DropdownMenuItem render={<Link to="/sign-in/$" />}>
				Sign In
			</DropdownMenuItem>
			<DropdownMenuItem render={<Link to="/sign-up/$" />}>
				Sign Up
			</DropdownMenuItem>
		</>
	);
}

function HeaderMenuSignedIn() {
	const { user } = useUser();

	return (
		<>
			<DropdownMenuGroup className="bg-primary-container/20 rounded-lg">
				<div className="flex items-center px-2 py-2 gap-4">
					<UserButton
						showName={true}
						fallback={user?.fullName?.charAt(0)}
					></UserButton>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-medium">{user?.fullName}</span>
						<span className="truncate text-xs text-on-surface-variant">
							{user?.emailAddresses[0]?.emailAddress}
						</span>
					</div>
				</div>
			</DropdownMenuGroup>

			<DropdownMenuSeparator />

			<DropdownMenuGroup>
				<DropdownMenuItem disabled>
					<Bell />
					Notifications
					{MOCK_UNREAD_COUNT > 0 ? (
						<span className="ml-auto flex size-5 min-w-5 items-center justify-center rounded-full bg-error px-1 text-[10px] font-semibold leading-none text-on-error">
							{MOCK_UNREAD_COUNT > 9 ? "9+" : MOCK_UNREAD_COUNT}
						</span>
					) : null}
				</DropdownMenuItem>
			</DropdownMenuGroup>

			<DropdownMenuSeparator />

			<DropdownMenuGroup>
				{headerNavItems.map((item) => (
					<HeaderMenuNavItem key={item.to} label={item.label} to={item.to} />
				))}
			</DropdownMenuGroup>
		</>
	);
}

export function HeaderMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				render={
					<Button
						variant="ghost"
						size="icon-sm"
						className="text-on-surface-variant hover:text-on-surface"
					/>
				}
			>
				<Menu />
				<span className="sr-only">Open menu</span>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="w-56">
				<Show when="signed-out">
					<HeaderMenuSignedOut />
				</Show>

				<Show when="signed-in">
					<HeaderMenuSignedIn />
				</Show>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
