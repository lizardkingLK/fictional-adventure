import { DataTable } from "@/components/table";
import React from "react";
import { columns } from "./columns";
import { Database } from "@/types/db.types";
import { Button } from "@/components/ui/button";
import { PencilIcon, PlusIcon, RecycleIcon } from "lucide-react";

async function getData(): Promise<
  Database["public"]["Tables"]["Vehicle"]["Row"][]
> {
  return [
    {
      id: 1,
      category: "CEDAN",
      color: "red",
      customerId: 1,
      name: "Toyota",
      ownerId: 1,
      registration: "2000ToyotaCedanRed",
      state: "ACTIVE",
      status: "ACTIVE",
      year: 2000,
    },
  ];
}

const Vehicles = async () => {
  const data = await getData();

  return (
    <section>
      <header className="flex items-center justify-between p-2">
        <h1 className="font-black">Vehicles</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
          >
            <PlusIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <PencilIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <RecycleIcon className="h-4 w-4" />
          </Button>
        </div>
      </header>
      <div className="p-2">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default Vehicles;
