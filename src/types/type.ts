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

interface Attributessslots {
    name: string,
    meaning: string,
    type?: string,
    default?: string
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

interface Api {
    attributes: Attributessslots[],
    slots: Attributessslots[]
}

interface Apititle {
    "attributes": string[],
    "slots": string[],
}

interface Siderbarlist {
    title: string,
    component: {
        title: string, 
        path: string
    }[]
}

interface Messagefun {
    message: string,
    type: '' | 'success' | 'warning' | 'Error'
}

export type { 
    Components, Strings, Compatibility, InstallMethodsItem, 
    SetupSteps, Attributessslots, Api, Apititle, StateItem, 
    Loaderprops, Siderbarlist, Messagefun
};