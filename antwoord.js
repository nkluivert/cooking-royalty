document.getElementById("vragenlijst").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Function to get the selected radio button value
    const getValue = (name) => {
        const checked = document.querySelector(`input[name="${name}"]:checked`);
        return checked ? checked.value : null;
    };

    // Get values for each selection
    const keuzeRecept = getValue("keuzeRecept");
    const keuzeStemming = getValue("keuzeStemming");
    const keuzeEnergie = getValue("keuzeEnergie");
    const keuzeMoeilijkheid = getValue("keuzeMoeilijkheid");
    const keuzeTijd = getValue("keuzeTijd");

    // Resultaat container 
    const resultaat = document.getElementById("resultaat");

    // Check of alles is ingevuld
    if (!keuzeRecept || !keuzeStemming || !keuzeEnergie || !keuzeMoeilijkheid || !keuzeTijd) {
        resultaat.textContent = "⚠️ Vul alsjeblieft alle vragen in.";
        return;
    }

    // Recept aanbevelingen op basis van antwoorden
    let aanbevolenRecept = "";

    if (keuzeRecept === "ontbijt" && keuzeEnergie === "geenEnergie" && keuzeTijd === "20min") {
        aanbevolenRecept = "Oatmeal , kaasbroodjes";
    } else if (keuzeRecept === "ontbijt" && keuzeMoeilijkheid === "eenvoudigRecept" && keuzeTijd === "30min") {
        aanbevolenRecept = "American Pancakes";
    } else if (keuzeRecept === "ontbijt" && keuzeTijd === "min40" && keuzeMoeilijkheid === "uitgebreidRecept") {
        aanbevolenRecept = "Bananen brood";
    }

    if (keuzeRecept === "lunch" && keuzeEnergie === "geenEnergie" && keuzeTijd === "20min" && keuzeMoeilijkheid=== "simpelRecept") {
        aanbevolenRecept = "De Blt, Broodje caprese";
    } else if (keuzeRecept === "lunch" && keuzeMoeilijkheid === "eenvoudigRecept" && keuzeTijd === "20min") {
        aanbevolenRecept = "Tomatensoep, Libanese manakish";
    }

    if (keuzeRecept === "avondeten" && keuzeEnergie === "geenEnergie" && keuzeTijd === "20min" && keuzeMoeilijkheid === "simpelRecept") {
        aanbevolenRecept = "Quesedilla";
    } else if (keuzeRecept === "avondeten" && keuzeMoeilijkheid === "eenvoudigRecept" && keuzeTijd === "30min" && keuzeEnergie === "normaal") {
        aanbevolenRecept = "Hamburger met friet, Pasta bolognese ";
    } else if (keuzeRecept === "avondeten" && keuzeTijd === "min40" && keuzeEnergie ==="veelEnergie") {
        aanbevolenRecept = "Chinese fried rice";
    }

    // Laat resulaat zien van vragenlijst
    resultaat.textContent = `👉 Aanbevolen recept: ${aanbevolenRecept}`;
});
