import { MarkovChain, TextGenerator } from './markov.js';
import { stalin } from './inputTexts.js';

// newMarkov(`Microsoft said Tuesday the company would comply with a preliminary ruling by Federal District Court Judge Ronald H. Whyte that Microsoft is no longer able to use the Java Compatibility Logo on its packaging and websites for Internet Explorer and Software Developers Kit for Java. "We remain confident that once all the facts are presented in the larger case, the court will find Microsoft to be in full compliance with its contract with Sun," stated Tom Burt, Associate General Counsel for Microsoft Corporation. "We are disappointed with this decision, but we will immediately comply with the Court's order." Microsoft has been in the forefront of helping developers use the Java programming language to write cutting-edge applications. The company has committed significant resources so that Java developers have the option of taking advantage of Windows features when writing software using the Java language. Providing the best tools and programming options will continue to be Microsoft's goal. "We will continue to listen to our customers and provide them the tools they need to write great software using the Java language," added Tod Nielsen, General Manager for Microsoft's Developer Relations Group/Platform Marketing.`, true);

// newMarkov(`Han ble etter Möngkes død i 1259 mongolenes kaghan, og hans rike strakte seg fra Nord-Kina i øst til Russland og Persia i vest. I de første årene hadde han sin residens i Karakorum, en telt/jurtby vest i Mongolia. Siden grunnla han i 1264–1267 en ny residens i Jenking (dagens Beijing, på mongolsk Khanbaliq (eldre transkripsjon Kanbaluk), «khanens by», og som Marco Polo oppfattet som Cumbuluk). Hans sommerhovedstad, Xanadu, ble omspunnet i myter for sin prakt.
//
// Det kinesiske Song-riket ble erobret fra nord i 1277, og Kublai styrtet dynastiet Song. Han hadde nå kontroll over hele Kina. Men hans gjentatte forsøk på å erobre Japan 1274 og 1281 via Korea (se mongolinvasjonene av Japan) og hans angrep på Java i 1292 mislyktes. Han førte også krig i Burma og Tonkin (dagens Vietnam), som underkastet seg som vasallstater, og han underla seg Tibet.
//
// I Khanbaliq holdt han et glitrende og mektig hoff, noe Marco Polo fikk oppleve i årene 1275–1292, og engasjerte seg i utdannelse og kunnskap, handel, sysselsetting og samferdsel. Kublai var nysgjerrig på kristendommen, og da han fikk besøk av Niccolo og Maffeo Polo, Marco Polos far og onkel, i 1263, da han fremdeles holdt til i Karakorum, ba han dem be paven om å sende 100 kristne misjonærer. Men pavestolen grep ikke den store sjansen til å kunne kristne mongolene og dermed hele Sentral-Asia, og Kublai Khan gikk til slutt over til buddhismen.
//
// Han valgte seg den tibetanske guruen Drogön Chögyal Phagpa som åndelig rådgiver. Det var Phagpa som hadde fått Kublai Khan til å konvertere til den tibetanske buddhismen og Phagpa rettferdiggjorde mongolenes styre ved å framstille den mongolske keiser som en Chakravartin, en universell buddhistisk konge som regjerer velvillig over hele verden.
//
// Kublai-khan bygde i 1272 Trommetårnet i Beijing. Dette ble restaurert under Ming-dynastiet og fikk da sitt nåværende utseende. Kublai Khan grunnla også Konfuciustempelet i Beijing som senere ble bygd om av Kublai-khans sønnesønn.`)

// newMarkov(stalin, true);

const text = document.getElementById("inputText"),
    k = document.getElementById("k"),
    M = document.getElementById("M"),
    output = document.getElementById("outputContainer");

document.getElementById("generateButton").addEventListener("click", () => {
    const mark = new TextGenerator(text.value, false, k.value, M.value);

    output.innerHTML = mark.generate();
});
