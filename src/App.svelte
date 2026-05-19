<script>
  import { onMount, onDestroy } from 'svelte';
  import logo from './logo_t.png';
  import thundrPhone from './thundr-phone.png';

  let vantaEl;
  let vantaEffect;

  onMount(async () => {
    const THREE = await import('three');
    const VANTA = window.VANTA.GLOBE;
    vantaEffect = VANTA({
      el: vantaEl,
      THREE,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 10,
      color: 0xfde047,
      color2: 0xfacc15,
      backgroundColor: 0x0d1b4b,
      size: 1,
      maxDistance: 1,
      points: 0,
      
    });

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
    <button>Home</button>
    <button>About Us</button>
    <button>Product</button>
    <button>Support</button>
  </div>
  <div class="nav-right">
    <button class="hex-btn">Contact Us</button>
  </div>
</nav>

<section class="black hero">
  <div class="vanta-globe" bind:this={vantaEl}></div>
  <div class="hero-inner">
    <div class="content">
      <h1>Innovating the Future of<br>Social Technology</h1>
      <p>Lightningware is a next-generation software publisher creating social technology that redefines how people connect. We develop groundbreaking applications, designed to spark real conversations and foster meaningful interactions.</p>
      <button class="hex-btn">Contact Us</button>
    </div>
    <div class="content">

    </div>
  </div>
</section>

<section class="blue about">
  <div class="about-content">
    <span class="eyebrow">What we do</span>
    <h1>About <span class="yellow">Lightningware</span></h1>
    <p>We're not an agency. We don't build software for clients. We create and launch our own products, shaping the future of digital interactions.</p>
    <p>With a commitment to innovation, we develop proprietary technologies, file patents, and push the boundaries of what's possible.</p>
    <button class="hex-btn">Why We Do It</button>
  </div>
</section>

<section class="black thundr">
  <div class="thundr-inner">
    <div class="thundr-text">
      <p class="thundr-title">Thundr</p>
      <p class="thundr-sub">A human search engine for real connections.</p>
      <p class="thundr-desc">Thundr is a revolutionary social platform that allows users to meet and talk to new people worldwide. With AI-powered moderation and a seamless user experience, Thundr makes conversations effortless, safe, and engaging.</p>
      
      <div class="thundr-stats">
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
      <button class="hex-btn hex-btn--sm">Our Products</button>
    </div>
    <img src={thundrPhone} alt="Thundr app on phone" class="thundr-phone" />
  </div>
</section>

<section class="blue">
  <div class="content">
    <h2>Section Four</h2>
  </div>
</section>

<section class="black footer-section">
  <div class="footer-inner">
    <div class="footer-top">
      
      <div class="footer-tagline">
        <img src={logo} alt="Lightningware" class="footer-logo" />
        <p>Driving innovation in social and entertainment technology to create meaningful digital experiences</p>
      </div>
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
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    height: 64px;
    background: transparent;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .nav-left {
    position: absolute;
    left: 2rem;
    display: flex;
    align-items: center;
  }

  .nav-logo {
    height: 36px;
    width: auto;
  }

  .nav-center {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .nav-right {
    position: absolute;
    right: 2rem;
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

  /* nav button.contact {
    background: #fff;
    color: #1d4ed8;
    font-weight: 700;
  }

  nav button.contact:hover {
    background: rgba(255, 255, 255, 0.85);
  } */

  section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section.black {
    background: #0d1b4b;
    color: #fff;
  }

  section.blue {
    background: #002366;
    color: #fff;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

h2 {
    font-size: 3rem;
    margin: 0;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .hero {
    position: relative;
    justify-content: center;
    align-items: center;
    overflow: visible;
    height: 80vh;
    width: 80vw;
    
  }

  .vanta-globe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .hero-inner {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
  }

  .hero .content {
    text-align: left;
    align-items: flex-start;
    max-width: 560px;
  }

  .hero h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin: 0 0 1.5rem;
    line-height: 1.15;
    letter-spacing: -0.03em;
  }

  .hero p {
    font-size: 1.15rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }

  .about {
    justify-content: center;
    align-items: center;
    height: 60vh;
  }

  .about-content {
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
    font-weight: 600;
    letter-spacing: 0.15em;
  
    color: #fde047
  }

  .about-content h1 {
    font-size: clamp(2rem, 4vw, 3.25rem);
    font-weight: 800;
    margin: 0;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: #fff;
  }

  .yellow {
    color: #facc15;
  }

  .about-content p {
    font-size: 1.15rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    max-width: 60ch;
  }

  .thundr {
    justify-content: center;
    align-items: center;
  }

  .thundr-inner {
    display: flex;
    align-items: center;
    gap: 4rem;
    width: 100%;
    max-width: 1100px;
    padding: 0 4rem;
  }

  .thundr-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .thundr-title {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 900;
    margin: 0;
    letter-spacing: -0.03em;
    color: #fff;
  }

  .thundr-sub {
    font-size: 1.2rem;
    font-weight: 500;
    color: #facc15;
    margin: 0;
  }

  .thundr-desc {
    font-size: 1rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    max-width: 52ch;
  }

  .thundr-stats {
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
    font-size: 2rem;
    font-weight: 400;
    color: #fff;
    letter-spacing: -0.02em;
  }

  .stat-label {
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }

  .stat-divider {
    width: 1px;
    height: 3rem;
    background: rgba(255, 255, 255, 0.2);
  }

  .thundr-phone {
    height: 680px;
    width: auto;
    flex-shrink: 0;
    object-fit: contain;
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
    padding: 1rem 1.25rem;
    cursor: pointer;
    letter-spacing: 0.04em;
    clip-path: polygon(12% 0%, 88% 0%, 100% 50%, 88% 100%, 12% 100%, 0% 50%);
    transition: background 0.15s, transform 0.15s;
    white-space: nowrap;
    margin-top: 0.5rem;
  }

  .hex-btn:hover {
    background: #fde047;
    transform: scale(1.04);
  }

  .hex-btn--sm {
    width: 50%;
  }

  .hex-btn--social {
    height: 32px;
    width: 32px;
    padding: 0.5rem 0.55rem;
    margin-top: 0;
  }

  .footer-section {
    height: auto;
    min-height: 100vh;
    align-items: flex-start;
    justify-content: center;
    padding: 6rem 0 3rem;
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
</style>
