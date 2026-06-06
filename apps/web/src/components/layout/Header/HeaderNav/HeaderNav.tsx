import { Show } from "@clerk/tanstack-react-start";
import { headerNavItems } from "../../../../lib/nav-items";
import { HeaderNavLink } from "./HeaderNavLink";

export function HeaderNav() {
	return (
		<Show when="signed-in">
			<nav
				className="header-nav hidden items-center gap-2 sm:flex md:gap-4"
				aria-label="Main navigation"
			>
				{headerNavItems.map((item) => (
					<HeaderNavLink key={item.to} label={item.label} to={item.to} />
				))}
			</nav>
		</Show>
	);
}
