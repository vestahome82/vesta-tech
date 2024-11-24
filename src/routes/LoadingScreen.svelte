<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    import { gsap } from 'gsap';
  
    const dispatch = createEventDispatcher();
  
    onMount(() => {
      const flame = document.querySelector('.flame-logo');
      const container = document.querySelector('.loading-screen');
  
      // Enhanced GSAP timeline for a smoother and more impactful animation
      gsap.timeline()
        // Initial scale up to create a "coming at you" effect
        .to(flame, { scale: 3, duration: 2, ease: "power2.out" }) 
        // Slight pause to let the viewer absorb the effect
        .to(flame, {}, "+=0.5") 
        // Smooth shrink with easing before transition
        .to(flame, { scale: 1.5, duration: 1.2, ease: "power2.inOut" }) 
        // Move to top-left corner with a slight rotation for dynamic motion
        .to(flame, { scale: 0.6, x: '-45vw', y: '-20vh', rotation: -15, duration: 2.5, ease: "power2.inOut" }) 
        // Subtle bounce effect upon settling
        .to(flame, { scale: 0.8, duration: 0.6, ease: "bounce.out" }, "-=0.5")
        // Gradual fade-out of the loading screen
        .to(container, { opacity: 0, duration: 1.5, ease: "power2.out" }, "-=0.5")
        .call(() => {
          dispatch('complete'); // Notify parent that loading is done
        });
    });
  </script>
  
  <div class="loading-screen fixed inset-0 flex items-center justify-center bg-black z-50">
    <img
      src="/torch-logo.png"
      alt="Torch Flame"
      class="flame-logo w-[120px] h-[120px] animate-glow"
    />
  </div>
  
  <style>
    .loading-screen {
      background-color: black;
    }
  
    .flame-logo {
      filter: drop-shadow(0 0 20px rgba(255, 69, 0, 0.8));
    }
  
    @keyframes glow {
      0%, 100% {
        filter: drop-shadow(0 0 10px rgba(255, 140, 0, 1));
      }
      50% {
        filter: drop-shadow(0 0 30px rgba(255, 69, 0, 1));
      }
    }
  </style>
  