import React from 'react';
import Link from 'next/link'

export default function Copyright() {
  return (
    <div className="copyright-wrapper content-center">
      <span className='copyright'>© Aiman Adlawan 2019. All Right Reserved.</span>
      <Link href='/privacy' scroll={false}>
        <a className='privacy'>Privacy Policy</a>
      </Link>
    </div>
  );
}
