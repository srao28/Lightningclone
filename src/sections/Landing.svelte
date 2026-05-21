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
    justify-content: flex-start;
    padding: 0 0 0 6rem;
    gap: 0;
    width: 100%;
    overflow: hidden;
  }

  .landing-inner {
    flex: 0 0 auto;
    min-width: 0;
    z-index: 2;
  }

  .vanta-globe {
    flex: 0 0 auto;
    width: min(80vh, 46vw);
    height: min(80vh, 46vw);
    position: relative;
    margin-left: auto;
    margin-right: -6vw;
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
    max-width: 680px;
  }

  .landing h1 {
    font-size: clamp(3rem, 4vw, 6rem);
    font-weight: 400;
    margin: 0 0 1.25rem;
    line-height: 1.1;
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
    max-width: 480px;
  }

  .social-proof {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }

  .avatars {
    display: flex;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #030d22;
    background: linear-gradient(135deg, #4a5568, #718096);
    margin-left: -10px;
  }

  .avatar:first-child {
    margin-left: 0;
    background: linear-gradient(135deg, #6b7280, #9ca3af);
  }

  .avatar:nth-child(2) {
    background: linear-gradient(135deg, #d4a574, #c49060);
  }

  .avatar:nth-child(3) {
    background: linear-gradient(135deg, #374151, #4b5563);
  }

  .social-label {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
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
      width: min(80vw, 80vw);
      height: min(80vw, 80vw);
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
