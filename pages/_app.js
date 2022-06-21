import '../styles/globals.css'
import '../styles/common.scss'
import '../styles/styles.scss'

import Layout from '../ui/components/common/Layout';

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
