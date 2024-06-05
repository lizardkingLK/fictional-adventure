import { supabase } from "@/lib/db";
import { Database } from "@/types/db.types";
import { QueryData } from "@supabase/supabase-js";

export const getCustomersWithUserData = async () => {
  const customersWithUserDataQuery = supabase
    .from("Customer")
    .select(
      `id, ownerId, state, status, userId, User (id, firstname, lastname)`,
    );

  const { data: customers, error } = await customersWithUserDataQuery;
  if (error) {
    console.error({ error });
    return null;
  }

  return customers as QueryData<typeof customersWithUserDataQuery>;
};

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
