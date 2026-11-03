/* Vue 3 adapter. Load Vue first, then this file; styles are shared with every framework. */
(function (global) {
  const Vue = global.Vue;
  if (!Vue) throw new Error('Vue 3 must be loaded before vue.bundle.js');
  const { h } = Vue;
  const Button = {
    name: 'DpButton',
    inheritAttrs: false,
    props: { variant: { default: 'primary' }, size: { default: 'md' }, href: String },
    setup(props, { attrs, slots }) {
      return () => h(props.href ? 'a' : 'button', {
        ...attrs, href: props.href || undefined, type: props.href ? undefined : (attrs.type || 'button'),
        class: ['dp-btn', 'dp-btn-' + props.variant, props.size === 'sm' && 'dp-btn-sm', attrs.class]
      }, slots.default?.());
    }
  };
  const Tag = {
    name: 'DpTag',
    inheritAttrs: false,
    props: { tone: { default: 'neutral' } },
    setup(props, { attrs, slots }) {
      return () => h('span', { ...attrs, class: ['dp-tag', 'dp-tag-' + props.tone, attrs.class] }, slots.default?.());
    }
  };
  const Card = {
    name: 'DpCard',
    inheritAttrs: false,
    props: { eyebrow: String, title: String, href: String, footer: String },
    setup(props, { attrs, slots }) {
      return () => h('article', { ...attrs, class: ['dp-card', attrs.class] }, [
        props.eyebrow && h('p', { class: 'dp-card-eyebrow' }, props.eyebrow),
        props.title && h('h3', { class: 'dp-card-title' }, props.href ? h('a', { href: props.href }, props.title) : props.title),
        h('div', { class: 'dp-card-body' }, slots.default?.()),
        props.footer && h('div', { class: 'dp-card-footer' }, props.footer)
      ]);
    }
  };
  const Alert = {
    name: 'DpAlert',
    inheritAttrs: false,
    props: { tone: { default: 'info' }, title: String },
    setup(props, { attrs, slots }) {
      return () => h('div', { ...attrs, class: ['dp-alert', 'dp-alert-' + props.tone, attrs.class], role: props.tone === 'danger' ? 'alert' : 'status' },
        h('div', null, [h('p', { class: 'dp-alert-title' }, props.title || 'Notice'), slots.default?.()]));
    }
  };
  const TextField = {
    name: 'DpTextField',
    inheritAttrs: false,
    props: { id: { required: true }, label: { required: true }, hint: String, error: String, modelValue: String },
    emits: ['update:modelValue'],
    setup(props, { attrs, emit }) {
      return () => h('div', { class: ['dp-field', props.error && 'dp-field-invalid'] }, [
        h('label', { for: props.id, class: 'dp-field-label' }, props.label),
        h('input', { ...attrs, id: props.id, class: 'dp-field-input', value: props.modelValue, 'aria-invalid': props.error ? 'true' : undefined,
          'aria-describedby': props.error || props.hint ? props.id + '-message' : undefined,
          onInput: event => emit('update:modelValue', event.target.value) }),
        (props.error || props.hint) && h('p', { id: props.id + '-message', class: ['dp-field-msg', props.error && 'dp-field-error'] }, props.error || props.hint)
      ]);
    }
  };
  const components = { Button, Tag, Card, Alert, TextField };
  global.DeadPixelVue = { ...components, install(app) {
    for (const [name, component] of Object.entries(components)) app.component('Dp' + name, component);
  }};
})(window);
