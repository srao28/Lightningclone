<script>
  import aboutMockup from '../../images/about-us-mockup.webp';
</script>

<section class="about-split">
  <img src={aboutMockup} alt="Lightningware app on phone" class="about-img" />
  <div class="about-text">
    <p class="eyebrow">What we do</p>
    <h2>About <span class="yellow">Lightningware</span></h2>
    <p>We're not an agency. We don't build software for clients. We create and launch our own products, shaping the future of digital interactions.</p>
    <p>With a commitment to innovation, we develop proprietary technologies, file patents, and push the boundaries of what's possible.</p>
  </div>
</section>

<style>
  @import '../../styles/shared.css';

  .about-split {
    width: 100%;
    height: auto;
    min-height: unset;
    background: #030d22;
    display: flex;
    align-items: center;
    gap: 0rem;
    padding: 4rem 4rem;
    overflow: visible;
    position: relative;
    z-index: 1;
  }

  .about-img {
    width: 750px;
    height: 800px;
    flex-shrink: 0;
    object-fit: contain;
    object-position: center;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 850px;
  }


  .about-text h2 {
    font-size: clamp(2rem, 3.5vw, 3.25rem);
    font-weight: 500;
    color: #fff;
    margin: 0;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .about-text p {
    font-size: 1.05rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  .about-text .eyebrow {
    color: #facc15;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  @media (max-width: 430px) {
    .about-split {
      flex-direction: column;
      padding: 2rem 1.25rem 0;
      gap: 0;
      overflow: hidden;
      position: relative;
    }

    .about-text {
      max-width: 100%;
      position: relative;
      z-index: 2;
      background: rgba(3, 13, 34, 0.75);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: -60px;
    }

    .about-img {
      position: relative;
      z-index: 1;
      width: 100%;
      height: auto;
      max-height: 380px;
      object-fit: contain;
      object-position: bottom;
    }
  }
</style>
