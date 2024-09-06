import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function NewsLetter() {
  return (
    <div className="flex items-start justify-center gap-10 my-10">
      <h1 className="text-3xl mt-3">NewsLetter</h1>
      <div>
        Sing up to our newsletter and we’ll keep you up to date with the latest
        arrivals
        <div className="mt-5">
          <label htmlFor="email" className="font-medium">
            Email*
          </label>
          <div className="flex justify-end ">
            <Input
              id="email"
              type="email"
              className=" border-b-2 border-black border-x-0 border-t-0 rounded-none focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-offset-2"
            />
            <Button
              type="submit"
              className="absolute bg-transparent text-black text-lg"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
