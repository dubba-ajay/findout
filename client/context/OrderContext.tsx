import { createContext, useContext, useState, ReactNode } from "react";

export interface OrderItem {
  orderId: string;
  productId: string;
  productName: string;
  price: number;
  storeId: string;
  storeName: string;
  quantity: number;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: Date;
  image: string;
}

interface OrderContextType {
  orders: OrderItem[];
  addOrder: (order: Omit<OrderItem, "orderId" | "createdAt">) => void;
  confirmOrder: (orderId: string) => void;
  cancelOrder: (orderId: string) => void;
  getConfirmedOrders: () => OrderItem[];
  getPendingOrders: () => OrderItem[];
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<OrderItem[]>([]);

  const addOrder = (orderData: Omit<OrderItem, "orderId" | "createdAt">) => {
    const newOrder: OrderItem = {
      ...orderData,
      orderId: `ORD-${Date.now()}`,
      createdAt: new Date(),
    };
    setOrders((prev) => [newOrder, ...prev]);
  };

  const confirmOrder = (orderId: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.orderId === orderId ? { ...order, status: "confirmed" } : order
      )
    );
  };

  const cancelOrder = (orderId: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.orderId === orderId ? { ...order, status: "cancelled" } : order
      )
    );
  };

  const getConfirmedOrders = () => orders.filter((o) => o.status === "confirmed");
  const getPendingOrders = () => orders.filter((o) => o.status === "pending");

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        confirmOrder,
        cancelOrder,
        getConfirmedOrders,
        getPendingOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);

  // Return default context if not within provider
  if (!context) {
    return {
      orders: [],
      addOrder: () => {},
      confirmOrder: () => {},
      cancelOrder: () => {},
      getConfirmedOrders: () => [],
      getPendingOrders: () => [],
    };
  }

  return context;
};
