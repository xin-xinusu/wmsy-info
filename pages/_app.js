import { useContext } from 'react'
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import WindowContext from "../Client/contexts/window.context";
import { GlobalProvider, GlobalContext } from "../Client/contexts/global.provider";

import {
  DeviceDimensions,
  getWindowSizeQuery,
} from "../Client/utils/window";

import { apolloClient } from "../lib/apollo";
import { Fonts } from "../styles/Fonts";
import "../styles/global.css";
import { Loading } from "../Client/Components/Loading";
import PopupComponent from "../Client/Components/Popup/Popup";



const AppStateComponent = (props) => {
  const { appState: { appModes } } = useContext(GlobalContext)

  return (
    <div 
      className={`column ${ appModes.popup.isOpen ? 'scroll-lock' : ''} state-holder` }
      style={{
        width: '100vw',
        position: "relative"
      }}
    >
      {
        appModes.popup.isOpen
          ? <PopupComponent>
            {appModes.popup.content}
          </PopupComponent>
          : null 
      }
      <div style={{
        position: "relative"
      }}>
        {props.children}
      </div>
      
    </div>
  )
}


export default function App({ Component, pageProps: {session, ...pageProps} }) {
  const router = useRouter();


  const [windowSize, setWindowSize] = useState(
    DeviceDimensions.MaxMobileWidth
  );

  const [loading, setLoading] = useState(false);

  // Show loading animation when changing routes
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  // Updates window size context on load and on resize
  useEffect(() => {
    Object.entries(DeviceDimensions).forEach(([_, value], index, array) => {
      const query = getWindowSizeQuery(index, array);
      if (window.matchMedia(query).matches) {
        setWindowSize(value);
      }
      window.matchMedia(query).onchange = (e) => {
        if (e.matches) {
          setWindowSize(value);
        }
      };
    });
  }, []);

  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <WindowContext.Provider value={{ windowSize, setWindowSize }}>
          <GlobalProvider>
            <AppStateComponent>
            <Fonts />
              {
                  loading ? (
                    <Loading variant="fullHeight" />
                  ) : (
                    <Component {...pageProps} />
                  )
              }
            </AppStateComponent>
          </GlobalProvider>
        </WindowContext.Provider> 
      </ApolloProvider>
    </SessionProvider>)
}
