<script>
  import thundrPhone from '../images/thundr-phone.png';

  export let description = "Thundr is a revolutionary social platform that allows users to meet and talk to new people worldwide. With AI-powered moderation and a seamless user experience, Thundr makes conversations effortless, safe, and engaging.";

  let productsOpen = false;

  function toggleProducts() {
    productsOpen = !productsOpen;
  }
</script>

<!-- Product spotlight: Thundr stats, description, and product dropdown -->
<section class="black product">
  <div class="product-inner">
    <div class="product-text">
      <span class="eyebrow">Thundr</span>
      <h1 class="product-h1"><span class="h1-line">A human search engine</span><span class="h1-line">for real <span class="yellow">connections.</span></span></h1>
      <p class="product-desc">{description}</p>

      <div class="product-stats">
        <div class="stat">
          <span class="stat-num">8 M+</span>
          <span class="stat-label">Monthly visits</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num">81 k+</span>
          <span class="stat-label">Daily visits</span>
        </div>
      </div>
      <div class="products-dropdown">
        <button class="hex-btn hex-btn--sm" on:click={toggleProducts}>
          Visit Thundr <span class="dropdown-arrow" class:open={productsOpen}>▾</span>
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

<style>
  @import '../styles/shared.css';

  .product {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: auto;
    overflow: visible;
  }

  .product-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 4rem;
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

  .h1-line {
    display: block;
  }

  .product-desc {
    font-size: 1rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    max-width: 68ch;
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
    font-size: 1rem;
    letter-spacing: 0.03em;
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
</style>
