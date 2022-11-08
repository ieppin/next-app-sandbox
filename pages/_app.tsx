import type { AppProps } from 'next/app'
import MainLayoutContainer from '../containers/layouts/MainLayout'
import AppLocalizationProvider from '../localize'
import AppQueryProvider from '../query/AppQueryProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppQueryProvider>
      <AppLocalizationProvider>
        <MainLayoutContainer>
          <Component {...pageProps} />
        </MainLayoutContainer>
      </AppLocalizationProvider>
    </AppQueryProvider>
  )
}
