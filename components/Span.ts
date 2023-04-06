import {AttributesInterface} from "../interfaces/attributes.interface";

export class Span {
    static createElement(node, attributes: AttributesInterface): HTMLElement {
        const {type, value} = attributes;

        node.setAttribute(type, value);

        return node;
    }
}
