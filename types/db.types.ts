export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      Customer: {
        Row: {
          id: number
          ownerId: number
          state: Database["public"]["Enums"]["State"]
          status: Database["public"]["Enums"]["State"]
          userId: number
        }
        Insert: {
          id?: number
          ownerId: number
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          userId: number
        }
        Update: {
          id?: number
          ownerId?: number
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "Customer_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Job: {
        Row: {
          id: number
          ownerId: number
          state: Database["public"]["Enums"]["State"]
          status: Database["public"]["Enums"]["State"]
        }
        Insert: {
          id?: number
          ownerId: number
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
        }
        Update: {
          id?: number
          ownerId?: number
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
        }
        Relationships: []
      }
      Manager: {
        Row: {
          email: string
          id: number
          ownerId: number
          password: string
          state: Database["public"]["Enums"]["State"]
          status: Database["public"]["Enums"]["State"]
          userId: number
        }
        Insert: {
          email: string
          id?: number
          ownerId: number
          password: string
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          userId: number
        }
        Update: {
          email?: string
          id?: number
          ownerId?: number
          password?: string
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "Manager_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Order: {
        Row: {
          id: number
          jobId: number
          orderDate: string
          ownerId: number
          receiveDate: string
          state: Database["public"]["Enums"]["State"]
          status: Database["public"]["Enums"]["State"]
          totalPrice: number
        }
        Insert: {
          id?: number
          jobId: number
          orderDate?: string
          ownerId: number
          receiveDate?: string
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          totalPrice?: number
        }
        Update: {
          id?: number
          jobId?: number
          orderDate?: string
          ownerId?: number
          receiveDate?: string
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          totalPrice?: number
        }
        Relationships: [
          {
            foreignKeyName: "Order_jobId_fkey"
            columns: ["jobId"]
            isOneToOne: false
            referencedRelation: "Job"
            referencedColumns: ["id"]
          },
        ]
      }
      Product: {
        Row: {
          amount: number
          description: string | null
          id: number
          name: string
          orderId: number
          ownerId: number
          price: number
          state: Database["public"]["Enums"]["State"]
          status: Database["public"]["Enums"]["State"]
          unitPrice: number
        }
        Insert: {
          amount: number
          description?: string | null
          id?: number
          name: string
          orderId: number
          ownerId: number
          price?: number
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          unitPrice?: number
        }
        Update: {
          amount?: number
          description?: string | null
          id?: number
          name?: string
          orderId?: number
          ownerId?: number
          price?: number
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          unitPrice?: number
        }
        Relationships: [
          {
            foreignKeyName: "Product_orderId_fkey"
            columns: ["orderId"]
            isOneToOne: false
            referencedRelation: "Order"
            referencedColumns: ["id"]
          },
        ]
      }
      Sale: {
        Row: {
          bill: number
          customerId: number
          endDate: string
          id: number
          ownerId: number
          startDate: string
          state: Database["public"]["Enums"]["State"]
          status: Database["public"]["Enums"]["State"]
          vehicleId: number
        }
        Insert: {
          bill?: number
          customerId: number
          endDate?: string
          id?: number
          ownerId: number
          startDate?: string
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          vehicleId: number
        }
        Update: {
          bill?: number
          customerId?: number
          endDate?: string
          id?: number
          ownerId?: number
          startDate?: string
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          vehicleId?: number
        }
        Relationships: [
          {
            foreignKeyName: "Sale_customerId_fkey"
            columns: ["customerId"]
            isOneToOne: false
            referencedRelation: "Customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Sale_vehicleId_fkey"
            columns: ["vehicleId"]
            isOneToOne: false
            referencedRelation: "Vehicle"
            referencedColumns: ["id"]
          },
        ]
      }
      User: {
        Row: {
          addressLine1: string | null
          addressLine2: string | null
          city: string | null
          country: string | null
          firstname: string
          id: number
          lastname: string
          ownerId: number
          postalCode: string | null
          role: Database["public"]["Enums"]["Role"]
          state: Database["public"]["Enums"]["State"]
          status: Database["public"]["Enums"]["State"]
        }
        Insert: {
          addressLine1?: string | null
          addressLine2?: string | null
          city?: string | null
          country?: string | null
          firstname: string
          id?: number
          lastname: string
          ownerId: number
          postalCode?: string | null
          role?: Database["public"]["Enums"]["Role"]
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
        }
        Update: {
          addressLine1?: string | null
          addressLine2?: string | null
          city?: string | null
          country?: string | null
          firstname?: string
          id?: number
          lastname?: string
          ownerId?: number
          postalCode?: string | null
          role?: Database["public"]["Enums"]["Role"]
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
        }
        Relationships: []
      }
      Vehicle: {
        Row: {
          category: Database["public"]["Enums"]["Category"]
          color: string | null
          customerId: number
          id: number
          name: string
          ownerId: number
          registration: string
          state: Database["public"]["Enums"]["State"]
          status: Database["public"]["Enums"]["State"]
          year: number | null
        }
        Insert: {
          category: Database["public"]["Enums"]["Category"]
          color?: string | null
          customerId: number
          id?: number
          name: string
          ownerId: number
          registration: string
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          year?: number | null
        }
        Update: {
          category?: Database["public"]["Enums"]["Category"]
          color?: string | null
          customerId?: number
          id?: number
          name?: string
          ownerId?: number
          registration?: string
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Vehicle_customerId_fkey"
            columns: ["customerId"]
            isOneToOne: false
            referencedRelation: "Customer"
            referencedColumns: ["id"]
          },
        ]
      }
      Worker: {
        Row: {
          id: number
          ownerId: number
          state: Database["public"]["Enums"]["State"]
          status: Database["public"]["Enums"]["State"]
          userId: number
        }
        Insert: {
          id?: number
          ownerId: number
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          userId: number
        }
        Update: {
          id?: number
          ownerId?: number
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "Worker_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      WorkerJob: {
        Row: {
          id: number
          jobId: number
          ownerId: number
          state: Database["public"]["Enums"]["State"]
          status: Database["public"]["Enums"]["State"]
          workerId: number
        }
        Insert: {
          id?: number
          jobId: number
          ownerId: number
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          workerId: number
        }
        Update: {
          id?: number
          jobId?: number
          ownerId?: number
          state?: Database["public"]["Enums"]["State"]
          status?: Database["public"]["Enums"]["State"]
          workerId?: number
        }
        Relationships: [
          {
            foreignKeyName: "WorkerJob_jobId_fkey"
            columns: ["jobId"]
            isOneToOne: false
            referencedRelation: "Job"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "WorkerJob_workerId_fkey"
            columns: ["workerId"]
            isOneToOne: false
            referencedRelation: "Worker"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Category: "HATCHBACK" | "CEDAN" | "COUPE" | "VAN" | "JEEP"
      Role: "MANAGER" | "WORKER" | "CUSTOMER"
      State: "ACTIVE" | "INACTIVE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
