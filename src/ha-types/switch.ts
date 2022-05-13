export type SwitchEntityId = `switch.${string}`
export type SwitchTurnOn = () => void

export type SwitchToggle = () => void

export type SwitchTurnOff = () => void

//TODO abstract this
export type SwitchState = {
    entity_id: SwitchEntityId,
    state: "on" | "off" | "unavailable",
    last_changed: string,
    last_updated: string,
    context: {
        id: string,
        parent_id?: string| null,
        user_id: string
    }
}


export type Switch = {
    [entity_id: SwitchEntityId]: {
        entity_id: SwitchEntityId,
        state: SwitchState,
        turn_on: SwitchTurnOn,
        turn_off: SwitchTurnOff,
        toggle: SwitchToggle
    }
}