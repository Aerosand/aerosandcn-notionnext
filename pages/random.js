// pages/random.js

import { useEffect } from 'react'

export default function RandomRedirect() {
  useEffect(() => {
    const urls = [
      'https://www.oasisand.cn/',
      'https://blog.cuger.cn/',
      'https://wangyunzi.com/',
    ];
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = randomUrl;
  }, []);

  return <p>正在跳转中...</p>;
}
