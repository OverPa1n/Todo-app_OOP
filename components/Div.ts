export class Div {
    static createElement(node, attributes): HTMLElement {
        const {type, value} = attributes;

        node.setAttribute(type, value);

        return node;
    }
}
