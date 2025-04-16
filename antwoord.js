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

    // Specifieke combinaties
    if (
        keuzeRecept === "ontbijt" && keuzeEnergie === "geenEnergie" && keuzeTijd === "20min"
    ) {
        aanbevolenRecept = "Oatmeal, Kaasbroodjes";
    } else if (keuzeRecept === "lunch" && keuzeEnergie === "geenEnergie" && keuzeTijd === "20min" && keuzeMoeilijkheid === "simpelRecept") {
        aanbevolenRecept = "BLT sandwich, Broodje caprese";

    } else if (keuzeRecept === "lunch" && keuzeMoeilijkheid === "eenvoudigRecept" && keuzeTijd === "20min") {
        aanbevolenRecept = "Bowl of goodness, Libanese manakish";

    } else if (keuzeRecept === "avondeten" && keuzeEnergie === "geenEnergie" && keuzeTijd === "20min" && keuzeMoeilijkheid === "simpelRecept") {
        aanbevolenRecept = "Quesadilla";

    } else if (keuzeRecept === "avondeten" && keuzeMoeilijkheid === "eenvoudigRecept" && keuzeTijd === "30min" && keuzeEnergie === "normaal") {
        aanbevolenRecept = "Noodles met een nootje, Pasta bolognese";

    } else if (keuzeRecept === "avondeten" && keuzeTijd === "min40" && keuzeEnergie === "veelEnergie") {
        aanbevolenRecept = "Chinese fried rice";
    }

    // Losse voorkeuren (fallback)
    else if (keuzeRecept === "ontbijt") {
        aanbevolenRecept = "Oatmeal, De vroege vogelwrap";
    } else if (keuzeRecept === "lunch") {
        aanbevolenRecept = "Bowl of goodness, Broodje caprese";
    } else if (keuzeRecept === "avondeten") {
        aanbevolenRecept = "Quesadilla, Noedels met een nootje";
    }


    console.log("Aanbevolen recept:", aanbevolenRecept);
    // Laat resulaat zien van vragenlijst
    resultaat.textContent = `👉 Aanbevolen recept: ${aanbevolenRecept}`;
});
