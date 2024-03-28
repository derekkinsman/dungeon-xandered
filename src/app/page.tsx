import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xandering the Dungeon',
}

export default function Page() {
  return <>
    <h1>Xandering [zan-der-ing]</h1>
    <p>verb</p>
    <ol>
      <li>to take credit for something someone else has made.</li>
    </ol>
  </>
}