import React from "react";
import Header from "./Header";
import Cards from "./Cards";
import Data from "./Data";


export default function(){
  return (
    <main>
      <Header />
      <Cards data={Data} />
    </main>
  )
}