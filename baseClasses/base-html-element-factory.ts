import {AttributesInterface} from "../interfaces/attributes.interface";

export abstract class BaseHtmlElementFactory {
    public static getElement: (type: string, content: string, attributes: AttributesInterface) => HTMLElement;
}
