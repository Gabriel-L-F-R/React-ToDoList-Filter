import { useContext } from "react"
import { LoginContext } from "../state/logincontext"

export function useLogin() {
    const context = useContext(LoginContext)
    if (!context) {
        throw new Error("useLogin deve ser usado dentro de um LoginProvider")
    }
    return context
}
