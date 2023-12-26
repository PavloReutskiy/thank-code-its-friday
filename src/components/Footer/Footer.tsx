'use client';

import { SubscribeForm } from '../SubscribeForm';

export const Footer = (): JSX.Element => {
  return (
    <footer className='min-h-[300px] bg-accent_background'>
      <div className='max-w-[85%] xxl:max-w-[1224px] mx-auto py-6'>
        <SubscribeForm className="flex gap-2" />
      </div>
    </footer>
  );
};
