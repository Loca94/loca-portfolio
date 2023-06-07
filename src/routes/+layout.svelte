<script>
  import "../styles/global.css";
  import { dev } from "$app/environment";
  import SiteHeader from "$components/SiteHeader.svelte";
  import SiteFooter from "$components/SiteFooter.svelte";
  import TailwindIndicator from "$components/TailwindIndicator.svelte";
</script>

<div class="relative min-h-screen">
  <SiteHeader />
  <slot />
  <SiteFooter />

  {#if dev}
    <TailwindIndicator />
  {/if}
</div>