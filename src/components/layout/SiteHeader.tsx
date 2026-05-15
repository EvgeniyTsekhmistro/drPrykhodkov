import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, UserCircle, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo as SmallLogo } from '../Logo';
import { useContacts } from '../../context/ContactsContext';
import { scrollToSection } from '../lib/utils';
import { PHONE } from '../../constants';

const NAV_LINK_CLASS = 'no-underline text-light-black text-sm font-medium';
const MOBILE_LINK_CLASS =
  'w-full py-4 text-white text-xl border-b border-white/20 text-center hover:text-teal transition-colors duration-200';

export const SiteHeader = () => {
  const { openContacts } = useContacts();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === '/';

  const navItems = useMemo(
    () => [
      { title: 'Послуги', section: 'section-services' },
      { title: 'Про нас', section: 'section-about' },
      { title: 'Галерея посмішок', section: 'section-smiles' },
    ],
    [],
  );

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const onNavItemClick = useCallback(
    (section: string) => {
      if (isHome) scrollToSection(section);
      else navigate('/', { state: { scrollTo: section } });
    },
    [isHome, navigate],
  );

  const onMobileNavClick = useCallback(
    (section: string) => {
      setMenuOpen(false);
      // Wait for the menu slide-out before scrolling on the same page.
      if (isHome) setTimeout(() => scrollToSection(section), 350);
      else navigate('/', { state: { scrollTo: section } });
    },
    [isHome, navigate],
  );

  return (
    <header id="site-header" className="sticky top-0 z-10">
      <nav className="flex items-center justify-between px-1 min-[375px]:px-6 py-4 bg-white shadow-md gap-4">
        <Link to="/" className="flex gap-2 items-center no-underline">
          <SmallLogo className="w-10 h-10 md:w-15 md:h-15" />
          <div className="flex-col md:flex">
            <p className="font-bold text-xl uppercase text-black">Prykhodkov</p>
            <p className="text-gray-600 text-sm uppercase">dental clinic</p>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((el) => (
            <li
              key={el.title}
              className="py-4 border-t-1 border-transparent hover:border-t-1 hover:border-teal duration-300 cursor-pointer"
            >
              <Button variant="link" onClick={() => onNavItemClick(el.section)}>
                {el.title}
              </Button>
            </li>
          ))}
          <li className="py-4 border-t-1 border-transparent hover:border-t-1 hover:border-teal duration-300 cursor-pointer">
            <Link to="/blog" className={NAV_LINK_CLASS}>
              Блог
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button
            className="bg-dark-green hover:opacity-80"
            onClick={openContacts}
          >
            <span className="uppercase flex gap-2 items-center">
              <UserCircle size={16} />
              <span>Записатись на прийом</span>
            </span>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Відкрити меню"
        >
          <Menu size={28} className="text-dark-green" />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-dark-green transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex gap-2 items-center">
            <SmallLogo className="w-10 h-10 [&_g]:fill-white" />
            <div className="flex flex-col">
              <p className="font-bold text-xl uppercase text-white">
                Prykhodkov
              </p>
              <p className="text-gray-300 text-sm uppercase">dental clinic</p>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Закрити меню"
            className="p-2"
          >
            <X size={28} className="text-white" />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-2 mt-12 px-6">
          {navItems.map((el) => (
            <li key={el.title} className="w-full">
              <button
                className={MOBILE_LINK_CLASS}
                onClick={() => onMobileNavClick(el.section)}
              >
                {el.title}
              </button>
            </li>
          ))}
          <li className="w-full">
            <Link
              to="/blog"
              className={`block ${MOBILE_LINK_CLASS} no-underline`}
              onClick={() => setMenuOpen(false)}
            >
              Блог
            </Link>
          </li>
        </ul>

        <div className="flex flex-col items-center gap-4 mt-10 px-6">
          <Button
            className="bg-teal hover:opacity-80 w-full justify-center py-4 text-lg"
            onClick={openContacts}
          >
            <span className="uppercase flex gap-2 items-center">
              <UserCircle size={18} />
              <span>Записатись на прийом</span>
            </span>
          </Button>
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <a
            href={`tel:${PHONE}`}
            className="text-white text-lg font-light hover:text-teal transition-colors"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
};
