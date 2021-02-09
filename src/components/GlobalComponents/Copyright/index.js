import React from 'react';
import Link from 'next/link'

export default function Copyright() {
  return (
    <div className="copyright-wrapper content-center font-1">
      <span className='copyright'>© Aiman Adlawan 2019. All Right Reserved.</span>
      <Link href='/privacy'>
        <a className='privacy'>Privacy Policy</a>
      </Link>
    </div>
  );
}
