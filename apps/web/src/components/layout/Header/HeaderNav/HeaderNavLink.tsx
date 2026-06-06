import { Link } from "@tanstack/react-router";

type HeaderNavLinkProps = {
	label: string;
	to: string;
};

export function HeaderNavLink({ label, to }: HeaderNavLinkProps) {
	return (
		<Link
			to={to}
			className="header-nav-link"
			activeProps={{
				className: "header-nav-link header-nav-link-active",
			}}
			inactiveProps={{
				className: "header-nav-link header-nav-link-inactive",
			}}
		>
			{label}
		</Link>
	);
}

type HeaderNavMockProps = {
	label: string;
};

export function HeaderNavMock({ label }: HeaderNavMockProps) {
	return (
		<span
			className="header-nav-link header-nav-link-inactive cursor-default text-on-surface-variant/60"
			aria-disabled
		>
			{label}
		</span>
	);
}
