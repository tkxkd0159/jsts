import { IUser } from "./interface/IUser";

type GetDataPromiseCallback = (a: IUser[]) => void;
export const getDataPromise = (fn: GetDataPromiseCallback) =>
                                (skip: number, limit: number) =>
                                fetch(`http://127.0.0.1:3000/users/${skip}/${limit}`)
                                .then(res => res.json())
                                .then(fn)