<script>
  import Landing from '../sections/Landing.svelte';
  import Mission from '../sections/Mission.svelte';
  import Product from '../sections/Product.svelte';
  import Roadmap from '../sections/Roadmap.svelte';
</script>

<Product description="Thundr is an app that lets you meet and talk to new people from anywhere in the world. You can think of it as a &quot;human search engine&quot;: you pick the interests you care about, and Thundr will connect you with someone who likes those same things. It's designed for adults and can be used for making friends, finding someone special, or just having an interesting conversation. To help keep everything safe, Thundr uses artificial intelligence to moderate the platform. This AI looks out for any behavior that might be harmful or inappropriate, so you can feel more comfortable meeting new people. The goal is to offer a welcoming environment where you can talk freely without worrying about who's on the other side. Thundr is simple to use, no matter how tech-savvy you are. All you need to do is log in, pick some interests, and let Thundr find your chat partner. Whether you're there to make friends, search for a specific kind of person, or simply talk about the things you love, Thundr makes it easy to connect." />

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