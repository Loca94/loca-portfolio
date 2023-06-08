<script lang="ts">
  import { onMount } from "svelte";
  import { Icons } from "./icons";
  import { Button } from "./ui/button";

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

<Button variant="ghost">
  <Icons.moon />
</Button>