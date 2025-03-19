import React from "react";
import HeaderNav from "../components/header/header";
import Hero from "../components/hero/hero";

const SelfPickPage = () => {
  return (
    <>
<HeaderNav />
<Hero heroId={3} />
      <h2>Välkommen till vårt blomster-självplock!</h2>
      <p>Här kan du plocka dina egna blommor direkt från fältet och skapa en personlig bukett fylld med säsongens vackraste blommor. Välj bland praktfulla dahlior, strålande solrosor, färgstarka zinnior, skira blomstermorötter och eleganta lejongap.</p>
      <h3>Såhär gör du:</h3>
      <ol>
        <li>Ta en sax och hink (finns vid ingången).</li>
        <li>Gå ut på fältet och plocka de blommor du vill ha.</li>
        <li>När du är klar, kom tillbaka till boden för att väga och betala.</li>
      </ol>
      <h3>Betalning</h3>
      <p>Swisha till: 123 300 01 30</p>
      <p>Tack för att du plockar med omsorg och lämnar fältet lika vackert som du fann det.</p>
      <p>Välkommen – vi ser fram emot att dela blomsterprakten med dig!</p>
    
    </>

  );
};

export default SelfPickPage;
