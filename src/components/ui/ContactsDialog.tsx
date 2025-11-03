import { MessageSquare, Phone, Send } from "lucide-react"
import { Logo } from "../images/Logo"
import { 
  Dialog, 
  DialogContent,
  DialogHeader, 
  DialogTitle,
} from "./Dialog"
import { Button } from "./Button"
import { openWithFallback } from "../lib/utils"
import { PHONE } from "../../constants"

interface Props {
  open: boolean
  onClose: (open: boolean) => void
}

const TELEGRAM_USERNAME = "@drPrykhodkov";
const VIBER_NUMBER_ENC = encodeURIComponent(PHONE);

export const ContactsDialog = ({ open, onClose }: Props) => {
  const handleViber = () => {
    openWithFallback(
      `viber://chat?number=${VIBER_NUMBER_ENC}`,
      "https://www.viber.com/en/download/"
    );
  };

   const handleTelegram = () => {
    openWithFallback(
      `tg://resolve?domain=${TELEGRAM_USERNAME}`,
      `https://t.me/${TELEGRAM_USERNAME}`
    );
  };

  return <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="bg-white overflow-hidden">
      <DialogHeader>
        <DialogTitle className="text-xl">Наші контакти</DialogTitle>
      </DialogHeader>
      <div className="absolute z-[-1] w-full h-full t-[20px] opacity-[0.1]">
        <Logo />
      </div>
      <div className="flex flex-col gap-2">
        <Button className="bg-dark-green hover:bg-dark-green-transparent">
          <a href={`tel:${PHONE}`} aria-label="Call us" className="gap-2 flex items-center">
            <Phone size={16} />
            Дзвінок {PHONE}
          </a>
        </Button>

        <Button className="bg-tg-blue hover:bg-tg-blue-transparent" onClick={handleTelegram}>
          <a
            href={`https://t.me/${TELEGRAM_USERNAME}`}
            target="_blank"
            rel="noopener"
            aria-label="Open Telegram"
            className="gap-2 flex items-center"
          >
            <Send size={16} />
            <span>Telegram</span>
          </a>
        </Button>

        <Button className="bg-viber-purple hover:bg-viber-purple-transparent" onClick={handleViber}>
          <a
            href={`viber://chat?number=${VIBER_NUMBER_ENC}`}
            aria-label="Open Viber"
            className="gap-2 flex items-center"
          >
            <MessageSquare size={16} />
            Viber
          </a>
        </Button>
      </div>
    </DialogContent>
  </Dialog>
}