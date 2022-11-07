import { createTheme } from "@mui/material"

export const useTheme = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: '#f8f9fa'
      },
    }
  })
  return theme
}