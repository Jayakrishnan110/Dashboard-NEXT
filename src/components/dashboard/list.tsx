import React from "react";

const List = () => {
  type Avatar = {
    name: string;
    url: string;
  };

  interface ISidebarItem {
    count: string;
    note: string;
    avatar: Avatar[];
  }

  return <div className="flex flex-col space-y-1"></div>;
};

export default List;
