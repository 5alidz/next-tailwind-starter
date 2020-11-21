import cls from '@5alid/cls';
import { HTMLAttributes, ReactNode } from 'react';

interface ArticleProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
}

export function Article({ className, children, ...props }: ArticleProps) {
  return (
    <article {...props} className={cls('prose', className)}>
      {children}
    </article>
  );
}
