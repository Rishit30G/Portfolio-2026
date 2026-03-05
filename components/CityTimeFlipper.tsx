'use client';

import { useRef } from 'react';
import { ClockIcon } from '@phosphor-icons/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const CITIES = [
  { name: 'LOS ANGELES', timezone: 'America/Los_Angeles' },
  { name: 'NEW YORK', timezone: 'America/New_York' },
  { name: 'LONDON', timezone: 'Europe/London' },
  { name: 'PARIS', timezone: 'Europe/Paris' },
  { name: 'NEW DELHI', timezone: 'Asia/Kolkata' },
  { name: 'TOKYO', timezone: 'Asia/Tokyo' },
  { name: 'SYDNEY', timezone: 'Australia/Sydney' },
] as const;

function getTimeInZone(timezone: string): [string, string] {
  const now = new Date();
  const formatted = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: timezone,
  }).format(now);
  return formatted.split(':') as [string, string];
}

export default function CityTimeFlipper() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const citySlots = wrapper.querySelectorAll<HTMLElement>('.city-slot');
      const timeSlots = wrapper.querySelectorAll<HTMLElement>('.time-slot');
      const current = { city: citySlots[0], time: timeSlots[0] };
      const next = { city: citySlots[1], time: timeSlots[1] };

      function populate(cityEl: HTMLElement, timeEl: HTMLElement, idx: number) {
        const city = CITIES[idx];
        const [h, m] = getTimeInZone(city.timezone);
        cityEl.textContent = city.name;
        timeEl.querySelector('.h')!.textContent = h;
        timeEl.querySelector('.m')!.textContent = m;
      }

      populate(current.city, current.time, 0);
      gsap.set([next.city, next.time], { yPercent: 100 });

      gsap.to(wrapper.querySelectorAll('.colon'), {
        opacity: 0.15,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      const flipTimer = setInterval(() => {
        indexRef.current = (indexRef.current + 1) % CITIES.length;
        populate(next.city, next.time, indexRef.current);
        gsap.set([next.city, next.time], { yPercent: 100 });

        const tl = gsap.timeline({
          onComplete() {
            populate(current.city, current.time, indexRef.current);
            gsap.set([current.city, current.time], { yPercent: 0 });
            gsap.set([next.city, next.time], { yPercent: 100 });
          },
        });

        tl.to([current.city, current.time], {
          yPercent: -100,
          duration: 0.45,
          ease: 'power3.in',
        });
        tl.fromTo(
          [next.city, next.time],
          { yPercent: 100 },
          { yPercent: 0, duration: 0.45, ease: 'power3.out' },
          '-=0.2'
        );
      }, 8000);

      const clockTimer = setInterval(() => {
        const [h, m] = getTimeInZone(CITIES[indexRef.current].timezone);
        current.time.querySelector('.h')!.textContent = h;
        current.time.querySelector('.m')!.textContent = m;
      }, 1000);

      return () => {
        clearInterval(flipTimer);
        clearInterval(clockTimer);
      };
    },
    { scope: wrapperRef }
  );

  return (
    <div
      ref={wrapperRef}
      className="text-md font-medium font-mono text-[#000000] tracking-wide inline-flex items-center gap-1.5"
    >
      {/* Time display */}
      <div className="relative overflow-hidden" style={{ height: '1.3em' }}>
        <span className="invisible whitespace-nowrap block" aria-hidden="true">
          00:00
        </span>
        <div className="time-slot whitespace-nowrap absolute inset-x-0 top-0">
          <span className="h">00</span>
          <span className="colon">:</span>
          <span className="m">00</span>
        </div>
        <div className="time-slot whitespace-nowrap absolute inset-x-0 top-0">
          <span className="h">00</span>
          <span className="colon">:</span>
          <span className="m">00</span>
        </div>
      </div>

      <ClockIcon size={18} weight="regular" className="mt-0.5 shrink-0" />

      {/* City display */}
      <div className="relative overflow-hidden" style={{ height: '1.3em' }}>
        <span className="invisible whitespace-nowrap block" aria-hidden="true">
          LOS ANGELES
        </span>
        <div className="city-slot whitespace-nowrap absolute inset-x-0 top-0">
          &nbsp;
        </div>
        <div className="city-slot whitespace-nowrap absolute inset-x-0 top-0">
          &nbsp;
        </div>
      </div>
    </div>
  );
}
