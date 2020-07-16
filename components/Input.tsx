import cls from '@5alid/cls';
import {
  Ref,
  ReactNode,
  FormHTMLAttributes,
  InputHTMLAttributes,
  DetailedHTMLProps,
  LabelHTMLAttributes,
  ButtonHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'tel' | 'email' | 'password';
  className?: string;
  getRef?: Ref<HTMLInputElement>;
}
export function TextInput({ getRef, type = 'text', ...props }: InputProps) {
  return (
    <input
      {...props}
      type={type}
      className={cls('w-full px-2 py-1 rounded-lg border focus:outline-none', props.className)}
      ref={getRef}
    />
  );
}

type LabelProps = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
export function Label({ children, ...props }: LabelProps) {
  return (
    <label {...props} className={cls('capitalize tracking-wide', props.className)}>
      {children}
    </label>
  );
}

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cls('px-4 py-1 rounded-lg font-semibold tracking-wide focus:outline-none', props.className)}
    >
      {children}
    </button>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  type?: 'text' | 'tel' | 'email' | 'password';
  className?: string;
  getRef?: Ref<HTMLTextAreaElement>;
  children?: ReactNode;
}
export function Textarea({ children, getRef, ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={cls('px-2 py-1 w-full rounded-lg border focus:outline-none', props.className)}
      ref={getRef}
    >
      {children}
    </textarea>
  );
}

type FormProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
export function Form({ children, ...props }: FormProps) {
  return (
    <form {...props} className={cls('grid gap-4', props.className)}>
      {children}
    </form>
  );
}
