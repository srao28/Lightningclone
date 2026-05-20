<script>
  import aboutMockup from '../../images/about-us-mockup.webp';
</script>

<section class="about-split">
  <img src={aboutMockup} alt="Lightningware app on phone" class="about-img" />
  <div class="about-text">
    <p class="eyebrow-yellow">What we do</p>
    <h2>About <span class="yellow">Lightningware</span></h2>
    <p>We're not an agency. We don't build software for clients. We create and launch our own products, shaping the future of digital interactions.</p>
    <p>With a commitment to innovation, we develop proprietary technologies, file patents, and push the boundaries of what's possible.</p>
  </div>
</section>

<style>
  @import '../../styles/shared.css';

  .about-split {
    width: 100%;
    background: #030d22;
    display: flex;
    align-items: center;
    gap: 4rem;
    padding: 4rem 8rem;
    overflow: visible;
    position: relative;
    z-index: 1;
  }

  .about-img {
    width: 480px;
    height: 600px;
    flex-shrink: 0;
    object-fit: contain;
    object-position: bottom;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 520px;
  }

  .eyebrow-yellow {
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #facc15;
    margin: 0;
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

  @media (max-width: 430px) {
    .about-split {
      position: relative;
      overflow: hidden;
      padding: 2rem 1.25rem 2rem;
      gap: 0;
    }

    .about-img {
      position: absolute;
      right: -60px;
      bottom: 0;
      height: 320px;
      width: auto;
      object-fit: contain;
    }

    .about-text {
      max-width: 100%;
    }
  }
</style>
