<script lang="ts">
  let { eyebrow, title, href, footer, children }: {
    eyebrow?: string; title?: string; href?: string; footer?: string; children?: import('svelte').Snippet
  } = $props();
</script>
<article class="dp-card">
  {#if eyebrow}<p class="dp-card-eyebrow">{eyebrow}</p>{/if}
  {#if title}<h3 class="dp-card-title">{#if href}<a {href}>{title}</a>{:else}{title}{/if}</h3>{/if}
  <div class="dp-card-body">{@render children?.()}</div>
  {#if footer}<div class="dp-card-footer">{footer}</div>{/if}
</article>
