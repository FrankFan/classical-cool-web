import { StoreProvider } from "@/hooks/useStore";
import { Outlet } from "umi";

export default function Layout() {
  return (
    <StoreProvider>
      <Outlet />
    </StoreProvider>
  );
}
