import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <body className="body-properties">

        <Component {...pageProps}> </Component>

      </body>
    </>
  );
}

export default MyApp;
