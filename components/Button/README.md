# Button

The one button, in three variants. **Primary** (`blue-text` fill, `on-action` label) at most once per view, for the action the page exists for; **secondary** (blue outline) for the alternative; **ghost** for toolbars and low-stakes actions. All three turn red on hover (`link-hover`), carrying over the original style guide's blue-to-red link behavior.

- Provide: `children` (the label), optional `variant`, `size` (`md` 44px tall, `sm` 36px), `icon` / `iconAfter` (Material Symbols names), `href` to render an `<a>`.
- Labels: verb first, sentence case, Nunito Sans 700 (`button` style): "Start a project", not "SUBMIT".
- Icon-only buttons need `aria-label`; keep the 44px target.
- Don't use Brand Blue (`blue`) as the fill: white on #4379F3 is 3.99:1 and fails at 16px.
