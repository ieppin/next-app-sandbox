import type { AppProps } from 'next/app'
import MainLayoutContainer from '../containers/layouts/MainLayout'
import AppQueryProvider from '../query/AppQueryProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppQueryProvider>
      <MainLayoutContainer>
        <Component {...pageProps} />
      </MainLayoutContainer>
    </AppQueryProvider>
  )
}
