import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
      style={{
        backgroundColor: "#FFFBF5",
        margin: "0px",
        width: "100vw",
        height: "100vh"
      }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
