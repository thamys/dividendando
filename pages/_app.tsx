import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import "../styles/globals.css";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDMizCI2yHiiOKmnXYObqdMPaBRW0-bRZc",

  authDomain: "dividendando.firebaseapp.com",

  projectId: "dividendando",

  storageBucket: "dividendando.appspot.com",

  messagingSenderId: "617189238187",

  appId: "1:617189238187:web:6d5bc575102664d8bc9eee",

  measurementId: "G-KYP4F4HNCB",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
