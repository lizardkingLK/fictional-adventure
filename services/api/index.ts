import { supabase } from "@/lib/db";
import { Database } from "@/types/db.types";

export const getCustomers = async () => {
  const { data: customers, error } = await supabase
    .from("Customer")
    .select("*");
  if (error) {
    console.error({ error });
    return null;
  }

  return customers as Database["public"]["Tables"]["Customer"]["Row"][];
};
