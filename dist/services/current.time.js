"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = void 0;
const getTime = () => {
    const date_ob = new Date();
    const date = ("0" + date_ob.getDate()).slice(-2);
    const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    const year = date_ob.getFullYear();
    const hours = date_ob.getHours();
    const minutes = date_ob.getMinutes();
    const seconds = date_ob.getSeconds();
    const dateTime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    return dateTime;
};
exports.getTime = getTime;
//# sourceMappingURL=current.time.js.map