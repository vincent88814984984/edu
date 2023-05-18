import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './component/layout'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
