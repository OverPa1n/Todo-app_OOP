import {Span} from "../components/Span.js";
import {BaseHtmlElementFactory} from "../baseClasses/base-html-element-factory.js";
import {Div} from "../components/Div.js";
import {Button} from "../components/Button.js";
import {Input} from "../components/Input.js";
import {GetElementParamsInterface} from "../interfaces/get-element-params.interface";
import {ElementNode} from "../components/element-node.js";

export class HtmlElementFactory implements BaseHtmlElementFactory {
    public static getElement({type, content, attributes}: GetElementParamsInterface) {
        const node = ElementNode.createElementNode(type, content);

        switch (type) {
            case 'span':
                return Span.createElement(node, attributes);
            case 'div':
                return Div.createElement(node, attributes);
            case 'button':
                return Button.createElement(node, attributes);
            case 'input':
                return Input.createElement(node, attributes);
        }
    }
}
