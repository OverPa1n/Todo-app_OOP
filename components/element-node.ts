import {NodeType} from "../types/node.type";

export class ElementNode {
    static createElementNode(type: NodeType, content: string) {
        const textNodeContent = document.createTextNode(content);

        const node = document.createElement(type);
        node.appendChild(textNodeContent);

        return node;
    }
}
