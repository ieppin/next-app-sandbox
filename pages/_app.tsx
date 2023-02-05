import type { AppProps } from 'next/app'
import MainLayoutContainer from '../containers/layouts/MainLayout'
import AppL10nProvider from '../localization'
import AppQueryProvider from '../query/AppQueryProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppQueryProvider>
      <AppL10nProvider>
        <MainLayoutContainer>
          <Component {...pageProps} />
        </MainLayoutContainer>
      </AppL10nProvider>
    </AppQueryProvider>
  )
}
