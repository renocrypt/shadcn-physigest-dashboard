"use client";

import {
  BellDotIcon,
  CircleDollarSign,
  Inbox,
  Logs,
  Settings2Icon,
  ShieldEllipsis,
  User,
} from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import UserItem from "./UserItem";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        { link: "/", text: "Profile", icon: <User /> },
        { link: "/", text: "Inbox", icon: <Inbox /> },
        { link: "/", text: "Billing", icon: <CircleDollarSign /> },
        { link: "/", text: "Notifications", icon: <BellDotIcon /> },
      ],
    },
    {
      group: "Settings",
      items: [
        { link: "/", text: "General Settings", icon: <Settings2Icon /> },
        { link: "/", text: "Privacy", icon: <ShieldEllipsis /> },
        { link: "/", text: "Logs", icon: <Logs /> },
      ],
    },
  ];
  return (
    <div className="fixed flex flex-col w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((item: any, itemKey: number) => (
                  <CommandItem
                    key={itemKey}
                    className="flex gap-2 cursor-pointer"
                  >
                    {item.icon}
                    {item.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
    </div>
  );
}
