import { DrawerProps, useMediaQuery, useTheme } from "@mui/material"
import { FC, ReactNode, useState } from "react"
import MainLayout from "../../../components/layouts/MainLayout"

type Props = {
  /** このコンポーネントが受け取る子ノードです。 */
  children: ReactNode
}
/**
 * このアプリケーションのメインレイアウトのコンテナーを返すFCです。
 * @param param0 プロパティ
 * @returns メインレイアウトのコンテナー
 */
const MainLayoutContainer: FC<Props> = ({ children }) => {
  const { breakpoints } = useTheme()
  const [open, setOpen] = useState(false)
  const small = useMediaQuery(breakpoints.down('sm'))
  const dp: DrawerProps = {
    anchor: 'left',
    variant: small ? 'temporary' : 'permanent',
    onClose: () => setOpen(false),
    open,
  }
  const drawerAction = small
    ? () => { setOpen(!open) }
    : undefined

  return (
    <MainLayout
      drawerProps={dp}
      drawerAction={drawerAction}
    >
      {children}
    </MainLayout>
  )
}
export default MainLayoutContainer