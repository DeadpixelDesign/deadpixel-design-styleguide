# Alert

Inline message in three tones, each with its own icon and a default title word, so state is never carried by color alone: **info** (`info-soft`, `blue-text`), **success** (`success-soft`, `success` teal), **danger** (`danger-soft`, `red-text`). Danger uses `role="alert"`; the others `role="status"`.

- Provide: `tone`, optional `title` (defaults to Note, Done, Error), `children`.
- One sentence on what happened, one on what to do next.
