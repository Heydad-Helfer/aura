import { HeaderBrand } from "./HeaderBrand/HeaderBrand";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { HeaderNav } from "./HeaderNav/HeaderNav";
import { HeaderUser } from "./HeaderUser/HeaderUser";

export function Header() {
	return (
		<header className="header relative sticky top-0 z-50 flex h-16 w-full shrink-0 items-center border-b border-outline-variant/15 bg-surface/25 px-5 backdrop-blur-xl backdrop-saturate-150 md:px-10">
			<HeaderBrand />
			<div className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
				<HeaderNav />
			</div>
			<div className="hidden sm:ml-auto sm:block">
				<HeaderUser />
			</div>
			<div className="ml-auto sm:hidden">
				<HeaderMenu />
			</div>
		</header>
	);
}
