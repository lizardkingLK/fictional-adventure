"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Database } from "@/types/db.types";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<
  Database["public"]["Tables"]["Vehicle"]["Row"]
>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
