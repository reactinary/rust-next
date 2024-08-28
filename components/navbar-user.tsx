import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useUserStore } from "@/lib/stores/store-user";
import Link from "next/link";

export function NavbarUser() {
	// const user = useUserStore((state) => state.user);
	// const logout = useAuthStore((state) => state.logout); // TODO: Logout

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarFallback>EV</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<p>hello</p>
				{/* {user && (
					<div>
						<DropdownMenuLabel>Name: {user?.name}</DropdownMenuLabel>
						<DropdownMenuSeparator />
					</div>
				)} */}
				<DropdownMenuItem>
					<Link href="/auth/register">Register</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href="/auth/login">Login</Link>
				</DropdownMenuItem>

				{/* <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem> */}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
