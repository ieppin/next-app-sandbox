import { createTheme } from "@mui/material"
import { useMemo } from "react"

export const useAooTheme = () => {
  const theme = useMemo(() => createTheme({
    palette: {
      background: {
        default: '#f8f9fa'
      },
    }
  }), [])
  return theme
}