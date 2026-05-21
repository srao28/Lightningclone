<script>
  import gifVR from '../images/virtual-reality.gif';
  import gifLove from '../images/love.gif';
  import gifAnim from '../images/3d-animation.gif';
  import goldCircle from '../images/gold-circle.png';
</script>

<section class="black roadmap">
  <div class="roadmap-content">
    <div class="roadmap-top-boxes">
      <div class="box-unit">
        <div class="gif-box"><img src={gifVR} alt="Virtual Reality" class="gif-images" /></div>
        <div class="text-box">
          <span class="box-title">AI</span>
          <p class="box-desc">Revolutionizing digital interaction with immersive technologies like AI</p>
        </div>
      </div>
    </div>
    <img src={goldCircle} alt="" class="roadmap-circle" aria-hidden="true" />
    <div class="roadmap-text">
      <p>We're just getting started. Our roadmap includes bold ventures into <span class="yellow">social entertainment.</span></p>
    </div>
    <div class="roadmap-bottom-boxes">
      <div class="box-unit">
        <div class="gif-box"><img src={gifLove} alt="Dating" class="gif-images" /></div>
        <div class="text-box">
          <span class="box-title">Dating</span>
          <p class="box-desc">Redefining modern romance through innovative dating initiatives</p>
        </div>
      </div>
      <div class="box-unit">
        <div class="gif-box"><img src={gifAnim} alt="And more" class="gif-images" /></div>
        <div class="text-box">
          <span class="box-title">And more</span>
          <p class="box-desc">And more innovative solutions are on the horizon, reshaping the future of connections</p>
        </div>
      </div>
    </div>
  </div>
  <div class="roadmap-cta">
    <p>Want to <span class="yellow">collaborate</span>? Let's talk.</p>
    <button class="hex-btn">Contact Us</button>
  </div>
</section>

<style>
  @import '../styles/shared.css';

  .roadmap {
    position: relative;
    overflow: visible;
    height: auto;
    min-height: 140vh;
    padding: 5rem 2rem;
  }

  .roadmap-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 6rem 0 4rem;
    min-height: 120vh;
  }

  .roadmap-circle {
    padding: 4rem 2rem;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 20%;
    z-index: 0;
  }

  .roadmap-top-boxes {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -10rem
    
  }

  .roadmap-bottom-boxes {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 18rem;
  }

  .gif-images {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  .roadmap-text {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 750px;
    padding: 5rem 5rem;
  }

  .roadmap-text p {
    font-size: 36px;
    font-weight: 300;
    line-height: 1.35;
    color: #fff;
    margin: 0;
    letter-spacing: -0.03em;
  }

  .roadmap-cta {
    position: relative;
    z-index: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 5rem;
  }

  .roadmap-cta p {
    font-size: 4rem;
    font-weight: 200;
    line-height: 1.35;
    color: #fff;
    margin: 0;
    letter-spacing: -0.03em;
  }

  .roadmap-cta :global(.hex-btn) {
    font-size: 1.5rem;
    font-weight: 600;
    padding: .5rem 1.5rem;
  }

  @media (max-width: 430px) {
    .roadmap {
      height: auto;
      min-height: 100vh;
      overflow: visible;
      align-items: flex-start;
    }

    .roadmap-content {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 2rem 1.25rem;
      gap: 1.5rem;
    }

    .roadmap-top-boxes {
      margin-top: 0;
      justify-content: flex-start;
    }

    .roadmap-bottom-boxes {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }

    .roadmap-text {
      text-align: center;
      padding: 0;
    }

    .box-unit {
      width: 100%;
    }

    .text-box {
      width: 100%;
    }

    .roadmap-cta {
      padding: 2rem 1.25rem;
      width: 100%;
    }

    .roadmap-cta p {
      font-size: clamp(1.75rem, 10vw, 3rem);
      text-align: center;
    }

    .roadmap-cta :global(.hex-btn) {
      font-size: 1.1rem;
      width: 100%;
    }
  }
</style>
