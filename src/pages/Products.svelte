<script>

  import Product from '../sections/Product.svelte';
  
</script>

<section class="Products">
    <Product description="Thundr is an app that lets you meet and talk to new people from anywhere in the world. You can think of it as a &quot;human search engine&quot;: you pick the interests you care about, and Thundr will connect you with someone who likes those same things. It's designed for adults and can be used for making friends, finding someone special, or just having an interesting conversation. To help keep everything safe, Thundr uses artificial intelligence to moderate the platform. This AI looks out for any behavior that might be harmful or inappropriate, so you can feel more comfortable meeting new people. The goal is to offer a welcoming environment where you can talk freely without worrying about who's on the other side. Thundr is simple to use, no matter how tech-savvy you are. All you need to do is log in, pick some interests, and let Thundr find your chat partner. Whether you're there to make friends, search for a specific kind of person, or simply talk about the things you love, Thundr makes it easy to connect." />

    <section class="black roadmap-cta-section">
    <div class="roadmap-cta">
        <p>Want to <span class="yellow">collaborate</span>? Let's talk.</p>
        <button class="hex-btn">Contact Us</button>
    </div>
    </section>
</section>
<style>
  @import '../styles/shared.css';
  .Products {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    width: 100%;
    min-height: 100vh;
    height: auto;
    overflow: visible;
    padding: 7rem 1.5rem 2rem;
  }

  .Products section {
    height: auto;
    min-height: auto;
    overflow: visible;
    width: 100%;
  }

  .Products :global(.product .product-h1) {
    font-size: clamp(2.5rem, 4.5vw, 4.5rem);
    font-weight: 400;
    margin: 0;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: #fff;
  }

  .roadmap-cta-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 30vh;
    height: auto;
    width: 100%;
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
    font-size: 72px;
    font-weight: 300;
    line-height: 1.35;
    color: #fff;
    margin: 0;
    letter-spacing: -0.03em;
  }

 
</style>