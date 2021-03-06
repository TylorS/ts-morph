import { ExpressionedNodeStructure } from "../expressioned";
import { KindedStructure, Structure } from "../../Structure";
import { StructureKind } from "../../StructureKind";

export interface SpreadAssignmentStructure extends Structure, SpreadAssignmentSpecificStructure, ExpressionedNodeStructure {
}

export interface SpreadAssignmentSpecificStructure extends KindedStructure<StructureKind.SpreadAssignment> {
}
