<script>
  import Landing from '../sections/Landing.svelte';
  import Mission from '../sections/Mission.svelte';
  import Product from '../sections/Product.svelte';
  import Roadmap from '../sections/Roadmap.svelte';
</script>

<Product />

<section class="black roadmap-cta-section">
  <div class="roadmap-cta">
    <p>Want to <span class="yellow">collaborate</span>? Let's talk.</p>
    <button class="hex-btn">Contact Us</button>
  </div>
</section>

<style>
  @import '../styles/shared.css';

  .roadmap-cta-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 30vh;
  }

  .roadmap-cta {
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
</style>