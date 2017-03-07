import React from "react";
import classNames from "classnames";

import "./BlockList.css";

function toBlockList(ItemComponent, title) {
  const BlockList = ({ list, onItemClick }) => {
    const clickable = !!onItemClick;
    const itemClass = classNames("BlockList-item", {
      "BlockList-item--clickable": clickable
    });

    if (!list.length) {
      return <span>Loading...</span>;
    }

    return (
      <ul className="BlockList" data-title={title}>
        {list.map(item => (
          <li
            className={itemClass}
            key={item.id}
            onClick={clickable && (() => onItemClick(item.id))}
          >
            <ItemComponent {...item} />
          </li>
        ))}
      </ul>
    );
  };

  return BlockList;
}

export default toBlockList;
