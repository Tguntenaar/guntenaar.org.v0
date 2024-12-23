import React from "react";
// TODO refactor
import BoltNew from "./BoltNew";
import Colorful from "./page1";
import Minimal from "./page";
import Grey from "./app/page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * Generated some variants of the initial landing page.
 * BoltNew is one
 * Page is another
 */

function App() {
  return (
    <div>
      {/* Add a dropdown menu to the top right of the page that switches between the variants */}

      {/* <div className="absolute top-0 right-0">
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Minimal</DropdownMenuItem>
            <DropdownMenuItem>Colorful</DropdownMenuItem>
            <DropdownMenuItem>Grey</DropdownMenuItem>
            <DropdownMenuItem>BoltNew</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}

      <Minimal />
      <Colorful />
      <Grey />
      <BoltNew />
    </div>
  );
}

export default App;
