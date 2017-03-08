import React from "react";

import { Block } from "../Block";

import "./BlockList.css";

function toBlockList(ItemComponent, title) {
  const BlockList = ({ list, onItemClick }) => {
    const focusable = !!onItemClick;

    if (!list.length) {
      return <span>Loading...</span>;
    }

    return (
      <ul className="BlockList" data-title={title}>
        {list.map(item => (
          <li
            className="BlockList__item"
            key={item.id}
            onClick={focusable && (() => onItemClick(item.id))}
          >
            <Block focusable={focusable}>
              <ItemComponent {...item} />
            </Block>
          </li>
        ))}
      </ul>
    );
  };

  return BlockList;
}

export default toBlockList;
