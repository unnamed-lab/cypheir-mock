/* eslint-disable no-unused-vars */
import { create } from "zustand";

type StoreUser = {
    user: any;
    setUser: (key: string, user: string) => void;
    removeUser: (key: string) => void;
};
const useUser = create<StoreUser>((set) => ({
    user: null,
    setUser: (key, user) =>
        set(() => {
            console.log(key, user);
            localStorage.setItem(key, user);
            return { user: JSON.parse(user) };
        }),
    removeUser: (key) =>
        set(() => {
            localStorage.removeItem(key);
            return { user: null };
        }),
}));

export default useUser;
