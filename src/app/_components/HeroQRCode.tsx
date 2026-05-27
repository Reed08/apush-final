'use client';

import { QRCodeSVG } from 'qrcode.react';

export default function HeroQRCode({ url }: { url: string }) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='p-3 rounded-lg' style={{ background: '#F5F1EA' }}>
        <QRCodeSVG value={url} size={96} fgColor='#241710' bgColor='#F5F1EA' />
      </div>
      <p className='font-body text-background/60 text-xs tracking-wide'>Scan to open on phone</p>
    </div>
  );
}
