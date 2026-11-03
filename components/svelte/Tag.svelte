<script lang="ts">
  let { tone = 'neutral', children }: { tone?: 'neutral' | 'blue' | 'red'; children?: import('svelte').Snippet } = $props();
</script>
<span class="dp-tag dp-tag-{tone}">{@render children?.()}</span>
