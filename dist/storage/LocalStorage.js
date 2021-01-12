"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Storage_1 = require("./Storage");
class LocalStorage extends Storage_1.Storage {
    get(key) {
        const result = window.localStorage.getItem(key);
        return result === null ? undefined : result;
    }
    set(key, value) {
        window.localStorage.setItem(key, value);
    }
    clear() {
        window.localStorage.clear();
    }
}
exports.LocalStorage = LocalStorage;
//# sourceMappingURL=LocalStorage.js.map