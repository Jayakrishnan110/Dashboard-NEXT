import Charts from "@/components/dashboard/charts";
import Create_role from "@/components/dashboard/create_role";
import List from "@/components/dashboard/list";
import Table from "@/components/dashboard/table";
import React from "react";

const Sidebar = () => {
  return (
    <div className=" p-4 grid md:grid-cols-3 grid-cols-1 grid-rows-2 gap-4">
      <Charts />
      <List />
      <Create_role />
      <Table />
    </div>
  );
};

export default Sidebar;
