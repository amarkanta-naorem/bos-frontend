import { createContext } from "react";

export const SidebarToggleContext = createContext({
    isToggleOpen: true,
    setIsSidebarToggle: () => {}
})