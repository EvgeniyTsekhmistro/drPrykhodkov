import homepageBanner from '../../assets/homepage-banner.png';
import clinicDescription from '../../assets/clinic-description.png';
import ourServices from '../../assets/our-services.png';
import smile1 from '../../assets/smile1.png';
import smile1new from '../../assets/smile1-new.png';
import smile2 from '../../assets/smile2.png';
import smile2new from '../../assets/smile2-new.png';
import smile3 from '../../assets/smile3.png';
import smile3new from '../../assets/smile3-new.png';
import { Button } from "../ui/Button";
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PriceDialog } from '../ui/PriceDialog';
import { useContacts } from '../../context/ContactsContext';
import { scrollToSection } from '../lib/utils';

export const Home = () => {
  const [showPrices, setShowPrices] = useState(false)
  const { openContacts } = useContacts()
  const location = useLocation()

  const buttons = useMemo(() => [
    { title: 'Записатись на прийом', action: () => openContacts() },
    { title: 'Наші ціни', action: () => setShowPrices(true) },
  ], [openContacts]);

  const handleClosePricesDialog = useCallback(() => setShowPrices(false), []);

  // Header nav on another page hands off the target section via router state.
  useEffect(() => {
    const section = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (section) scrollToSection(section);
  }, [location.state]);

  return (
    <>
      <main>
        <section>
          <div className="h-[calc(100vh-92px)] relative flex items-center flex-col items-center justify-center overflow-hidden">
            <img
              src={homepageBanner}
              alt="banner"
              className="absolute top-0 left-0 min-w-full min-h-full object-cover z-[-1]"
            />
            <h1 className="mx-auto text-center text-4xl md:text-5xl text-white flex flex-col gap-4 px-8">
              <span>Ласкаво просимо до стоматологічної клініки</span>
              <span>PRYKHODKOV DENTAL CLINIC</span>
              <span>де ви знайдете стоматолога найвищого рівня</span>
            </h1>
            <ul className="p-0 m-0 flex gap-2 mt-10">
              {buttons.map((el) => (
                <li key={el.title}>
                  <Button onClick={el.action ?? undefined}>{el.title}</Button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="section-services"
          className="scroll-mt-[92px] flex flex-col md:flex-row gap-[70px] justify-center mt-[98px] max-w-[1080px] mx-auto px-8"
        >
          <div className='md:order-[-1] order-[1]'>
            <img
              src={ourServices}
              alt="our-services"
              className="mx-auto rounded-[20px] max-h-[700px]"
            />
          </div>
          <div className="flex justify-center flex-col w-[100%] md:max-w-[780px] md:w-[50%]">
            <h2 className="text-[42px] font-bold text-dark-green text-center md:text-left">Наші послуги</h2>
            <p className="text-dark-green mt-[28px] text-center md:text-left">
              Ми надаємо повний спектр стоматологічної допомоги:
            </p>
            <br />
            <ul className='list-disc pl-5'>
              <li>Терапевтична стоматологія – лікування карієсу, пульпіту та інших захворювань зубів.</li>
              <li>Ортопедична стоматологія – протезування, встановлення коронок, вінірів та реставрацій.</li>
              <li>Хірургічна стоматологія – видалення зубів, імплантація.</li>
              <li>Ортодонтія – встановлення брекет-систем для вирівнювання зубів.</li>
              <li>Пародонтологія – лікування та профілактика захворювань ясен.</li>
              <li>Професійна гігієна – чистка зубів, полірування, профілактика.</li>
              <li>Відбілювання зубів – сучасні та безпечні методики для сяючої усмішки.</li>
            </ul>

            <div className="flex gap-[14px] justify-center mt-[84px] font-normal">
              <Button className="bg-dark-green hover:opacity-80" onClick={openContacts}>
                <span className="flex gap-2 items-center">
                  <span>Записатись на прийом</span>
                </span>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="section-about"
          className="scroll-mt-[92px] flex flex-col md:flex-row gap-[70px] justify-center mt-[98px] max-w-[1080px] mx-auto px-8"
        >
          <div className="flex justify-center flex-col w-[100%] md:max-w-[780px] md:w-[50%]">
            <h2 className="text-[42px] font-bold text-dark-green text-center md:text-left">Опис</h2>
            <div className="text-dark-green mt-[28px]">
              <div>
                <p>Історія нашої клініки почалась ще в 1994 році — з маленького сімейного кабінету «Здорова родина». Ми росли, змінювали підхід, технології та назви, але незмінним залишилося головне — сімейна справа двох поколіннь сімʼї Приходькових, де досвід поєднується зі сучасним поглядом на стоматологію.</p>
              </div>

              <div>
              <h3 className='mt-3'>Особливе натхнення нам дає <strong>створення посмішок:</strong></h3>
              <ul className='mt-3'>
                <li><strong>Дизайн посмішки,</strong>  що дозволяє вам побачити бажаний результат ще до лікування.</li>
                <li><strong>Bідновлення беззубих щелеп та імплантація,</strong> що повертає пацієнтам жування, міміку і впевненість.</li>
              </ul>
            </div>
            <p className='mt-3'><strong>Наша місія</strong> — не просто лікувати зуби, а повертати людям радість, комфорт і гарну посмішку на довгі роки.</p>
            </div>
            <div className="flex gap-[14px] justify-center mt-[84px] font-normal">
              <Button className="bg-dark-green hover:opacity-80 p-[21px] font-normal">
                <span className="flex gap-2 items-center">
                  <a href='https://maps.app.goo.gl/yc8LVusZZEpykDHKA' target='_blank'>Знайти нас на google maps</a>
                </span>
              </Button>
            </div>
          </div>
          <div>
            <img
              src={clinicDescription}
              alt="clinic-description"
              className="mx-auto rounded-[20px] max-h-[700px]"
            />
          </div>
        </section>

        <section
          id="section-smiles"
          className="scroll-mt-[92px] flex flex-col md:flex-row gap-[70px] mt-[98px] max-w-[1280px] mx-auto px-8"
        >
           <div className="flex flex-col w-[100%]">
            <h2 className="text-[42px] font-bold text-dark-green text-center">Галерея посмішок</h2>
            <div className='flex flex-col md:flex-row gap-6 mt-6'>
              <div className='flex flex-col gap-6'>
                <img src={smile1} alt="smile 1" className='rounded-lg' />
                <img src={smile1new} alt="smile 1" className='rounded-lg' />
              </div>
              <div className='flex flex-col gap-6'>
                <img src={smile2} alt="smile 2" className='rounded-lg' />
                <img src={smile2new} alt="smile 2" className='rounded-lg' />
              </div>
              <div className='flex flex-col gap-6'>
                <img src={smile3} alt="smile 3" className='rounded-lg' />
                <img src={smile3new} alt="smile 3" className='rounded-lg' />
              </div>
            </div>
          </div>
        </section>
      </main>

      <PriceDialog open={showPrices} onClose={handleClosePricesDialog} />
    </>
  );
};
