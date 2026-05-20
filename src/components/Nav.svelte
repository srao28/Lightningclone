<script>
  import { createEventDispatcher } from 'svelte';
  import logo from '../images/logo.png';

  export let currentPage = 'home';

  const dispatch = createEventDispatcher();

  let menuOpen = false;

  function navigate(page) {
    menuOpen = false;
    dispatch('navigate', page);
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<nav>
  <div class="nav-left">
    <img src={logo} alt="Lightningware" class="nav-logo" />
  </div>
  <div class="nav-center">
    <button class:active={currentPage === 'home'} on:click={() => navigate('home')}>Home</button>
    <button class:active={currentPage === 'about'} on:click={() => navigate('about')}>About Us</button>
    <button class:active={currentPage === 'products'} on:click={() => navigate('products')}>Product</button>
    <button>Support</button>
  </div>
  <div class="nav-right">
    <button class="hex-btn">Contact Us</button>
    <button class="hamburger" on:click={toggleMenu} aria-label="Toggle menu">
      <span class="bar" class:open={menuOpen}></span>
      <span class="bar" class:open={menuOpen}></span>
      <span class="bar" class:open={menuOpen}></span>
    </button>
  </div>
</nav>

{#if menuOpen}
  <div class="mobile-overlay" role="button" tabindex="-1" on:click={closeMenu} on:keydown={closeMenu}></div>
{/if}
<div class="mobile-menu" class:mobile-menu--open={menuOpen}>
  <button on:click={() => navigate('home')}>Home</button>
  <button on:click={() => navigate('about')}>About Us</button>
  <button on:click={() => navigate('products')}>Product</button>
  <button on:click={closeMenu}>Support</button>
</div>

<style>
  @import '../styles/shared.css';

  nav {
    position: fixed;
    top: 2.5%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 2rem;
    height: 5rem;
    background: #001f7f;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    clip-path: polygon(4% 0%, 96% 0%, 100% 50%, 96% 100%, 4% 100%, 0% 50%);
  }

  .nav-left {
    position: absolute;
    left: calc(4% + 10px);
    display: flex;
    align-items: stretch;
    height: 100%;
    padding: 0;
  }

  .nav-logo {
    height: auto;
    width: auto;
    display: block;
  }

  .nav-center {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .nav-right {
    position: absolute;
    right: calc(4% + 10px);
  }

  .nav-right .hex-btn {
    font-size: 0.9rem;
    font-weight: 400;
    width: 15vb;
    padding: 0.6rem 0.65rem;
  }

  nav button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: #fcfcfc;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.55rem 1.4rem;
    cursor: pointer;
    letter-spacing: 0.03em;
    white-space: nowrap;
  }

  nav button:hover {
    background: transparent;
    color: #facc15;
    text-decoration: underline;
  }

  nav button.active {
    color: #facc15;
    text-decoration: underline;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 200;
  }

  .bar {
    display: block;
    width: 22px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;
  }

  .bar:nth-child(1).open { transform: translateY(7px) rotate(45deg); }
  .bar:nth-child(2).open { opacity: 0; }
  .bar:nth-child(3).open { transform: translateY(-7px) rotate(-45deg); }

  .mobile-menu {
    display: none;
    position: fixed;
    top: 72px;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    background: #001f7f;
    z-index: 99;
    flex-direction: column;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.6s ease, opacity 0.5s ease;
  }

  .mobile-menu button {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    letter-spacing: 0.03em;
    transition: color 0.2s;
  }

  .mobile-menu button:hover {
    color: #facc15;
    text-decoration: underline;
  }

  .mobile-menu--open {
    max-height: 400px;
    opacity: 1;
  }

  .mobile-overlay {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 98;
  }

  @media (max-width: 768px) {
    nav {
      padding: 0 1rem;
      justify-content: space-between;
    }

    .nav-left {
      position: static;
    }

    .nav-center {
      gap: 0;
    }

    .nav-center button {
      font-size: 0.7rem;
      padding: 0.4rem 0.5rem;
      letter-spacing: 0;
    }

    .nav-right {
      position: static;
    }

    .nav-right .hex-btn {
      font-size: 0.5rem;
      padding: 0.75rem 0.75rem;
    }
  }

  @media (max-width: 480px) {
    .nav-center {
      display: none;
    }

    .nav-right {
      margin-left: auto;
    }

    .nav-right .hex-btn {
      display: none;
    }

    .nav-right .hamburger {
      display: flex;
    }

    .mobile-menu {
      display: flex;
      top: 90px;
    }

    .mobile-overlay {
      display: block;
    }
  }

  @media (max-width: 425px) {
    nav {
      width: 95%;
      top: 1%;
    }

    .nav-right .hamburger {
      display: flex;
    }

    .nav-right .hex-btn {
      display: none;
    }

    .mobile-menu {
      display: flex;
    }

    .mobile-overlay {
      display: block;
    }
  }
</style>
