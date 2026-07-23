import { createTextElement } from './createTextElement';

export function createElement(type: string, props: {}, ...children: any[]) {
  const safeProps = props || {};

  return {
    type: type,
    props: {
      ...safeProps,
      children: children.map((child: any) =>
        typeof child === 'object' ? child : createTextElement(child),
      ),
    },
  };
}
