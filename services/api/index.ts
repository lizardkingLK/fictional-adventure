import { supabase } from "@/lib/db";

export const getCustomers = async () => {
  const { data: customers, error } = await supabase
    .from("Customer")
    .select("*");
  if (error) {
    console.error({ error });
    return null;
  }

  return customers;
};
