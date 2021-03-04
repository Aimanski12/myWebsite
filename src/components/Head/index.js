import React from 'react';
import Head from 'next/head'

export default function HeadTag({ data }) {
  const siteName = 'Aimanadlawan.com'
  const baseUrl = 'https://webs-rho.vercel.app'

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{data.title}</title>
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      <link rel="canonical" ref={baseUrl}/>

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={data.title} />
      <meta property="og:url" content={`${baseUrl}${data.url}`} />
      <meta property="og:type" content="website"/>
      <meta property="og:description" content={data.desc} />
      <meta property="og:image" content={`${baseUrl}/images/thumbnail_v1.jpg`} />

      <meta itemProp="name" content={data.title} />
      <meta itemProp="url" content={`${baseUrl}${data.url}`} />
      <meta itemProp="description" content={data.desc} />
      <meta itemProp="thumbnailUrl" content={`${baseUrl}/images/thumbnail_v1.jpg`} />
      <link rel="image_src" href={`${baseUrl}/images/thumbnail_v1.jpg`} />
      <meta itemProp="image" content={`${baseUrl}/images/thumbnail_v1.jpg`} />

      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:image" content={`${baseUrl}/images/thumbnail_v1.jpg`} />
      <meta name="twitter:url" content={`${baseUrl}${data.url}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={data.desc}/>

      <meta name="description" content={data.desc} />
      <meta name="author" content="Aiman Adlawan"/>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="thumbnail" content={`${baseUrl}/images/thumbnail_v1.jpg`}/>
    </Head>
  );
}
