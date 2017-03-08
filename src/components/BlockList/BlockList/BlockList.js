import React from "react";
import { BlockListItem } from "../..";

import "./BlockList.css";

function toBlockList(ItemComponent, title) {
  const BlockList = ({ list, onItemClick }) => {
    if (!list.length) {
      return <span>No data</span>;
    }

    return (
      <ul className="BlockList" data-title={title}>
        {list.map(item => (
          <BlockListItem
            key={item.id}
            item={item}
            onItemClick={onItemClick}
            ItemComponent={ItemComponent}
          />
        ))}
      </ul>
    );
  };

  return BlockList;
}

export default toBlockList;
