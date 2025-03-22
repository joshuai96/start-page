import { IAppData } from '../interfaces/appdata';

class LocalStorage {
    storageKey = 'app-data';

    save(data: IAppData) {
        const rawData = JSON.stringify(data, undefined, 0);

        console.log(rawData);

        localStorage.setItem(this.storageKey, rawData);
    }

    load(): IAppData {
        const rawData = localStorage.getItem(this.storageKey);

        if (!rawData) {
            return {
                meta: {
                    title: 'start-page',
                    version: 1,
                },
                data: {
                    groups: [],
                },
            };
        }

        return JSON.parse(rawData) as IAppData;
    }
}

export default LocalStorage;
