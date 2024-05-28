import { ReactNode } from "react";

export type Option = {
    value: string;
    label: string;
    display?: ReactNode;
}

export const filterTypes = {
    singleSelect: "singleSelect",
    multiSelect: "multiSelect",
    range: "range"
}