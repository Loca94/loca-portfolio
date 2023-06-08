<script>
  import "../styles/global.css";
  import { dev } from "$app/environment";
  import SiteHeader from "$components/site/nav/SiteHeader.svelte";
  import SiteFooter from "$components/site/SiteFooter.svelte";
  import TailwindIndicator from "$components/site/TailwindIndicator.svelte";
</script>

<div class="relative min-h-screen">
  <SiteHeader />
  <slot />
  <SiteFooter />

  {#if dev}
    <TailwindIndicator />
  {/if}
</div>