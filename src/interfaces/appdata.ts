export interface IMeta {
    title: string;
    version: number;
}

export interface ILink {
    id: string;
    name: string;
    order: number;
    url: string;
    icon?: string;
}

export interface IGroup {
    id: string;
    name: string;
    order: number;
    links: ILink[];
}

export interface IData {
    groups: IGroup[];
}

export interface IAppData {
    meta: IMeta;
    data: IData;
}
