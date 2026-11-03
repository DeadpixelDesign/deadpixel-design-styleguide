import type * as React from 'react';

/** Material Symbols Outlined names. Built-in names render as inline SVG; others fall back to the icon font. */
export type BuiltInIcon = 'add' | 'arrow_back' | 'arrow_forward' | 'check' | 'check_circle' | 'close' | 'code' | 'content_copy' | 'download' | 'error' | 'grid_on' | 'home' | 'info' | 'link' | 'mail' | 'menu' | 'open_in_new' | 'palette' | 'search' | 'settings' | 'terminal' | 'warning';

export interface IconProps { name: BuiltInIcon | (string & {}); size?: 16 | 20 | 24 | 40 | 48 | number; label?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'ghost'; size?: 'md' | 'sm'; icon?: IconProps['name']; iconAfter?: IconProps['name']; href?: string }
export declare function Button(props: ButtonProps): React.ReactElement;

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { href: string; external?: boolean }
export declare function Link(props: LinkProps): React.ReactElement;

export interface CodeProps { children?: React.ReactNode; className?: string }
export declare function Code(props: CodeProps): React.ReactElement;

export interface CodeBlockProps { code: string; language?: string; filename?: string; copyable?: boolean; className?: string }
export declare function CodeBlock(props: CodeBlockProps): React.ReactElement;

export interface TagProps { tone?: 'neutral' | 'blue' | 'red'; children?: React.ReactNode; className?: string }
export declare function Tag(props: TagProps): React.ReactElement;

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> { label: string; hint?: string; error?: string; multiline?: boolean }
export declare function TextField(props: TextFieldProps): React.ReactElement;

export interface CardProps { eyebrow?: string; title?: React.ReactNode; href?: string; footer?: React.ReactNode; children?: React.ReactNode; className?: string }
export declare function Card(props: CardProps): React.ReactElement;

export interface AlertProps { tone?: 'info' | 'success' | 'danger'; title?: string; children?: React.ReactNode; className?: string }
export declare function Alert(props: AlertProps): React.ReactElement;

declare global { interface Window { DeadPixel: { Button: typeof Button; Icon: typeof Icon; Link: typeof Link; Code: typeof Code; CodeBlock: typeof CodeBlock; Tag: typeof Tag; TextField: typeof TextField; Card: typeof Card; Alert: typeof Alert } } }
