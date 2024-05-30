"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { DashboardItem } from "@/types/app.types";
import { DashboardItems } from "./config";
import { Button } from "@/components/ui/button";
import { MenuIcon, SettingsIcon } from "lucide-react";
import { create } from "zustand";
import { cn } from "@/lib/utils";

const DashboardMenuItem = ({ path, name }: DashboardItem) => {
  return (
    <Link href={path}>
      <div className="flex min-h-10 items-center justify-center p-4">
        <h2 className="font-black text-black">{name}</h2>
      </div>
    </Link>
  );
};

const DashboardSliderHead = () => {
  return (
    <Link href={"/"}>
      <div className="flex min-h-10 items-center justify-center bg-green-400 p-2">
        <h1 className="font-black text-white">GarageSales</h1>
      </div>
    </Link>
  );
};

const DashboardSliderBody = () => {
  return DashboardItems.map(
    (
      item: React.JSX.IntrinsicAttributes & { name: any; path: any },
      index: React.Key | null | undefined,
    ) => <DashboardMenuItem key={index} {...item} />,
  );
};

interface DashboardSliderState {
  slider: boolean;
  toggleSlider: () => void;
}

const useDashboardSlider = create<DashboardSliderState>((set, get) => ({
  slider: true,
  toggleSlider: () => set(() => ({ slider: !get().slider })),
}));

const DashboardContentHead = () => {
  const { toggleSlider } = useDashboardSlider();

  return (
    <header className="flex items-center justify-between p-2">
      <Button
        variant="outline"
        size="icon"
        className="font-black text-black"
        onClick={() => toggleSlider()}
      >
        <MenuIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="font-black text-black">
        <SettingsIcon className="h-4 w-4" />
      </Button>
    </header>
  );
};

const Dashboard = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { slider } = useDashboardSlider();

  return (
    <section className="flex">
      {slider && (
        <div className={cn("min-h-screen w-1/3 bg-green-300 lg:w-1/5")}>
          <DashboardSliderHead />
          <DashboardSliderBody />
        </div>
      )}
      <div className={cn("min-h-screen", slider ? "w-2/3 lg:w-4/5" : "w-full")}>
        <DashboardContentHead />
        {children}
      </div>
    </section>
  );
};

export default Dashboard;
