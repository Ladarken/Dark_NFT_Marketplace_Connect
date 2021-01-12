import { Storage } from './Storage';
export declare class LocalStorage extends Storage {
    get(key: string): any | undefined;
    set(key: string, value: any): void;
    clear(): void;
}
