import Head from "next/head";
import Header from "../components/Header";
import { AuthProvider } from "../contexts/auth";
import Footer from "../components/Footer";
// import Login from './Login'
import { useAuth } from "../contexts/auth";
import Login from "./Login";
import Note from "./Note";
export default function Home() {
  const { user, login } = useAuth();
  console.log(user);

  return (
    <>
      <Head>
        <title>Task Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      {user ? <Note user={user} /> : <Login login={login} />}

      <Footer />
    </>
  );
}
