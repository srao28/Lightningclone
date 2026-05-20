<script>
  import logo from '../images/logo.png';
</script>

<section class="blue site-footer">
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-tagline">
        <img src={logo} alt="Lightningware" class="footer-logo" />
        <p>Driving innovation in social and entertainment technology to create meaningful digital experiences</p>
      </div>
      <div class="footer-links-row">
        <div class="footer-links">
          <span class="footer-links-heading">Quick Links</span>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
        <div class="footer-links">
          <span class="footer-links-heading">Legal</span>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="footer-hr" />
    <div class="footer-bottom">
      <span class="footer-copy">@ lightningware 2025</span>
      <div class="footer-socials">
        <button class="hex-btn hex-btn--social">Instagram</button>
        <button class="hex-btn hex-btn--social">TikTok</button>
        <button class="hex-btn hex-btn--social">X</button>
        <button class="hex-btn hex-btn--social">Discord</button>
        <button class="hex-btn hex-btn--social">Reddit</button>
      </div>
    </div>
  </div>
</section>

<style>
  @import '../styles/shared.css';

  .site-footer {
    height: auto;
    min-height: unset;
    align-items: flex-start;
    justify-content: center;
    padding: 60px;
  }

  .footer-inner {
    width: 100%;
    max-width: 1100px;
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4rem;
  }

  .footer-logo {
    height: 50px;
    width: auto;
    margin-bottom: 1rem;
  }

  .footer-tagline {
    flex: 1;
  }

  .footer-tagline p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    margin: 0;
    max-width: 40ch;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer-links-heading {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #facc15;
  }

  .footer-links ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-links li {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: color 0.15s;
  }

  .footer-links li:hover {
    color: #fff;
  }

  .footer-hr {
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    margin: 0;
  }

  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-copy {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.45);
  }

  .footer-socials {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    .site-footer {
      padding: 5rem 0 2rem;
    }

    .footer-inner {
      padding: 0 1.5rem;
      gap: 2rem;
    }

    .footer-top {
      flex-direction: column;
      gap: 2rem;
    }

    .footer-links-row {
      display: inline-flex;
      gap: 3rem;
    }

    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
    }

    .footer-socials {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
  }
</style>
