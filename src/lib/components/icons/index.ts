import type { Icon as LucideIcon } from "lucide-svelte";
import {
	Check,
	ChevronLeft,
	ChevronRight,
	ClipboardCheck,
	Copy,
} from "lucide-svelte";

export type Icon = LucideIcon;

export const Icons = {
	chevronLeft: ChevronLeft,
	chevronRight: ChevronRight,
	page: File,
	media: Image,
	check: Check,
	copy: Copy,
	copyDone: ClipboardCheck,
};
