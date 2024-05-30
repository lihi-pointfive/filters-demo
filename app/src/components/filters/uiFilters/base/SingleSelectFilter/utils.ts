import {Option} from "../../../types.ts";

export function defaultURLToSingleSelectInput(state?: string): Option | undefined {
    if (state) {
        return {
            label: state,
            value: state
        }
    }

    return undefined;
}