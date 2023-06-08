import type { Icon as LucideIcon } from "lucide-svelte";
import {
	Check,
	Copy,
	Menu,
	Moon,
	Twitter
} from "lucide-svelte";
import Apple from "./Apple.svelte";
import Aria from "./Aria.svelte";
import GitHub from "./GitHub.svelte";
import Google from "./Google.svelte";
import Npm from "./Npm.svelte";
import PayPal from "./PayPal.svelte";
import Pnpm from "./Pnpm.svelte";
import RadixSvelte from "./RadixSvelte.svelte";
import Tailwind from "./Tailwind.svelte";
import Yarn from "./Yarn.svelte";

export type Icon = LucideIcon;

export const Icons = {
	twitter: Twitter,
	check: Check,
	copy: Copy,
	menu: Menu,
	moon: Moon,
	gitHub: GitHub,
	radix: RadixSvelte,
	aria: Aria,
	npm: Npm,
	yarn: Yarn,
	pnpm: Pnpm,
	tailwind: Tailwind,
	google: Google,
	apple: Apple,
	paypal: PayPal
};
