<section class="quote-outer">
  <div class="quote-card">
    <p class="quote-label">A note from the founder</p>
    <p class="quote-text">"Lightningware is more than a company; it's a movement towards better digital experiences. We're here to push boundaries, reimagine social technology, and craft digital products that people love."</p>
    <p class="quote-attr">— Callan Goldeneye, Founder &amp; CEO</p>
  </div>
</section>

<style>
  .quote-outer {
    width: 100%;
    background: #000a28;
    padding: 0px 0px 0px;
    
    display: flex;
    justify-content: center;
    height: 70vh;
  }

  .quote-card {
    width: 100%;
    max-width: 92rem;
    background: #ffc100;
    border-radius: 16px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .quote-label {
    font-size: 20px;
    font-weight: 400;
    color: #000a28;
    margin: 0;
    padding: 30px 0 30px;
    line-height: 30px;
  }

  .quote-text {
    font-size: 44px;
    font-weight: 400;
    font-style: italic;
    align-self: center;
    color: #000a28;
    line-height: 60px;
    margin: 20 0 20px;
    max-width: 85rem;
    
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

  @media (max-width: 430px) {
    .quote-outer {
      height: auto;
      padding: 2rem 1.25rem;
    }

    .quote-card {
      height: auto;
      padding: 2rem 1.25rem;
      border-radius: 12px;
    }

    .quote-label {
      font-size: 16px;
      padding: 0 0 1rem;
    }

    .quote-text {
      font-size: clamp(1.1rem, 5vw, 1.5rem);
      line-height: 1.55;
      padding: 0 0.5rem;
    }

    .quote-attr {
      font-size: 15px;
      padding-top: 1rem;
    }
  }
</style>
