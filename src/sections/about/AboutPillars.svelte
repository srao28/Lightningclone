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

<style>
  @import '../../styles/shared.css';

  .pillars {
    width: 100%;
    height: auto;
    min-height: unset;
    overflow: visible;
    background: transparent;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 0 2rem 4rem;
    margin-top: -100px;
    position: relative;
    z-index: 3;
  }

  .box-svg {
    width: 48px;
    height: 48px;
  }

  @media (max-width: 430px) {
    .pillars {
      flex-direction: column;
      align-items: center;
      padding: 2rem 1.25rem 3rem;
      gap: 2rem;
      margin-top: -80px;
    }

    .box-unit {
      width: 100%;
    }

    .text-box {
      width: 100%;
    }
  }
</style>
