export function createTextElement(text: string | number) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: String(text),
      children: [],
    },
  };
}
