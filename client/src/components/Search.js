// @ts-nocheck
import React from "react";
import Wrapper from "../styles/Search";
import { SearchIcon } from "./Icons";

function Search() {
  return (
    <Wrapper>
      <form>
        <input id="search" type="text" placeholder="Search" />
        <button aria-label="Search videos and channels" type="submit">
          <SearchIcon />
        </button>
      </form>
    </Wrapper>
  );
}

export default Search;
