import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="app">
      <main className={"pageWrapper"}>
        <Outlet />
      </main>
    </div>
  );
};
