import react from "react";
import "./textimggrid.css";

const TextImgGrid = () => {
    return (
        <div className="tig-grid-container">
            <div className="tig-grid-item-1">
                <h2 className="tig-grid-header">Boden - Från redskapskjul till grönsaksbod</h2>
                <p>Var skulle vi sälja våra grönsaker och blommor? Vi bestämde oss för att sätta upp en bod närmare vägen och hittade en redskapsbod nere i Båstad som skänktes bort. Med hjälp av en kranbil lyftes den ut från trädgården och kördes upp den till oss på åsen.</p>
                <p>Platsen där boden skulle stå var dock inte helt färdig än, så vi ställde den på åkern tillfälligt. Att flytta den med traktor senare visade sig vara svårare än planerat. Till slut fick vi plocka ner majoriteten av takpannorna för att minska vikten, men alla överlevde tyvärr inte och fick ersättas. Dessutom behövde delar av väggarna bytas ut, och vi målade både invändigt och utvändigt.</p>
                <p>Det var mycket som hände runt omkring, och till sist fick vi helt enkelt smälla upp några hopfällbara bord – det var redan dags att öppna för säsongen!</p>
                <p>I år, 2025, planerar vi att flytta boden igen (förhoppningsvis klarar sig alla takpannor denna gång). Målet är att hinna bygga inredning innan vi öppnar.</p>
            </div>
            <div className="tig-grid-item-2">
                <img src="images/boden/bodenflyttaspåplats.jpg" alt="" />
            </div>
            <div className="tig-grid-item-3">
                <img src="images/boden/bodeninne.jpg" alt="" />
            </div>
            <div className="tig-grid-item-4">
                <img src="images/boden/bodenkranbil.jpg" alt="" />
            </div>
        </div>
    );
};

export default TextImgGrid;