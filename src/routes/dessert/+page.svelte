<script lang="ts">
  import PageWrapper from "$components/site/PageWrapper.svelte";
  import { Button } from "$components/ui/button";
</script>

<PageWrapper>
  Siamo nella pagina `dessert`

  <div class="mt-16">
    <h2>Buttons Layout</h2>
    <div class="mt-4 flex space-x-6 w-fit">
      <Button variant="default">default</Button>
      <Button variant="primary">primary</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
    </div>
  </div>
</PageWrapper>