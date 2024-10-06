import { createContext } from "react";

const SidebarToggleContext = createContext({
    isToggleOpen: true,
    setIsSidebarToggle: () => {} // Placeholder function
})

export default SidebarToggleContext