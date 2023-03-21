// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google';
import type { ReactElement } from 'react';

import styles from './page.module.css';

const openSans = Open_Sans({ subsets: [ 'latin' ], weight: [ '300', '400', '700' ] });

export default function Home(): ReactElement {
  return (
    <main style={openSans.style}>
      <div className={styles.container}>
        <h1>Who Is QC Career School?</h1>
        <p>We're a online school with offices in Rockville, MD, USA; Ottawa, ON, Canada; Watford, United Kingdom; and Sydney, Australia. We've been in business since 1984.</p>
        <h2>Why Are You Charging Me?</h2>
        <p>This is either a one-time charge (if you paid in full) or part of an installment plan for one of our courses, such as</p>
        <ul>
          <li><a href="https://www.qcmakeupacademy.com">Makeup Artistry</a></li>
          <li><a href="https://www.qcdesignschool.com">Interior Decorating</a></li>
          <li><a href="https://www.qceventplanning.com">Event and Wedding Planning</a></li>
          <li><a href="https://www.qcpetstudies.com">Dog Grooming</a></li>
        </ul>
        <p>See a full list of our courses <a href="https://www.qccareerschool.com">here</a>.</p>
        <h2>Still Unsure?</h2>
        <p>Call the School offices and speak with one of our student support specialists:</p>
        <table>
          <tbody>
            <tr><td><strong>North America:</strong></td><td className={styles.centered}>1-833-600-3751</td></tr>
            <tr><td><strong>United Kingdom:</strong></td><td className={styles.centered}>0800 066 4734</td></tr>
            <tr><td><strong>Australia:</strong></td><td className={styles.centered}>1800 531 923</td></tr>
            <tr><td><strong>New Zealand:</strong></td><td className={styles.centered}>0800 451 979</td></tr>
            <tr><td><strong>Rest of World:</strong></td><td className={styles.centered}>+1 613 749 8248</td></tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
