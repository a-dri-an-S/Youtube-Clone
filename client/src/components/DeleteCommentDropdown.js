import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import React from "react";
import { DeleteIcon, SettingsIcon } from "./Icons";

function DeleteCommentDropdown() {
  const isCommentAuthor = true;

  if (isCommentAuthor) {
    return (
      <div>
        <Menu>
          <MenuButton>
            <SettingsIcon />
          </MenuButton>
          <MenuList>
            <MenuItem onSelect={() => null}>
              <DeleteIcon />
              <span>Delete Comment</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    );
  }

  return null;
}

export default DeleteCommentDropdown;
