import { GMap } from '../ui/GMap';
import { Logo } from '../images/Logo';
import { PHONE } from '../../constants';

export const SiteFooter = () => (
  <footer className="flex flex-col bg-white mt-[98px] overflow-hidden">
    <div className="flex gap-2 flex-col md:flex-row">
      <div className="flex-1 flex">
        <GMap />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-8 relative">
        <div className="absolute z-[0] w-full h-full t-[20px] opacity-[0.1]">
          <Logo />
        </div>
        <h2 className="text-[36px] md:text-[42px] font-normal font-light">
          Корисна інформація
        </h2>
        <div className="flex flex-col">
          <h3 className="text-teal text-[14px] font-medium uppercase">
            Наш телефон
          </h3>
          <p className="font-light">{PHONE}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-teal text-[14px] font-medium uppercase">
            Завітайте до нас!
          </h3>
          <p className="font-light">Prykhodkov Dental clinic</p>
          <p className="font-light">Сікорського, 4В</p>
          <p className="font-light">Київ, Україна</p>
        </div>
      </div>
    </div>
    <div className="flex bg-dark-green text-xs text-white py-4 px-8 mt-4 md:mt-0 justify-center">
      Copyright © 2025 Prykhodkov Dental Clinic. All rights reserved
    </div>
  </footer>
);
