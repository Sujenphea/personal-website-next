import '../styles/globals.css'
import { AppProps } from 'next/app'

// function MyApp(props: AppProps) {
//   // eslint-disable-next-line react/destructuring-assignment
//   const { Component } = props
//   // eslint-disable-next-line react/jsx-props-no-spreading
//   return <Component {...props} />
// }

// eslint-disable-next-line react/destructuring-assignment
function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default MyApp
