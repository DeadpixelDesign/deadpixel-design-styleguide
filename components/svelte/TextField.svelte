<script lang="ts">
  let { id, label, hint, error, value = '', type = 'text' }: {
    id: string; label: string; hint?: string; error?: string; value?: string; type?: string
  } = $props();
</script>
<div class="dp-field" class:dp-field-invalid={!!error}>
  <label class="dp-field-label" for={id}>{label}</label>
  <input class="dp-field-input" {id} {type} bind:value aria-invalid={error ? 'true' : undefined} aria-describedby={error || hint ? id + '-message' : undefined}>
  {#if error || hint}<p class="dp-field-msg" class:dp-field-error={!!error} id={id + '-message'}>{error || hint}</p>{/if}
</div>
