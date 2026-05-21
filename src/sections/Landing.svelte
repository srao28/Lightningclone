<script>
  import { onMount, onDestroy } from 'svelte';
  import { initVanta } from '../lib/vanta.js';

  let vantaEl;
  let vantaEffect;

  export function destroyVanta() {
    if (vantaEffect) { vantaEffect.destroy(); vantaEffect = null; }
  }

  onMount(() => {
    initVanta(vantaEl).then(fx => { vantaEffect = fx; });
  });

  onDestroy(() => {
    destroyVanta();
  });
</script>

<section class="black landing">
  <div class="globesec">
    <div class="landing-inner">
      <div class="content">
        <h1><span class="h1-line">Innovating the <span class="yellow">Future</span></span><span class="h1-line">of Social Technology</span></h1>
        <p>Lightningware is a next-generation software publisher creating social technology that redefines how people connect. We develop groundbreaking applications, designed to spark real conversations and foster meaningful interactions.</p>
        <div class="hex-ghost-wrap">
          <button class="hex-ghost-btn">Contact Us</button>
        </div>
        <div class="social-proof">
          <div class="avatars">
            <div class="avatar"></div>
            <div class="avatar"></div>
            <div class="avatar"></div>
          </div>
          <span class="social-label">8M+ Monthly Users</span>
        </div>
      </div>
    </div>
    <div class="vanta-globe" bind:this={vantaEl}></div>
  </div>
</section>

<style>
  @import '../styles/shared.css';

  .globesec {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 6rem 4rem 0;
    gap: 2rem;
    width: 100%;
  }

  .landing-inner {
    flex: 0 0 auto;
    min-width: 0;
    z-index: 2;
  }

  .vanta-globe {
    flex: 1;
    min-width: 0;
    width: min(80vh, 55vw);
    height: min(80vh, 55vw);
    position: relative;
    overflow: hidden;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .landing .content {
    text-align: left;
    align-items: flex-start;
    max-width: 420px;
  }

  .landing h1 {
    font-size: clamp(2rem, 2.8vw, 3.2rem);
    font-weight: 300;
    margin: 0 0 1.25rem;
    line-height: 1.2;
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
</style>
