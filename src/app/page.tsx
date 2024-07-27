import Calendar from "@/components/Cards/Calendar";
import General from "@/components/Cards/General";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-[16px]">
        <General />
        <div className="grid gap-[16px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
    </div>
  );
}
