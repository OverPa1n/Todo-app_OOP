export class Input {
    static createElement(node, attributes): HTMLElement {
        const {type, value, placeholder} = attributes;

        node.setAttribute(type, value);
        node.placeholder = placeholder;

        return node;
    }
}
