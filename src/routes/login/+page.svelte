<script>
  import { onMount } from 'svelte';
  import { login, signup } from '$lib/auth'; // Functions to handle login/signup
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let mode = 'login'; // 'login' or 'signup'

  const handleSubmit = async () => {
    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      goto('/vault'); // Redirect to the vault upon success
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };
</script>

<div class="max-w-md mx-auto mt-24 p-6 bg-black rounded-lg text-white">
  <h2 class="text-3xl font-bold mb-4">{mode === 'login' ? 'Login' : 'Sign Up'}</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <input
      type="email"
      placeholder="Email"
      bind:value={email}
      class="w-full p-4 mb-4 bg-gray-800 text-white rounded"
      required
    />
    <input
      type="password"
      placeholder="Password"
      bind:value={password}
      class="w-full p-4 mb-4 bg-gray-800 text-white rounded"
      required
    />
    <button class="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded font-bold">
      {mode === 'login' ? 'Login' : 'Sign Up'}
    </button>
  </form>
  <p class="mt-4">
    {mode === 'login'
      ? 'Need an account?'
      : 'Already have an account?'} 
    <a class="text-orange-400 cursor-pointer" on:click={() => (mode = mode === 'login' ? 'signup' : 'login')}>
      {mode === 'login' ? 'Sign Up' : 'Login'}
    </a>
  </p>
</div>
