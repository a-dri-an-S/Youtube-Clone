import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import React from "react";
import Avatar from "../styles/Avatar";
import { ChannelIcon, SignoutIcon } from "./Icons";

function UserDropdown() {
  return (
    <Menu>
      <MenuButton>
        <Avatar
          className="pointer"
          src="https://dummyimage.com/100x100"
          alt="username avatar"
        />
      </MenuButton>
      <MenuList>
        <MenuItem onSelect={() => null}>
          <ChannelIcon />
          <span>Your channel</span>
        </MenuItem>
        <MenuItem onSelect={() => null}>
          <SignoutIcon />
          <span>Sign out</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserDropdown;
