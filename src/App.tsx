import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ArrangeHorizontal } from "iconsax-react";

function App() {
  return (
    <div className="grid place-items-center w-screen h-screen">
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-4xl w-full mx-auto">
        <div className="flex animate-pulse space-x-8">
          <div className="w-28 h-28 rounded-full bg-slate-200"></div>
          <div className="flex-1 space-y-6">
            <div className="h-4 bg-slate-200 rounded "></div>
            <div className=" grid grid-cols-3 gap-6">
              <div className="col-span-2 h-4 rounded bg-slate-200"></div>
              <div className="col-span-1 h-4 rounded bg-slate-200"></div>
            </div>
            <div className="h-4 bg-slate-200 rounded "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
