<script lang="ts">
  import { onMount } from "svelte";
  import { Icons } from "$components/site/icons";
  import { Button } from "$components/ui/button";

  onMount(() => {
    // currentTheme.set(localStorage.theme || (document.documentElement.classList.contains('dark') ? 'dark' : 'light'));
  })

  function changeTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }
</script>

<Button variant="link" on:click={changeTheme}>
  <Icons.moon />
</Button>