export interface IMeta {
  title: string;
  version: number;
}

export interface ILink {
  name: string;
  order: number;
  url: string;
  icon?: string;
}

export interface IGroup {
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
