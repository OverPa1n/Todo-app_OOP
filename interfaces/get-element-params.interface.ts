import {AttributesInterface} from "./attributes.interface";
import {NodeType} from "../types/node.type";

export interface GetElementParamsInterface {
    type: NodeType;
    content: string;
    attributes: AttributesInterface;
}
