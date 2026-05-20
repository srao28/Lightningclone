<section class="blue mission">
  <div class="mission-content">
    <span class="eyebrow">What we do</span>
    <h1>About <span class="yellow">Lightningware</span></h1>
    <p>We're not an agency. We don't build software for clients. We create and launch our own products, shaping the future of digital interactions.</p>
    <p>With a commitment to innovation, we develop proprietary technologies, file patents, and push the boundaries of what's possible.</p>
    <button class="hex-btn">Why We Do It</button>
  </div>
</section>

<style>
  @import '../styles/shared.css';

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

  /* offset the flex gap so eyebrow sits tight above the heading */
  .mission-content .eyebrow {
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

  .mission-content p {
    font-size: 1.15rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    max-width: 60ch;
  }
</style>
