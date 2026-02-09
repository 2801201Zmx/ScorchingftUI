import { Component } from "vue";

interface Components {
    default: Component;
}

interface Strings {
    default: String;
}

interface InstallMethodsItem {
    id: number,
    name: string
}

interface Compatibility {
    browser: string;
    img: string;
    version: string;
}

interface SetupSteps {
    title: string,
    subheading: string,
    maintext: string,
    code: string,
    codetype: string,
    slot?: string,
    isshell?: boolean,
    isgap?: boolean,
    ispreview?: boolean,
    istips?: boolean
}

interface Attributess {
    attributesname: string,
    meaning: string,
    type: string,
    default: string
}

interface Slotss {
    slotsname: string,
    meaning: string
}

interface StateItem {
    istitle?: boolean;
    title?: string;
    content: string;
}

interface Loaderprops {
    componentPath: string
    componentType?: 'guide' | 'components'
}

export type { 
    Components, Strings, Compatibility, InstallMethodsItem, 
    SetupSteps, Attributess, Slotss, StateItem, Loaderprops
};