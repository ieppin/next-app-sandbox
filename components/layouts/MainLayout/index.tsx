import { ThemeProvider } from "@emotion/react"
import { Search } from "@mui/icons-material"
import MenuIcon from "@mui/icons-material/Menu"
import { AppBar, Box, Button, CssBaseline, Drawer, DrawerProps, IconButton, List, ListItem, Paper, Toolbar, Typography } from "@mui/material"
import { FC, MouseEventHandler, ReactNode } from "react"
import { Toaster } from "react-hot-toast"
import { useAooTheme as useAppTheme } from "../../theme"

type Props = {
  drawerAction?: MouseEventHandler
  drawerProps: DrawerProps
  /** このコンポーネントが受け取る子ノードです。 */
  children: ReactNode
}
/**
 * このアプリケーションのメインレイアウトコンポーネントを返すFCです。
 * @param param0 プロパティ
 * @returns メインレイアウトのコンポーネント
 */
const MainLayout: FC<Props> = ({ children, drawerProps, drawerAction }) => {
  const theme = useAppTheme()
  const drawerWidth = 240

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex">
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: 1000 }}
        >
          <Toolbar>
            {drawerAction &&
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={drawerAction}
              >
                <MenuIcon />
              </IconButton>
            }
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Application
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography>ここにいろいろな情報を載せます</Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          {...drawerProps}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              boxShadow: 'none',
              border: 'none',
              backgroundColor: { xs: 'default', sm: 'inherit' },
              zIndex: 900,
            },
          }}
        >
          <Toolbar />
          <List disablePadding sx={{ mt: 2 }}>
            <ListItem key={1}>
              <Paper sx={{ display: 'flex', width: drawerWidth, p: 1.5 }}>
                <Button fullWidth variant="text">
                  <Search />&nbsp;<Typography sx={{ fontWeight: 'bold' }}>メニュー1</Typography>
                </Button>
              </Paper>
            </ListItem>
            <ListItem key={2}>
              <Paper sx={{ display: 'flex', width: drawerWidth, p: 1.5 }}>
                <Button fullWidth variant="text">
                  <Search />&nbsp;<Typography sx={{ fontWeight: 'bold' }}>メニュー2</Typography>
                </Button>
              </Paper>
            </ListItem>
            <ListItem key={3}>
              <Paper sx={{ display: 'flex', width: drawerWidth, p: 1.5 }}>
                <Button fullWidth variant="text">
                  <Search />&nbsp;<Typography sx={{ fontWeight: 'bold' }}>メニュー3</Typography>
                </Button>
              </Paper>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, py: 3, px: 2 }}>
          <Toolbar />
          {children}
        </Box>
        <Toaster />
      </Box>
    </ThemeProvider >
  )
}

export default MainLayout