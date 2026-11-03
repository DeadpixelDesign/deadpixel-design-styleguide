# TextField

Labeled input or textarea. 44px tall, `line-strong` border (3:1+), `radius-sm`, focus ring from `focus-ring`. Errors turn the border `red-text`, tint the field `danger-soft` and show an icon with the message, so the state never depends on color alone.

- Provide: `label` (always visible), optional `hint`, `error`, `multiline`, plus any input attribute (`type`, `placeholder`, `required`, `value`, `onChange`).
- Messages say what is wrong and how to fix it: "Enter an email like name@example.com".
