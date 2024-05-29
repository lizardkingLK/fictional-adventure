"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Database } from "@/types/db.types";

export const columns: ColumnDef<
  Database["public"]["Tables"]["Vehicle"]["Row"]
>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "customerId",
    header: "Customer",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "color",
    header: "Color",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "registration",
    header: "Registration",
  },
];
