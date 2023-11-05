import { alegreya, roboto } from '@/fonts'
import { store } from '@/redux/store'
import '@/styles/globals.css'
import { AppPropsWithLayout, iChildren } from '@/types'
import { SessionProvider, useSession } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { session, ...otherProps } = pageProps
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Auth>
          <style jsx global>{`
            :root {
              --font-roboto: ${roboto.style.fontFamily};
              --font-alegreya: ${alegreya.style.fontFamily};
            }
          `}</style>
          {getLayout(<Component {...otherProps} />)}
          <Toaster />
        </Auth>
      </Provider>
    </SessionProvider>
  )
}

function Auth({ children }: iChildren) {
  const { status } = useSession()

  if (status === 'loading') {
    return <div></div>
  }

  return children
}
