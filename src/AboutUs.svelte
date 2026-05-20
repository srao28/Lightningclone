<script>
  export let onNavigate = (page) => {};
  import aboutMockup from './images/about-us-mockup.webp';
</script>

<!-- Hero: About Us page intro -->
<section class="hero-outer">
  <div class="hero-card">
    <p class="eyebrow">About us</p>
    <h1>Who We Are &amp; Why We Build</h1>
  </div>
</section>

<!-- About Lightningware: image left, text right -->
<section class="about-split">
  <img src={aboutMockup} alt="Lightningware app on phone" class="about-img" />
  <div class="about-text">
    <p class="eyebrow-yellow">What we do</p>
    <h2>About <span class="yellow">Lightningware</span></h2>
    <p>We're not an agency. We don't build software for clients. We create and launch our own products, shaping the future of digital interactions.</p>
    <p>With a commitment to innovation, we develop proprietary technologies, file patents, and push the boundaries of what's possible.</p>
  </div>
</section>

<!-- Three Pillars -->
<section class="pillars">
  <div class="box-unit">
    <div class="gif-box">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="box-svg">
        <circle cx="24" cy="18" r="10" stroke="white" stroke-width="2.5"/>
        <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="text-box">
      <span class="box-title">Why We Do It</span>
      <p class="box-desc">We want to bring stronger relationships between people by facilitating real connection</p>
    </div>
  </div>
  <div class="box-unit">
    <div class="gif-box">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="box-svg">
        <path d="M24 4C16.268 4 10 10.268 10 18c0 10 14 26 14 26s14-16 14-26c0-7.732-6.268-14-14-14z" stroke="white" stroke-width="2.5"/>
        <circle cx="24" cy="18" r="4" stroke="white" stroke-width="2.5"/>
      </svg>
    </div>
    <div class="text-box">
      <span class="box-title">Our Innovation</span>
      <p class="box-desc">We use AI to better moderate and keep our products clean by constantly using the cutting edge technology</p>
    </div>
  </div>
  <div class="box-unit">
    <div class="gif-box">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="box-svg">
        <circle cx="17" cy="16" r="7" stroke="white" stroke-width="2.5"/>
        <circle cx="33" cy="16" r="7" stroke="white" stroke-width="2.5"/>
        <path d="M2 42c0-7.732 6.716-14 15-14" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M46 42c0-7.732-6.716-14-15-14" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M17 28c3.866 0 7 6.268 7 14M31 28c-3.866 0-7 6.268-7 14" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="text-box">
      <span class="box-title">The Team</span>
      <p class="box-desc">Our team is dedicated to innovation and moderation in helping people make true connections</p>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-outer">
  <p class="cta-heading">Want to <span class="cta-yellow">collaborate</span>? Let's talk.</p>
  <div class="cta-btn-wrap">
    <a href="mailto:support@thundr.com" class="cta-btn">Contact Us</a>
  </div>
</section>

<!-- Founder Quote -->
<section class="quote-outer">
  <div class="quote-card">
    <p class="quote-label">A note from the founder</p>
    <p class="quote-text">"Lightningware is more than a company; it's a movement towards better digital experiences. We're here to push boundaries, reimagine social technology, and craft digital products that people love."</p>
    <p class="quote-attr">— Callan Goldeneye, Founder &amp; CEO</p>
  </div>
</section>

<style>
  .hero-outer {
    width: 100%;
    background: #000a28;
    padding: 130px 20px 0;
  }

  .hero-card {
    width: 100%;
    background: #001f7f;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    padding: 5rem 2rem;
    min-height: 270px;
  }

  .eyebrow {
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #ffc100;
    margin: 0;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 300;
    color: #fff;
    margin: 0;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .pillars {
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 0 2rem 4rem;
    margin-top: -100px;
    position: relative;
    z-index: 3;
  }

  .box-unit {
    position: relative;
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .gif-box {
    position: relative;
    z-index: 2;
    width: 200px;
    height: 100px;
    background: #030d22;
    border: 1.5px solid #1a358c;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: -2rem;
  }

  .box-svg {
    width: 48px;
    height: 48px;
  }

  .text-box {
    position: relative;
    z-index: 1;
    width: 325px;
    height: 200px;
    background: rgba(3, 13, 34, 0.85);
    border: 1.5px solid #1a358c;
    border-radius: 8px;
    padding: 1.75rem 1.25rem 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .box-title {
    margin-top: 1rem;
    font-size: 20px;
    font-weight: 700;
    color: #facc15;
    letter-spacing: 0.05em;
  }

  .box-desc {
    font-size: 18px;
    height: 81px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.65);
    margin: 0;
    padding: 5px;
  }

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

  .yellow {
    color: #facc15;
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

    .pillars {
      flex-direction: column;
      align-items: center;
      padding: 2rem 1.25rem 3rem;
      gap: 2rem;
      margin-top: 0;
    }

    .box-unit {
      width: 100%;
    }

    .text-box {
      width: 100%;
    }
  }

  .quote-outer {
    width: 100%;
    background: #000a28;
    padding: 130px 20px 80px;
    display: flex;
    justify-content: center;
  }

  .quote-card {
    width: 100%;
    max-width: 1085px;
    background: #ffc100;
    border-radius: 16px;
    padding: 0 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .quote-label {
    font-size: 20px;
    font-weight: 400;
    color: #000a28;
    margin: 0;
    padding: 30px 0 10px;
    line-height: 30px;
  }

  .quote-text {
    font-size: 40px;
    font-weight: 400;
    font-style: italic;
    color: #000a28;
    line-height: 60px;
    margin: 0 0 20px;
  }

  .quote-attr {
    font-size: 24px;
    font-weight: 600;
    font-style: normal;
    color: #000a28;
    line-height: 28.8px;
    margin: 0;
  }

  @media (max-width: 768px) {
    .quote-outer {
      padding: 60px 16px 60px;
    }

    .quote-text {
      font-size: 24px;
      line-height: 36px;
    }

    .quote-attr {
      font-size: 18px;
    }
  }

  .cta-outer {
    width: 100%;
    background: #000a28;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cta-heading {
    font-size: 64px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    letter-spacing: -3.2px;
    margin: 0 0 35px;
    line-height: 1.1;
  }

  .cta-yellow {
    color: #ffc100;
  }

  .cta-btn-wrap {
    background: #ffc100;
    clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
    padding: 2px;
    display: inline-flex;
  }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 51px;
    background: #ffc100;
    color: #000a28;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
    transition: opacity 0.15s;
  }

  .cta-btn:hover {
    opacity: 0.88;
  }

  @media (max-width: 768px) {
    .cta-heading {
      font-size: 36px;
      letter-spacing: -1.5px;
      padding: 0 1.5rem;
    }
  }
</style>
