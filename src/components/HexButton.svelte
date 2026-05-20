<script>
  export let variant = 'solid'; // 'solid' | 'ghost' | 'sm' | 'social' | 'nav'
  export let type = 'button';
</script>

{#if variant === 'ghost'}
  <div class="hex-ghost-wrap">
    <button {type} class="hex-ghost-btn" on:click><slot /></button>
  </div>
{:else if variant === 'nav'}
  <button {type} class="nav-contact-btn" on:click><slot /></button>
{:else}
  <button
    {type}
    class="hex-btn"
    class:hex-btn--sm={variant === 'sm'}
    class:hex-btn--social={variant === 'social'}
    on:click
  ><slot /></button>
{/if}

<style>
  @import '../styles/shared.css';

  .nav-contact-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #facc15;
    color: #000;
    border: none;
    font-size: 0.9rem;
    font-weight: 700;
    padding: 0.65rem 1.8rem;
    border-radius: 0;
    cursor: pointer;
    letter-spacing: 0.04em;
    white-space: nowrap;
    transition: background 0.15s;
    clip-path: polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%);
  }

  .nav-contact-btn:hover {
    background: #e6b800;
  }
</style>
