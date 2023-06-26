import { cva } from "class-variance-authority";

export { default as Button } from "./Button.svelte";

export const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/90",
				primary:
					"bg-btn-primary-bg text-btn-primary-text hover:bg-btn-primary-bg/80 dark:border dark:border-btn-primary-border/80",
				destructive:
					"bg-btn-destructive-bg text-btn-destructive-text hover:bg-btn-destructive-bg/80 dark:border dark:border-btn-destructive-border/80",
				outline:
					"border border-input dark:border-neutral-800 hover:bg-secondary-light/10 hover:text-emerald-500 dark:hover:border-secondary-light/90",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary text-primary-light hover:text-primary",
			},
			size: {
				default: "h-10 py-2 px-4",
				sm: "h-9 px-3 rounded-md",
				lg: "h-11 px-8 rounded-md"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);
