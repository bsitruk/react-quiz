import React, { Component } from "react";
import { Block } from "../..";

import "./BlockListItem.css";

class BlockListItem extends Component {
  _onClick = () => {
    this.props.onItemClick(this.props.item.id);
  }
  
  render() {
    const { item, onItemClick, ItemComponent } = this.props;
    const focusable = !!onItemClick;
    return (
      <li
        className="BlockList__item"
        onClick={focusable && this._onClick}
      >
        <Block focusable={focusable}>
          <ItemComponent item={item} />
        </Block>
      </li>
    );
  }
}

export default BlockListItem;
