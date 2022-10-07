import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=BioRhyme+Expanded:wght@700&family=Monoton&family=Orbitron:wght@700&family=Press+Start+2P&family=Shadows+Into+Light&family=Squada+One&family=Teko:wght@600&display=swap" rel="stylesheet" />
        <meta name="description" content="Veja quanto tempo falta para o próximo feriado nacional" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://proximo-feriado-nacional.vercel.app" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Feriados Brasil" />
        <meta property="og:description" content="Veja quanto tempo falta para o próximo feriado nacional" />
        <meta property="og:url" content="https://proximo-feriado-nacional.vercel.app" />
        <meta property="og:site_name" content="Feriados Brasil" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Veja quanto tempo falta para o próximo feriado nacional" />
        <meta name="twitter:title" content="Feriados Brasil" />
        <meta property="og:image" content="https://proximo-feriado-nacional.vercel.app/thumb.jpg" />
        <meta property="og:image:type" content="image/jpeg" />  
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}