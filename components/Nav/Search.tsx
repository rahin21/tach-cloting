import React from "react";
import { Input } from "../ui/input";
import { Search } from 'lucide-react'

function SearchInput() {
  return (
    <div className="flex items-center">
      <Search size={16} className="absolute ms-3" />{" "}
      <Input
        placeholder="Search"
        className="outline-none focus-visible:outline-none rounded-full border-none hover:bg-red-100 focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-offset-2 ps-9"
      />
    </div>
  );
}

export default SearchInput;
