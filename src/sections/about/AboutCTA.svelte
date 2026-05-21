<section class="cta-outer">
  <p class="cta-heading">Want to <span class="cta-yellow">collaborate</span>? Let's talk.</p>
  <div class="cta-btn-wrap">
    <a href="mailto:support@thundr.com" class="cta-btn">Contact Us</a>
  </div>
</section>

<style>
  .cta-outer {
    width: 100%;
    background: #000a28;
    padding: 10rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30vh;
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
