import React from 'react';
import Head from 'next/head'

export default function HeadTag({ data }) {

  const baseUrl = 'https://webs-rho.vercel.app'

  console.log(data)
  return (
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />



      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      <title>{data.title}</title>
      <meta name="author" content="Aiman Adlawan"/>


      <link rel="image_src" href={`${baseUrl}/images/thumbnail_v1.jpg`} />
      <meta name="thumbnail" content={`${baseUrl}/images/thumbnail_v1.jpg`}/>



      <link rel="canonical" ref={baseUrl}/>



      <meta itemprop="name" content={data.title} />
      <meta itemprop="url" content={`${baseUrl}${data.url}`} />
      <meta itemprop="description" content={data.desc} />
      <meta itemprop="thumbnailUrl" content={`${baseUrl}/images/thumbnail_v1.jpg`} />
      <meta itemprop="image" content={`${baseUrl}/images/thumbnail_v1.jpg`} />




      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.desc} />
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={`${baseUrl}${data.url}`} />
      <meta property="og:image" content={`${baseUrl}/images/thumbnail_v1.jpg`} />
      <meta property="og:site_name" content={baseUrl} />




      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.desc}/>
      <meta name="twitter:image" content={`${baseUrl}/images/thumbnail_v1.jpg`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={`${baseUrl}${data.url}`} />




      <meta name="description" content={data.desc} />



    </Head>
  );
}
