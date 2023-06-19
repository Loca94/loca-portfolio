<script lang="ts">
	import type { SvelteComponentTyped } from "svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
	// eslint-disable-next-line no-undef, @typescript-eslint/no-explicit-any
	type Component = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as Component;
	$: doc = data.metadata;
</script>

<div class="mdsvex max-w-prose mx-auto lg:font-lg" id="mdsvex">
	<svelte:component this={component} />
</div>