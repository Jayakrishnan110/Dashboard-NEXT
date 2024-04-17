import Charts from "@/components/dashboard/charts";
import Create_role from "@/components/dashboard/create_role";
import List from "@/components/dashboard/list";
import Tables from "@/components/dashboard/table";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen overflow-auto p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
      <Charts />
      <List />
      <Create_role />
      <div className=" col-span-2 flex justify-end">
        <Tables />
      </div>
    </div>
  );
};

export default Sidebar;
