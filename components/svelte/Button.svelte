<script lang="ts">
  let { variant = 'primary', size = 'md', href, children, ...rest }: {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md';
    href?: string;
    children?: import('svelte').Snippet;
    [key: string]: any;
  } = $props();
</script>
{#if href}
  <a class="dp-btn dp-btn-{variant} {size === 'sm' ? 'dp-btn-sm' : ''}" {href} {...rest}>{@render children?.()}</a>
{:else}
  <button class="dp-btn dp-btn-{variant} {size === 'sm' ? 'dp-btn-sm' : ''}" type="button" {...rest}>{@render children?.()}</button>
{/if}
