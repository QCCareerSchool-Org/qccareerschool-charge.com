import type { PropsWithChildren, ReactElement } from 'react';
import './global.scss';

export const metadata = {
  title: 'QC Career School',
  description: 'We\'re a online school with offices in Rockville, MD, USA; Ottawa, ON, Canada; Watford, United Kingdom; and Sydney, Australia. We\'ve been in business since 1984.',
};

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
