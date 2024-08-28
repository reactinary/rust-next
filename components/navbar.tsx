"use client";

import Link from "next/link";

import { Flex } from "@/components/ui/containers";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { clx } from "@/lib/utils/clx/clx-merge";
import { NavbarUser } from "./navbar-user";
import { ThemeSwitcher } from "./theme-switcher";

type TODO = any;

export function Navbar() {
	return (
		<div className="flex justify-between h-16 p-2">
			<div className="flex gap-4">
				<Link href="/" className="mt-2">
					Home
				</Link>
				<DemoNavigationMenu />
				<Link href="/test" className="mt-2">
					Test
				</Link>
			</div>
			<div className="flex gap-2">
				<NavbarUser />
				<ThemeSwitcher />
			</div>
		</div>
	);
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     ✨ FUNCTIONS ✨                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

function DemoNavigationMenu() {
	return (
		<Flex className="h-[200px] items-start justify-start">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>SQLX</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="z-55 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
								{LINKS_SQLX.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
									/>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger>Shuttle</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="z-55 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
								{LINKS_SHUTTLE.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
									/>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger>Others</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="z-55 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
								{LINKS_OTHERS.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
									/>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</Flex>
	);
}

function ListItem({ title, children, ...props }: TODO) {
	const Anchor = clx.a(
		"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
	);

	return (
		<li>
			<NavigationMenuLink asChild>
				<Anchor {...props}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
						{children}
					</p>
				</Anchor>
			</NavigationMenuLink>
		</li>
	);
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                        CONSTANTS                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

const LINKS_SQLX: { title: string; href: string }[] = [
	{
		title: "Books",
		href: "/sqlx/books",
	},
	{
		title: "Users",
		href: "/sqlx/users",
	},
	{
		title: "Todos",
		href: "/sqlx/todos",
	},
	{
		title: "Blogs",
		href: "/sqlx/blogs",
	},
];

const LINKS_SHUTTLE: { title: string; href: string }[] = [
	{
		title: "Todos",
		href: "/sqlx/todos",
	},
];

const LINKS_OTHERS: {
	title: string;
	href: string;
}[] = [
	{
		title: "Link Shortener",
		href: "/others/link-shortener",
	},
	{
		title: "Rate Limit",
		href: "/others/rate-limit",
	},
];
