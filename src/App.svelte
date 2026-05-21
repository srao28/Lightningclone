<script>
  import Nav from './components/Nav.svelte';
  import Footer from './components/Footer.svelte';
  import Home from './pages/Home.svelte';
  import AboutUs from './pages/AboutUs.svelte';
  import Products from './pages/Products.svelte';

  let landingRef;
  let currentPage = 'home';

  function navigate(page) {
    if (page !== 'home') landingRef?.destroyVanta();
    currentPage = page;
    window.scrollTo(0, 0);
  }
</script>

<Nav {currentPage} on:navigate={(e) => navigate(e.detail)} />

{#if currentPage === 'home'}
  <Home bind:landingRef />
{:else if currentPage === 'about'}
  <AboutUs on:navigate={(e) => navigate(e.detail)} />
{:else if currentPage === 'products'}
  <Products />
{/if}

<Footer />

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    background: #030d22;
  }

  :global(*, *::before, *::after) {
    font-family: 'Exo 2', sans-serif;
    box-sizing: border-box;
  }
</style>
