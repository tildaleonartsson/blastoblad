import React from "react";
import Hero from "../components/hero/hero";
import HeaderNav from "../components/header/header";
import TextImgGrid from "../components/textimggrid/textimggrid";
import ImgGrid from "../components/imggrid/imggird";
import ImgGridB from "../components/imggridb/imggrid-b";
import Footer from "../components/footer/footer";

const AboutPage = () => {
  return (
    <>
    
    <HeaderNav />
    <Hero heroId={4} />
    <div className="about-container">
    <p>Blast & Blad är ett familjeföretag som kombinerar en grönsaksbod och blomstersjälvplock, där tre generationer arbetar tillsammans för att erbjuda det bästa från vår odling. Förutom våra nyskördade grönsaker och färgsprakande blommor samarbetar vi med andra lokala bönder på Bjäre för att ge er ett ännu större utbud av närproducerade produkter. Med kärlek till både jorden och hantverket följer vi vår filosofi: "Från vår trädgård, till ert hem."</p>
    <p>Vi, Chatarina och Jonas, flyttade till Karstorpsvägen 256 i december 1996. Båda växte vi upp i villakvarter, men med föräldrar som odlade i sina trädgårdar. Kattis spenderade mycket tid på landet med sina kusiner när hon var liten, och det var därifrån hennes längtan att en dag bo på landet växte. När vi började leta efter vårt hem, hamnade vi här – i ett gult hus med vita knutar.</p>
    <p>Båda av oss började tidigt arbeta inom lantbruk. Redan i tredje klass började Kattis plocka jordgubbar och senare även hallon och ogräs. Jonas första jobb var på åkrarna utanför Torekov, där han plockade potatis. Idag arbetar Kattis som frisör i Laholm, och Jonas är fastighetsansvarig på Båstad Golfklubb.</p>
    <p>Vi har två barn, Filip (född 1998) och Tilda (född 2000). Under deras uppväxt började vi odla våra egna grönsaker för att ge dem nyttigare mat. Trädgårdslandet blev en plats för både lycka och avkoppling. Vad som började som en hobby växte med åren, och snart hade vi fler skördar än vi själva kunde konsumera. Vi delade vårt överskott med familj, vänner och grannar. En dag föreslog någon att vi skulle sälja det vi inte behövde, och det var där idén om en liten grönsaksbod föddes.</p>
    <p>Hösten 2023 bestämde vi oss för att 2024 skulle vara året vi gav vår idé en chans. När bygglovet beviljades på våren satte vi igång med att bygga ett större växthus och en liten bod för försäljning.</p>
    <p>Vid vår sida har vi Kattis mamma, Anna-Maj, som gärna spenderar tid med oss i trädgården. Hon hjälper till med allt från att plocka ogräs till att plantera tulpanlökar. Anna-Maj odlar fortfarande grönsaker i sitt villaområde och har rabatter fulla av blommor.</p>
    <p>Filip bor inte längre på Bjäre utan är programmerare i Hässleholm. Han har aldrig varit intresserad av att odla eller spendera tid i trädgården, men hjälper ibland till med musklerna när han är hemma på besök.</p>
    <p>Tilda studerar till front-end utvecklare, designar hemsidor (som denna) och ansvarar för all grafisk design för Blast & Blad. För att komma bort från datorn och arbeta med kroppen spenderar hon tid hos oss. Hennes hund Atlas uppskattar också att få springa löst på landet och vara med i trädgården.</p>
    </div>
    <ImgGrid 
    imgUrl1="https://placehold.co/600x400?text=item1" imgUrl2="https://placehold.co/600x400?text=item2" imgUrl3="https://placehold.co/600x400?text=item3"
    imgAlt1="Image 1" imgAlt2="Image 2" imgAlt3="Image 3"/>
    <div className="about-container">
    <h2>Våra Växthus</h2>
    <p>Genom åren har vi haft åtta olika växthus. Från de första 4 kvadratmetrarna 1997 har vi sedan 2024 en odlingsyta i växthus på 96 kvadratmeter. För tillfället är vi nöjda, men Jonas håller alltid ett öga på begagnade växthus till försäljning.</p>
    <p>År 1997 skulle en bekant göra sig av med sitt gamla växthus och det lilla glashuset på 4 kvadrat var där allt började. Några år senare fick vi tag på ett till växthus från Kattis kollega, och plötsligt hade vi två. De båda växthusen förstördes i stormen Simone den 29 oktober 2013.</p>
    <p>Våren 2014 köpte vi vårt första och ända helt nya växthus från Willab. Vi byggde upp det bredvid vår altan så att det även kunde fungera som uterum. Att odla på den lilla yta som blev kvar var en utmaning, men vi klarade oss. 2017 fick vi tag på ett växthus från en av Kattis kunder, och 2019 hittade Jonas ett växthus i Ödåkra som vi köpte för att slippa använda uterummet till tomatplantorna. År 2020 bytte vi ut ett växthus mot ett större som vi köpte i Halmstad.</p>
    <p>2022 fann Jonas ett nästan nytt växthus på 36 kvadratmeter på Blocket. Han sålde ett av de äldre och hämtade hem det nya, vilket vi då tyckte var absurt stort. Med hjälp av hundarna satte vi upp det, och det blev snabbt en viktig del av vår odling.</p>
    </div>
    <ImgGridB
    imgBUrl1="./images/växthus36/bygge/växthus36delar.jpg" imgBUrl2="./images/växthus36/bygge/växthus36hundarna.jpg" imgBUrl3="./images/växthus36/bygge/växthus36ritning.jpg"
    imgBAlt1="Växthus stomme på gräsmatta" imgBAlt2="Två hundar sitter i växthuset innan glasen är påsatta" imgBAlt3="Jonas ligger på mage och läser växthus ritning"/>
    <div className="about-container">
    <p>År 2024 köpte vi ett växthus på 60 kvadratmeter, som vi hämtade från Trollhättan. Det var ett stort jobb att montera ner och transportera växthuset, men vi lyckades få allt på plats inför säsongen. Vi har aldrig varit med om något så stort – eller så utmanande! Efter att ha bytt ut krossade glas och fått hjälp av Filip att hämta glas i Hässleholm, var vi äntligen klara.</p>
    </div>
    <ImgGrid
    imgUrl1="./images/växthus60/bygge/växthus60innanglas.jpg" imgUrl2="./images/växthus60/bygge/växthus60jonassvetsar.jpg" imgUrl3="./images/växthus60/bygge/växthus60materialträdgård.jpg"
    imgAlt1="växthus stomme" imgAlt2="jonas svetsar" imgAlt3="material i trädgården"
    />
    <div className="about-container">
    <h2>Boden</h2>
    <p>Frågan var var vi skulle sälja våra grönsaker och blommor. Vi bestämde oss för att bygga en bod närmare vägen och hittade en redskapsbod i Båstad som vi fick gratis. Med hjälp av en kranbil lyftes den från trädgården och kördes upp till oss på åsen.</p>
    <p>Boden var inte helt färdigbyggd, så vi ställde den tillfälligt på åkern. Att flytta den med traktor visade sig vara svårare än vi trott, och efter att ha tagit bort takpannor för att minska vikten fick vi ersätta några av dem. Vi bytte också ut delar av väggarna och målade både invändigt och utvändigt.</p>
    <p>När allt var klart för säsongen fick vi öppna med några hopfällbara bord i stället för en färdig butik – det var dags att börja sälja! 2025 planerar vi att flytta boden igen (förhoppningsvis klarar sig takpannorna denna gång) och bygga inredning innan vi öppnar.</p>
    </div>
    <ImgGridB
    imgBUrl1="./images/boden/flytt/bodenkranbil.jpg" imgBUrl2="./images/boden/flytt/bodenflyttaspåplats.jpg" imgBUrl3="./images/boden/bodeninne.jpg" />
    
    <Footer />
    </>
  );
};

export default AboutPage;