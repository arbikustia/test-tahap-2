import React from "react";
import { Skeleton } from "antd";

  const Loader = () => {
    return (
      <div className="flex flex-col gap-32 px-10 py-32">
        <Skeleton loading active />
        <Skeleton loading active />
        <Skeleton loading active />
      </div>)
  }

export default Loader