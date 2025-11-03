import { Logo } from "../images/Logo"
import { 
  Dialog, 
  DialogContent,
  DialogHeader, 
  DialogTitle,
} from "./Dialog"

interface Props {
  open: boolean
  onClose: (open: boolean) => void
}

export const PriceDialog = ({ open, onClose }: Props) => {
  return <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="bg-white overflow-hidden h-[80vh] md:h-auto pr-0">
      <DialogHeader>
        <DialogTitle className="text-xl">Наші ціни</DialogTitle>
      </DialogHeader>
      <div className="absolute z-[-1] w-full h-full t-[20px] opacity-[0.1]">
        <span className="relative top-[33%]"><Logo /></span>
      </div>
      <div className="overflow-auto pr-4">
        <div className="flex flex-col gap-1">
        <h3 className="font-bold">Профілактика</h3>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Професійна гігієна</span>
          <span>2500 - 3000 грн</span>
        </div>
        <h3 className="font-bold mt-2">Терапія</h3>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Пломба фотополімерна</span>
          <span>1500 грн</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Пломба керамічна</span>
          <span>4500 грн</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Лікування каналів</span>
          <span>8000–15000 грн</span>
        </div>
        <h3 className="font-bold mt-2">Естетика</h3>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Реставрація зуба цирконієвим вініром</span>
          <span>10000 грн</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Реставрація зуба керамічним вініром</span>
          <span>15000 грн</span>
        </div>
        <h3 className="font-bold mt-2">Ортопедія</h3>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Коронка</span>
          <span>8000–10000 грн</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Вкладка цирконієва</span>
          <span>2400 грн</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Бюгельний протез</span>
          <span>21000 грн</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Повний знімний протез</span>
          <span>12000 грн</span>
        </div>
        <h3 className="font-bold mt-2">Хірургія</h3>
         <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Видалення зуба</span>
          <span>5000–10000 грн</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Аугментація ясенного гребеня</span>
          <span>20000 грн</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Відкритий синус-ліфтинг</span>
          <span>30000 грн</span>
        </div>
        <h3 className="font-bold mt-2">Імплантологія</h3>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Iмплантологічна система MIS C1</span>
          <span>15000 грн</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Конектор</span>
          <span>3000 грн</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1">Коронка з абатментом</span>
            <span>15000–20000 грн</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 mt-2">
          <h3 className="font-bold">Відбілювання</h3>
          <span>5000 грн</span>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  }