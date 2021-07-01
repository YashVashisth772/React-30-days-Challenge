import React, { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log(getItems());
  }, [getItems]);
  // console.log("getItems", props.getItems());
  return <></>;
}
