import React from "react";

import "./BlockList.css";

function toBlockList(ItemComponent, title) {
  const BlockList = ({ list }) => {
    if (list == null) {
      return <span>Loading...</span>;
    }

    return (
      <ul className="BlockList" data-title={title}>
        {list.map(item => (
          <li className="BlockList-item" key={item.id}>
            <ItemComponent {...item} />
          </li>
        ))}
      </ul>
    );
  };

  return BlockList;
}

export default toBlockList;
