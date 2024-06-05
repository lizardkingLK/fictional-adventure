import { Database } from "./db.types";

// dashboard
export type DashboardItem = { name: string; path: string };

// customer
type CustomerType = Database["public"]["Tables"]["Customer"]["Row"];

export interface CustomerUserType extends CustomerType {
  User: Database["public"]["Tables"]["User"]["Row"];
}
