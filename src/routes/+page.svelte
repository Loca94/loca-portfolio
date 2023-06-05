<script lang="ts">
  import { animate } from "motion";
  import { onMount } from "svelte";


  onMount(() => {
    // Animate element
    setTimeout(() => {
      animate("#welcome-text", { opacity: 0 }, { easing: "ease-out" });
    }, 2000)
  })
</script>

<div class="h-screen w-screen flex flex-col justify-center items-center text-xl">
  <h1 id="welcome-text" class="text-zinc-100">Welcome to My Portfolio!</h1>
</div>
