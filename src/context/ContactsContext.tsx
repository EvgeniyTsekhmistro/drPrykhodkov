import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { ContactsDialog } from '../components/ui/ContactsDialog';

type ContactsContextValue = {
  openContacts: () => void;
};

const ContactsContext = createContext<ContactsContextValue | null>(null);

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  const openContacts = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ openContacts }), [openContacts]);

  return (
    <ContactsContext.Provider value={value}>
      {children}
      <ContactsDialog open={open} onClose={handleClose} />
    </ContactsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContacts = () => {
  const ctx = useContext(ContactsContext);
  if (!ctx) {
    throw new Error('useContacts must be used within a ContactsProvider');
  }
  return ctx;
};
