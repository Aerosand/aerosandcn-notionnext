// pages/random.js

import { useEffect } from 'react'

export default function RandomRedirect() {
  useEffect(() => {
    const urls = [
      'https://example.com/a',
      'https://example.com/b',
      'https://example.com/c',
    ];
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = randomUrl;
  }, []);

  return <p>正在跳转中...</p>;
}
