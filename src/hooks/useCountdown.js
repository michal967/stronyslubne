import { useEffect, useState } from 'react';

export default function useCountdown(targetDate) {
  const calc = () => {
    const target = new Date(targetDate).getTime();
    const now = Date.now();
    const diff = Math.max(0, target - now);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line
  }, [targetDate]);
  return time;
}
