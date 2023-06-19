<script lang="ts">
  import ThemeSwitcher from "$components/site/nav/ThemeSwitcher.svelte";
  import PageWrapper from "$components/site/PageWrapper.svelte";
  import { Icons } from "$components/site/icons";
  import { Button } from "$components/ui/button";
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
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-indigo-300">
          <span class="sr-only">Open main menu</span>
          <Icons.menu class="h-5 w-5" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <Button href="/projects" variant="link" class="text-base tracking-wide">Projects</Button>
        <Button href="/readme" variant="link" class="text-base tracking-wide">Readme.md</Button>
        <Button href="/dessert" variant="link" class="text-base tracking-wide">Dessert</Button>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <ThemeSwitcher />
      </div>
    </nav>
  </PageWrapper>
  <!-- TODO: Slide in view with Motion One - Mobile menu. -->
  <div id="mobile" class="lg:hidden" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
        </a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
          </div>
          <div class="py-6">
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>