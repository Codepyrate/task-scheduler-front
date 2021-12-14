import '../styles/globals.css'
import '../styles/ticTacTon.css'
import '../styles/task.css'
import { AuthProvider } from '../contexts/auth'

function MyApp({ Component, pageProps }) {
  console.log("hello");
  return <AuthProvider>
  <Component {...pageProps} />
</AuthProvider>
}
export default MyApp
