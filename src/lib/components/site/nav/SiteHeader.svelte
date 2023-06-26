<script lang="ts">
	import { page } from "$app/stores";
  import ThemeSwitcher from "$components/site/nav/ThemeSwitcher.svelte";
  import PageWrapper from "$components/site/PageWrapper.svelte";
  import { Icons } from "$components/site/icons";
  import { Button } from "$components/ui/button";

  let showMobileMenu: boolean = false;

  // Active page links
  let homePageActive: boolean = false;
  let projectsPageActive: boolean = false;
  let readmePageActive: boolean = false;
  let dessertPageActive: boolean = false;

  $: handlePageChange($page.url.pathname);

  function handlePageChange(pathname: string): void {
    setActiveLink(pathname);
    closeMobileMenu();
  }

  function setActiveLink(pathname: string): void {
    projectsPageActive = pathname.includes('projects');
    readmePageActive = pathname.includes('readme');
    dessertPageActive = pathname.includes('dessert');
    homePageActive = !projectsPageActive && !readmePageActive && !dessertPageActive;
  }

  function closeMobileMenu() {
    showMobileMenu = false;
  }

  function handleMobileMenuVisibility() {
    showMobileMenu = !showMobileMenu;
  }
</script>


<header>
  <PageWrapper>
    <nav class="flex items-center justify-between" aria-label="Global">
      <div class="flex lg:flex-1">
        <Button href="/" variant="link" class="-m-1.5 p-1.5">
          <img class="h-8 w-auto" src="/img/logos/logo.svg" alt="Davide Locatelli Logo">
        </Button>
      </div>
      <div class="flex lg:hidden">
        <Button on:click={handleMobileMenuVisibility} type="button" variant="ghost">
          <span class="sr-only">Open main menu</span>
          <Icons.menu class="h-5 w-5" />
        </Button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <Button href="/projects" variant="link" class="text-base tracking-wide {projectsPageActive ? 'dark:text-white' : ''}">Projects</Button>
        <Button href="/readme" variant="link" class="text-base tracking-wide {readmePageActive ? 'dark:text-white' : ''}">Readme.md</Button>
        <Button href="/dessert" variant="link" class="text-base tracking-wide {dessertPageActive ? 'dark:text-white' : ''}">Dessert</Button>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <ThemeSwitcher />
      </div>
    </nav>
  </PageWrapper>
  <!-- TODO: Slide in view with Motion One - Mobile menu. -->
  {#if showMobileMenu}
  <div class="lg:hidden" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 sm:border-l sm:border-border">
      <div class="flex items-center justify-between">
        <Button href="/" variant="link" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="/img/logos/logo.svg" alt="Davide Locatelli Logo">
        </Button>
        <Button on:click={handleMobileMenuVisibility} type="button" variant="ghost">
          <span class="sr-only">Close menu</span>
          <Icons.X class="h-5 w-5" />
        </Button>
      </div>
      <div class="mt-6 flow-root -my-6">
        <div class="space-y-2 py-6">
          <Button href="/projects" variant="link" class="-mx-3 block px-3 py-2 text-base font-semibold leading-7">Projects</Button>
          <Button href="/readme" variant="link" class="-mx-3 block px-3 py-2 text-base font-semibold leading-7">Readme.md</Button>
          <Button href="/dessert" variant="link" class="-mx-3 block px-3 py-2 text-base font-semibold leading-7">Dessert</Button>
        </div>
      </div>
    </div>
  </div>
  {/if}
</header>