import { Dispatch, SetStateAction } from "react";
import { IAppData } from "../../interfaces/appdata";

export type createGroup = (name: string, order: number) => void;

export const createGroupFactory = (
    state: IAppData,
    setState: Dispatch<SetStateAction<IAppData>>
) => (
    name: string,
    order: number
) => {
        // Generate unique id.
        const id = crypto.randomUUID();

        // Create logical order.
        let modifiedOrder = order;

        // Clamp order.
        if (state.data.groups.length < order) {
            modifiedOrder = state.data.groups.length + 1;
        }

        // Manage new state.
        const newState = structuredClone(state);

        // Need order modification.
        newState.data.groups.forEach((group) => {
            if (group.order >= modifiedOrder) {
                group.order++;
            }
        });

        // Add new entry.
        newState.data.groups.push({
            id: id,
            name: name,
            order: modifiedOrder,
            links: [],
        });

        // Sort groups by order.
        newState.data.groups.sort((a, b) => a.order - b.order);

        // Write new state.
        setState(newState);
    };
