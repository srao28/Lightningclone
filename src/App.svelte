<script>
  import { onMount, onDestroy, tick } from 'svelte';
  import logo from './images/logo.png';
  import thundrPhone from './images/thundr-phone.png';
  import goldCircle from './images/gold-circle.png';
  import gifVR from './images/virtual-reality.gif';
  import gifLove from './images/love.gif';
  import gifAnim from './images/3d-animation.gif';
  import AboutUs from './AboutUs.svelte';

  let vantaEl;
  let vantaEffect;
  let menuOpen = false;
  let productsOpen = false;
  let currentPage = 'home';

  async function navigate(page) {
    if (page !== 'home' && vantaEffect) {
      vantaEffect.destroy();
      vantaEffect = null;
    }
    currentPage = page;
    menuOpen = false;
    window.scrollTo(0, 0);
    if (page === 'home') {
      await tick();
      await new Promise(r => requestAnimationFrame(r));
      initVanta();
    }
  }

  async function initVanta() {
    if (!vantaEl || vantaEffect) return;
    const THREE = await import('three');
    vantaEffect = window.VANTA.GLOBE({
      el: vantaEl,
      THREE,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: 0xfde047,
      color2: 0xfacc15,
      backgroundColor: 0x030d22,
      size: 1.2,
      maxDistance: 1,
      points: 0,
    });
    if (vantaEffect?.camera) {
      vantaEffect.camera.position.set(0, 15, 170);
      const _onUpdate = vantaEffect.onUpdate.bind(vantaEffect);
      vantaEffect.onUpdate = function() {
        const r = _onUpdate.call(this);
        this.camera.lookAt(0, 15, 0);
        if (this.linesMesh2 && this.linesMesh3) {
          this.linesMesh2.rotation.copy(this.linesMesh3.rotation);
        }
        return r;
      };
    }
    if (vantaEffect?.cont2) {
      vantaEffect.cont2.rotation.x = -40 * (Math.PI / 180);
    }
    if (vantaEffect?.linesMesh2) {
      vantaEffect.linesMesh2.scale.setScalar(1.6);
    }
    if (vantaEffect?.linesMesh3) {
      vantaEffect.linesMesh3.scale.setScalar(1.6);
    }
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  function toggleProducts() {
    productsOpen = !productsOpen;
  }

  onMount(() => {
    initVanta();
  });

  onDestroy(() => {
    if (vantaEffect) vantaEffect.destroy();
  });
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

{#if currentPage === 'about'}
  <AboutUs on:navigate={(e) => navigate(e.detail)} />
{:else}

<!-- Landing: full-screen intro with animated globe and primary tagline -->
<section class="black landing">
  <div class="globesec">
    <div class="landing-inner">
      <div class="content">
        <h1><span class="h1-line">Innovating the <span class="yellow">Future</span></span><span class="h1-line">of Social Technology</span></h1>
        <p>Lightningware is a next-generation software publisher creating social technology that redefines how people connect. We develop groundbreaking applications, designed to spark real conversations and foster meaningful interactions.</p>
        <div class="hex-ghost-wrap">
          <button class="hex-ghost-btn">Contact Us</button>
        </div>
      </div>
    </div>
    <div class="vanta-globe" bind:this={vantaEl}></div>
  </div>
</section>

<!-- Mission: who we are and what makes us different from an agency -->
<section class="blue mission">
  <div class="mission-content">
    <span class="eyebrow">What we do</span>
    <h1>About <span class="yellow">Lightningware</span></h1>
    <p>We're not an agency. We don't build software for clients. We create and launch our own products, shaping the future of digital interactions.</p>
    <p>With a commitment to innovation, we develop proprietary technologies, file patents, and push the boundaries of what's possible.</p>
    <button class="hex-btn">Why We Do It</button>
  </div>
</section>

<!-- Product spotlight: Thundr stats, description, and product dropdown -->
<section class="black product">
  <div class="product-inner">
    <div class="product-text">
      <span class="eyebrow">Thundr</span>
      <h1 class="product-h1"><span class="h1-line">A human search engine</span><span class="h1-line">for real <span class="yellow">connections.</span></span></h1>
      <p class="product-desc">Thundr is a revolutionary social platform that allows users to meet and talk to new people worldwide. With AI-powered moderation and a seamless user experience, Thundr makes conversations effortless, safe, and engaging.</p>

      <div class="product-stats">
        <div class="stat">
          <span class="stat-num">8 M+</span>
          <span class="stat-label">Monthly Visits</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num">81 k+</span>
          <span class="stat-label">Daily Visits</span>
        </div>
      </div>
      <div class="products-dropdown">
        <button class="hex-btn hex-btn--sm" on:click={toggleProducts}>
          Our Products <span class="dropdown-arrow" class:open={productsOpen}>▾</span>
        </button>
        {#if productsOpen}
          <ul class="products-list">
            <li>Thundr</li>
            <li class="coming-soon">Dating App <span class="badge">Soon</span></li>
            <li class="coming-soon">AI Platform <span class="badge">Soon</span></li>
          </ul>
        {/if}
      </div>
    </div>
    <img src={thundrPhone} alt="Thundr app on phone" class="product-phone" />
  </div>
</section>

<section class="black roadmap">
  
    <div class="roadmap-content">
     <div class="roadmap-top-boxes">
        <div class="box-unit">
          <div class="gif-box"><img src={gifVR} alt="Virtual Reality" class="gif-images" /></div>
          <div class="text-box">
            <span class="box-title">AI</span>
            <p class="box-desc">Revolutionizing digital interaction with immersive technologies like AI</p>
          </div>
        </div>
      </div>
        <img src={goldCircle} alt="" class="roadmap-circle" aria-hidden="true" />
      <div class="roadmap-text">
        <p>We're just getting started. Our roadmap includes bold ventures into <span class="yellow">social entertainment.</span></p>
      </div>
      <div class="roadmap-bottom-boxes">
        <div class="box-unit">
          <div class="gif-box"><img src={gifLove} alt="Dating" class="gif-images" /></div>
          <div class="text-box">
            <span class="box-title">Dating</span>
            <p class="box-desc">Redefining modern romance through innovative dating initiatives</p>
          </div>
        </div>
        <div class="box-unit">
          <div class="gif-box"><img src={gifAnim} alt="And more" class="gif-images" /></div>
          <div class="text-box">
            <span class="box-title">And more</span>
            <p class="box-desc">And more innovative solutions are on the horizon, reshaping the future of connections</p>
          </div>
        </div>
      </div>
      
    </div>
    <div class="roadmap-cta">
            <p>Want to <span class="yellow">collaborate</span>? Let's talk.</p>
            <button class="hex-btn">Contact Us</button>
          </div>
</section>

{/if}

<section class="blue site-footer">
  <div class="footer-inner">
    <div class="footer-top">
      
      <div class="footer-tagline">
        <img src={logo} alt="Lightningware" class="footer-logo" />
        <p>Driving innovation in social and entertainment technology to create meaningful digital experiences</p>
      </div>
      <div class="footer-links-row">
        <div class="footer-links">
          <span class="footer-links-heading">Quick Links</span>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
        <div class="footer-links">
          <span class="footer-links-heading">Legal</span>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="footer-hr" />
    <div class="footer-bottom">
      <span class="footer-copy">@ lightningware 2025</span>
      <div class="footer-socials">
        <button class="hex-btn hex-btn--social">Instagram</button>
        <button class="hex-btn hex-btn--social">TikTok</button>
        <button class="hex-btn hex-btn--social">X</button>
        <button class="hex-btn hex-btn--social">Discord</button>
        <button class="hex-btn hex-btn--social">Reddit</button>
      </div>
    </div>
  </div>
</section>

<style>
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

  /* Hexagon shape via flat-top clip-path */
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
    
    /* transition: background 0.15s; */
    white-space: nowrap;
  }

  nav button:hover {
    background: transparent;
    color: #facc15;

    text-decoration: underline;
  }

  /* Hamburger — hidden by default, shown only on mobile */
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

  /* Mobile dropdown */
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

  /* nav button.contact {
    background: #fff;
    color: #1d4ed8;
    font-weight: 700;
  }

  nav button.contact:hover {
    background: rgba(255, 255, 255, 0.85);
  } */

  :global(html, body) {
    margin: 0;
    padding: 0;
    background: #030d22;
  }

  :global(*, *::before, *::after) {
    font-family: 'Exo 2', sans-serif;
    box-sizing: border-box;
  }

  section {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    section.landing {
      height: auto;
      min-height: 100vh;
      overflow: visible;
    }
  }

  section.black {
    background: #030d22;
    color: #fff;
    display: flex;
    flex-direction: column;
  }

  section.blue {
    background: #001f7f;
    color: #fff;
    width: 100%;
    height: 50vh;
    border-radius: 24px 24px 0 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .roadmap {
    position: relative;
    overflow: visible;
    height: auto;
    min-height: 100vh;
  }

  

  
  .roadmap-content {
    
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
  }

  .roadmap-circle {
    padding: 4rem 2rem;
    position: absolute;
    inset: 4;
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 20%;
    z-index: 0;
    
  }

  .roadmap-top-boxes {
    position: relative;
    z-index: 1;
    width: 100%;
    margin-top: -6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
  }

  .roadmap-bottom-boxes {
    
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  .box-unit {
    position: relative;
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .gif-box {
    position: relative;
    z-index: 2;
    width: 200px;
    height: 100px;
    background: #030d22;
    border: 1.5px solid #1a358c;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: -2rem;
  }

  .gif-images {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  .text-box {
    position: relative;
    z-index: 1;
    width: 325px;
    height: 200px;
    background: rgba(3, 13, 34, 0.85);
    border: 1.5px solid #1a358c;
    border-radius: 8px;
    padding: 1.75rem 1.25rem 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .box-title {
    margin-top: 1rem;
    font-size: 20px;
    font-weight: 700;
    color: #facc15;
    letter-spacing: 0.05em;
  }

  .box-desc {
    font-size: 18px;
    height: 81px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.65);
    margin: 0;
    padding:  5px;
  }

  .roadmap-text {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 590px;
    padding: 0 2rem;
  }

  .roadmap-text p {
    font-size: 36px;
    font-weight: 300;
    line-height: 1.35;
    color: #fff;
    margin: 0;
    letter-spacing: -0.03em;
  }

  .roadmap-cta {
    position: relative;
    z-index: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 5rem;
  }

  .roadmap-cta p {
    font-size: 36px;
    font-weight: 300;
    line-height: 1.35;
    color: #fff;
    margin: 0;
    letter-spacing: -0.03em;
  }

  @media (max-width: 430px) {
    .roadmap {
      height: auto;
      min-height: 100vh;
      overflow: visible;
      align-items: flex-start;
    }

    .roadmap-content {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 2rem 1.25rem;
      gap: 1.5rem;
    }

    .roadmap-top-boxes {
      margin-top: 0;
      justify-content: flex-start;
    }

    .roadmap-bottom-boxes {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }

    .roadmap-text {
      text-align: center;
      padding: 0;
    }

    .box-unit {
      width: 100%;
    }

    .text-box {
      width: 100%;
    }
  }

.globesec {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    padding: 6rem 6rem 0;
    gap: 2rem;
  }

  .landing-inner {
    flex: 1;
    min-width: 0;
    z-index: 2;
  }

  .vanta-globe {
    flex-shrink: 0;
    width: min(75vh, 48vw);
    height: min(75vh, 48vw);
    position: relative;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .globesec {
      flex-direction: column;
      justify-content: flex-start;
      padding: 88px 1.5rem 0;
      gap: 1rem;
      overflow-y: auto;
    }

    .landing-inner {
      flex: none;
      width: 100%;
    }

    .vanta-globe {
      width: min(70vw, 70vw);
      height: min(70vw, 70vw);
      flex-shrink: 0;
    }

    .landing .content {
      max-width: 100%;
    }

    .landing h1 {
      font-size: 2.2rem;
    }
  }

  .landing .content {
    text-align: left;
    align-items: flex-start;
    max-width: 560px;
  }

  .landing h1 {
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 300;
    margin: 0 0 1.25rem;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .h1-line {
    display: block;
  }

  .landing p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.65);
    margin: 0;
  } 

  .mission {
    justify-content: center;
    align-items: center;
    height: 70vh;
  }

  .mission-content {
    max-width: 700px;
    text-align: center;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  .eyebrow {
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    color: #facc15;
    margin-bottom: -1.5rem;
  }

  .mission-content h1 {
    font-size: clamp(2rem, 4vw, 3.25rem);
    font-weight: 500;
    margin: 0;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: #fff;
  }

  .yellow {
    color: #facc15;
  }

  .mission-content p {
    font-size: 1.15rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    max-width: 60ch;
  }

  .product {
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .product-inner {
    display: flex;
    align-items: center;
    
    width: 100%;
    max-width: 1100px;
    padding: 0 2rem;
  }

  .product-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .product-h1 {
    font-size: clamp(2.4rem, 4vw, 4.5rem);
    font-weight: 400;
    margin: 0;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: #fff;
  }

  .product-desc {
    font-size: 1rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    max-width: 52ch;
  }

  .product-stats {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 0.5rem;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .stat-num {
    font-size: 5rem;
    font-weight: 300;
    color: #fff;
    letter-spacing: -0.02em;
  }

  .stat-label {
    font-size: 1 rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }

  .stat-divider {
    width: 1px;
    height: 3rem;
    background: #facc15;
  }

  .product-phone {
    height: 680px;
    width: auto;
    flex-shrink: 0;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    .product {
      height: auto;
      min-height: 100vh;
      padding: 5rem 0 3rem;
    }

    .product-inner {
      flex-direction: column-reverse;
      gap: 2rem;
      padding: 0 1.5rem;
    }

    .product-phone {
      height: auto;
      width: 80%;
      max-width: 320px;
    }

    .product-text {
      width: 100%;
    }
  }

  .hex-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #facc15;
    color: #000;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    padding: 1.5rem 1.25rem;
    cursor: pointer;
    letter-spacing: 0.04em;
    clip-path: polygon(12% 0%, 88% 0%, 100% 50%, 88% 100%, 12% 100%, 0% 50%);
    transition: background 0.15s, transform 0.15s;
    white-space: nowrap;
    margin-top: 0.5rem;
  }

  .hex-btn:hover {
    background: #facc15;
    transform: scale(1.04);
  }

  .hex-ghost-wrap {
    display: inline-flex;
    background: #facc15;
    clip-path: polygon(12% 0%, 88% 0%, 100% 50%, 88% 100%, 12% 100%, 0% 50%);
    padding: 2px;
    margin-top: 0.5rem;
    transition: transform 0.15s;
  }

  .hex-ghost-wrap:hover {
    transform: scale(1.04);
  }

  .hex-ghost-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #030d22;
    color: #facc15;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    padding: 1rem 1.5rem;
    cursor: pointer;
    letter-spacing: 0.04em;
    white-space: nowrap;
    clip-path: polygon(13% 0%, 87% 0%, 99% 50%, 87% 100%, 13% 100%, 1% 50%);
  }

  .hex-btn--sm {
    width: auto;
    padding: 1.5rem 2rem;
  }

  .products-dropdown {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .dropdown-arrow {
    margin-left: 0.4rem;
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .dropdown-arrow.open {
    transform: rotate(180deg);
  }

  .products-list {
    list-style: none;
    margin: 0.5rem 0 0;
    padding: 0.5rem 0;
    background: #0d1f4a;
    border: 1.5px solid #1a358c;
    border-radius: 8px;
    min-width: 180px;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
  }

  .products-list li {
    padding: 0.65rem 1.25rem;
    font-size: 0.95rem;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: background 0.15s, color 0.15s;
  }

  .products-list li:hover {
    background: rgba(250, 204, 21, 0.1);
    color: #facc15;
  }

  .coming-soon {
    color: rgba(255, 255, 255, 0.45) !important;
    cursor: default !important;
  }

  .coming-soon:hover {
    background: transparent !important;
    color: rgba(255, 255, 255, 0.45) !important;
  }

  .badge {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #facc15;
    background: rgba(250, 204, 21, 0.15);
    border: 1px solid rgba(250, 204, 21, 0.4);
    border-radius: 4px;
    padding: 0.1rem 0.35rem;
  }

  .hex-btn--social {
    height: 32px;
    width: 32px;
    padding: 0.5rem 0.55rem;
    margin-top: 0;
  }

  .site-footer {
    height: auto;
    min-height: unset;
    align-items: flex-start;
    justify-content: center;
    padding: 60px;
  }

  .footer-inner {
    width: 100%;
    max-width: 1100px;
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4rem;
  }
  .footer-logo {
    height: 50px;
    width: auto;
    margin-bottom: 1rem;
  }

  .footer-tagline {
    flex: 1;
  }

  .footer-tagline p {
    font-size: 1 rem;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    margin: 0;
    max-width: 40ch;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer-links-heading {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #facc15;
  }

  .footer-links ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-links li {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: color 0.15s;
  }

  .footer-links li:hover {
    color: #fff;
  }

  .footer-hr {
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    margin: 0;
  }

  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-copy {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.45);
  }

  .footer-socials {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    .site-footer {
      padding: 5rem 0 2rem;
    }

    .footer-inner {
      padding: 0 1.5rem;
      gap: 2rem;
    }

    .footer-top {
      flex-direction: column;
      gap: 2rem;
    }

    .footer-links-row {
      display: inline-flex;
      gap: 3rem;
    }

    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
    }

    .footer-socials {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 0.75rem;
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
