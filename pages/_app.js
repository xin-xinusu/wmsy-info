import { useContext, useEffect, useState } from 'react'
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
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
import GoogleAnalytics from "../Client/Components/GoogleAnalytics";

const AppStateComponent = (props) => {
  const { appState: { appModes } } = useContext(GlobalContext)

  return (
    <div 
      className={`column ${ appModes.popup.isOpen ? 'scroll-lock' : ''} state-holder page-transition-wrapper` }
      style={{
        width: '100%',
        position: "relative",
        overflowY: 'hidden'
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


// Main app
export default function App({ Component, pageProps: {session, ...pageProps} }) {
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [windowSize, setWindowSize] = useState(
    DeviceDimensions.MaxMobileWidth
  );

  // Show loading animation and smoothen transition when changing routes - clean transitions - LFG
  useEffect(() => {
    // Function to handle the start of route changes
    const handleStart = (url) => {
      if (url !== router.asPath) {
        setLoading(true);
  
        // Add transition class for the exiting page
        const wrapper = document.querySelector('.page-transition-wrapper');
        if (wrapper) {
          wrapper.classList.add('page-transition-wrapper-exit');
        }
      }
    };
  
    // Handle the completion and errors (if any) during route changes
    const handleComplete = (url) => {
      if (url === router.asPath) {
        setLoading(false);
  
        // Remove transition class for the entering page
        const wrapper = document.querySelector('.page-transition-wrapper');
        if (wrapper) {
          wrapper.classList.remove('page-transition-wrapper-exit');
        }
      }
    };
  
    // Subscribe to router events
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  
    // Cleanup when the component is finished
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]); // Only run if the router location changes

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
    <WindowContext.Provider value={{ windowSize, setWindowSize }}>
      <GoogleAnalytics />
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
    )
}
