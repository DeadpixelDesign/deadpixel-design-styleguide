<script lang="ts">
  let { tone = 'info', title = 'Notice', children }: {
    tone?: 'info' | 'success' | 'danger'; title?: string; children?: import('svelte').Snippet
  } = $props();
</script>
<div class="dp-alert dp-alert-{tone}" role={tone === 'danger' ? 'alert' : 'status'}>
  <div><p class="dp-alert-title">{title}</p>{@render children?.()}</div>
</div>
