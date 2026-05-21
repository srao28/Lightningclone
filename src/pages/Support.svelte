<section class="black support-contact">
  <p class="support-heading">Need to <span class="yellow">contact</span> us?</p>
  <p class="support-email">Contact Support: <a href="mailto:support@thundr.com" class="yellow">support@thundr.com</a></p>
</section>

<section class="black roadmap-cta-section">
  <div class="roadmap-cta">
    <p>Want to <span class="yellow">collaborate</span>? Let's talk.</p>
    <button class="hex-btn" on:click={() => window.location.href = 'mailto:support@thundr.com'}>Contact Us</button>
  </div>
</section>

<style>
  @import '../styles/shared.css';

  .support-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
    height: auto;
    gap: .5rem;
    padding: 8rem 2rem 8rem;
  }

  .support-heading {
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 300;
    color: #fff;
    margin: 0;
    letter-spacing: -0.02em;
  }

  .support-email {
    font-size: clamp(1.2rem, 2vw, 1.75rem);
    font-weight: 300;
    color: #fff;
    margin: 0;
  }

  .support-email a {
    text-decoration: none;
  }

  .support-email a:hover {
    text-decoration: underline;
  }

  .roadmap-cta-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    height: auto;
  }

  .roadmap-cta {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 4rem 2rem;
  }

  .roadmap-cta p {
    font-size: clamp(2rem, 3.5vw, 4rem);
    font-weight: 300;
    line-height: 1.2;
    color: #fff;
    margin: 0;
    letter-spacing: -0.03em;
  }
</style>
