import Layout from "../components/layout/layout";
import "../styles/global.css";
import Notification from "../components/ui/notification";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
        
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
