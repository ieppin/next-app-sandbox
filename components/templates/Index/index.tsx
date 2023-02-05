import { Box, Typography } from "@mui/material"
import { FC } from "react"

type Props = {
  message1?: string
  message2?: string
}
const IndexComponents: FC<Props> = ({ message1, message2 }) => {
  return <Box>
    <Typography>API Message1: {message1}</Typography>
    <Typography>API Message2: {message2}</Typography>
  </Box>
}
export default IndexComponents