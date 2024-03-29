import React from "react";
import { Metadata } from 'next';
import page from '@styles/components/Page.module.scss';

export const metadata: Metadata = {
  title: 'Xandering the Dungeon',
  description: "It's 'Jaquaysing' and only 'Jaquaysing'.",

  openGraph: {
    title: 'Xandering the Dungeon',
    description: "It's 'Jaquaysing' and only 'Jaquaysing'.",
    url: 'https://xanderingthedungeon.com/',
    siteName: 'Xandering the Dungeon',
    images: [
      {
        url: 'https://xanderingthedungeon.com/card.png', // Must be an absolute URL
        width: 1280,
        height: 628,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Xandering the Dungeon',
    description: "It's 'Jaquaysing' and only 'Jaquaysing'.",
    images: ['https://xanderingthedungeon.com/card.png'], // Must be an absolute URL
  },
}

export default function Page() {
  return <section className={`${page.section}`}>
    <section className={`${page.word}`}>
      <h1 className={`${page.title}`}><span>Xandering</span> [zan-der-ing]</h1>
      <p className={`${page.type}`}>verb</p>
      <ol className={`${page.definitions}`}>
        <li className={`${page.definition}`}>to take credit for something someone else has made.</li>
      </ol>
    </section>
    <section className={`${page.additional}`}>
      <p className={`${page.confusion}`}>Words that May Be Confused with Xandering:</p>
      <p className={`${page.wordlist}`}><a href='https://jaquaysingthedungeon.com/'>Jaquaysing</a></p>
    </section>
    <section className={`${page.plugin}`}>
      <p><a href='https://github.com/zacbir/jaquaysing' target='_blank'>Jaquays the Internet</a> with this browser extension.</p>
    </section>
    <section className={`${page.footer}`}>
      <a href="https://derekkinsman.com/" target="_blank"><span className={`${page.sr_only}`}>Derek Kinsman dot com</span><img src="./snail.png" aria-hidden="true" className={`${page.snail}`} /></a>
    </section>
  </section>
}