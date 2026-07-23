// element 트리(설계도)를 실제 DOM(container) 안에 그려 넣는다.
export function render(element: any, container: Node) {
  // 1. TEXT_ELEMENT 인지에 따라 dom 만들기
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);

  // 2. props 중 children 제외하고 dom 에 대입

  Object.keys(element.props)
    .filter((k) => k != 'children')
    .forEach((key) => {
      (dom as any)[key] = element.props[key];
    });

  // 3. 각 자식에 대해 render(child, dom) 재귀

  element.props.children.forEach((child: any) => {
    render(child, dom);
  });
  // 4. dom 을 container 에 append
  container.appendChild(dom);
}
