import React from "react";
import Card from "../components/Card";

export default function page({params}: {params:{lang:string}}) {
  return (
    <section className="ml-container">
      <div className="grid grid-cols-3">
        <Card
          title="The Dark Knight"
          text="The Dark Knight is a 2008 superhero film directed by Christopher Nolan from a screenplay co-written with his brother Jonathan. Based on the DC Comics superhero Batman, it is the sequel to Batman Begins (2005) and the second installment in The Dark Knight Trilogy. The plot follows the vigilante Batman"
          href=""
          paramsLang={params.lang}
        />
      </div>
    </section>
  );
}
