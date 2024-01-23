let busRoute = [
    {
        busNumber: "111",
        busRoutes:
            "Porur Signal(6:35 AM), Valasarawakkam (6:50 AM), Alwar thiruNagar, Virukambakkam, Avichi school(7:00 AM), Chinmayanagar, Koyambedu Roundana, Thirumangalam (7:15 AM), Rettery(7:20 AM), Vinayagapuram, College (8:00 AM), College (8:00 AM)",
        busStarting: "Thiruvanmiyur",
    },
    {
        busNumber: "112",
        busRoutes:
            "Tambaram BT (6.20 am), Chrompet (6.25), Pallavaram (6.28), Meenambakkam (6.35), Alandur (6.40), Mount Station (6.45),  Guindy Kathipara (6.50) ,  Ambal Nagar- K.K.Nagar Pondicherry House (6.55) , Vadapalani Signal (7.00) , Chimaya Nagar (7.07)   Koyambedu  Roundtana (7.10)- College (8.10)",
        busStarting: "Tambaram",
    },
    {
        busNumber: "121",
        busRoutes:
            "Porur Signal (6.40 am), Valasarawakkam (6.50), Saligramam (6.55) Avichi, Vadapalani Bus Terminus, Ambika Empire (7.05), MMDA, Koyambedu (7.10), Ambedkar Nagar (Temple School) (7.25), College (8.10).  ",
        busStarting: "Porur",
    },
    {
        busNumber: "131",
        busRoutes:
            "Tiruvallur Bus Terminal (6.20 am), Thiruninravur (6.40), Pattabiram (6.55), Avadi Bus Terminus (7.00), Thirumulaivoyal (7.05), Ambattur Rakki (7.10), Pudur, Puzhal Camp (7.35), College (8.10).",
        busStarting: "Tiruvallur",
    },
    {
        busNumber: "132",
        busRoutes:
            "Ambattur TI Cycles (7.00 am), Britannia, Korattur (7.10), Lucas–TVS (7.15) ,Redhill (7.30), Padiyanallur (7.35), Karanodai (7.40), College (8.10)",
        busStarting: "Ambattur",
    },
    {
        busNumber: "135",
        busRoutes:
            "Ambathur Rakki (7.10 am), Oragadam (7.15), Pudur (7.20), Kallikuppam (7.23), Puzhal Camp (7.35)   College (8.10).  ",
        busStarting: "Ambathur Rakki",
    },
    {
        busNumber: "136",
        busRoutes:
            "Avadi Bus Terminus (7.00), Thirumulaivoyal (7.05), Ambattur Rakki (7.10), Pudur, Puzhal Camp (7.35), College (8.10).",
        busStarting: "Avadi Bus Terminus",
    },
    {
        busNumber: "141",
        busRoutes:
            "T.Nagar Panagal Park (6.45 am) , Pondy Bazaar (6.50) , Vani Mahal (6.52) , Vidhyodaya School  , Valluvarkottam (6.57) ,Nungabakkam PoliceStation, Sterling Road ,Choolaimedu (7.00) , Arun Hotel (7.05), Anna Arch, Roundtana (7.10), K4, Nathamuni (7.20), Senthil Nagar(7.25), College (8.00)",
        busStarting: "T.Nagar",
    },
    {
        busNumber:"145",
        busRoutes:"Ram Theatre (6.40), Kodambakkam, Meenakshi College (6.50), Mahalingapuram, Chetpet Signal (6.55) ,  Ega (6.58) ,  Aminjikarai Market ,  Shenoy Nagar (7.05),  Chinthamani (7.10), Lotus Colony, K4, Nathamuni (7.15), Vinayagapuram(7.20) , College (8.00)",
        busStarting:"Kodambakkam"
    },
    {
        busNumber:"153",
        busRoutes:"Mogappair West Depot (7.00AM), Golden Flats (7.05), Collector Nagar Bus Stop (7.05), Padikuppam Road (7.07)- Thirumangalam, (7.10) Anna Nagar West Depot (7.20), College (8.10).",
        busStarting:"Mogappair West"
    },
    {
        busNumber:"156",
        busRoutes:"Mogappair East (7.00) – Collector Nagar Bus Stop (7.05) – Padikuppam Road (7.07)- Anna Nagar West Depot (7.15) – College (8.10).",
        busStarting:"Mogappair East"
    },
    {
        busNumber:"157",
        busRoutes:"Thiruverkadu Arch (6.50AM) – Maduravoyal (7.05) - Anna Nagar 13th Main Road (7.10) – 11th Main Road (7.13) – 9th Main Road (7.15) - Anna Nagar West Depot (7.20) – College (8.10).",
        busStarting:"Thiruverkadu Arch"
    },
    {
        busNumber:"162",
        busRoutes:"Mandaveli post office(6.15) - Kaliappa (6.25)  – Mylapore (6.30)  – Luz  – Royapettah Hospital (6.35)  – Triplicane Post Office (6.40) – Tarapore Towers  – Pudupet  – Egmore Commissioner Office  – Dasaprakash (7.00) –  ESI – Ayanavaram (7.10) – ICF – Villivakkam (7.20)  – College (8.00)",
        busStarting:"Mylapore"
    },
    {
        busNumber:"163",
        busRoutes:"Kellys (6.45) - Abirami theatre - Purasawalkam Tank (6.50) – Perambur Bus Depot (7.00) – Perambur Church (7.15) –Ajantha Bakery - Venus – Agaram (7.15) – Kolathur – Rettary – College (8.00).",
        busStarting:"Kellys"
    },
    {
        busNumber:"166",
        busRoutes:"Thiru Vi Ka Nagar (7.00 am) - S.R.P Colony (7.05) – Periyar Nagar (7.10) - Kolathur Anna Statue (7.15)   – Moogambikai – Rettary (7.20) – College (8.00). ",
        busStarting:"Thiru Vi Ka Nagar"
    },
    {
        busNumber:"172",
        busRoutes:"Tollgate – I (6.45 am) – New Washermenpet – MM Theatre – Washermen Postoffice – Maharani (6.55) – Mint (7.05) - Basin Bridge – Vyasarpadi (7.10) – Sharma Nagar – College (8.00).",
        busStarting:"Tollgate"
    },
    {
        busNumber: "173",
        busRoutes: "Kasimedu R2 PS (6.50 am) – Kalmandapam – Royapuram Market  (6.55) –  Stanley Hospital – Mint (7.05)– Basin Bridge –  M.K.B Nagar – M.R. Nagar – Erukencherry  - Moolakadai (7.15) – Madhavaram Roundana – 100 ft Road (7.20) – College (8.00).",
        busStarting: "Kasimedu"
    },
    {
        busNumber: "175",
        busRoutes: "Manali Market (7.00 am) - Mathur (7.05) –   Milk Colony FG – SG (7.10) – Arul Nagar (7.15) - Moolakadai (7.25) – College (8.00).",
        busStarting: "Manali Market"
    },
    {
        busNumber: "181",
        busRoutes: "Rajakadai (6.35 am) – Kaladipet  – Thiruvottiyur Police Station  – Ellaiamman Koil (6.40)  – Theradi  – Vellanchetti School  – Ajax (6.50)  – Periyar Nagar  – Wimco – Ennore Lift Gate (6.55)  – Jothi Nagar (6.57) – Sathyamoorthy Nagar -  MFL Corner  –   College (8.00).",
        busStarting: "Thiruvottiyur"
    },
    {
        busNumber: "182",
        busRoutes: " Manali New Town (6.55 am) – MMDA – Nappalayam (7.10) – Athipattu (7.15) – Minjur Railway Station (7.28) – Kesavapuram – Nallur - Venbakkam (7.40) – Ponneri Police Station (7.42) – Anna Statue (7.45) – Krishnapuram - Andarkuppam – Thatchur – Peruvoyal – College (8.00).",
        busStarting: "Manali New Town"
    },
    {
        busNumber: "183",
        busRoutes: "Ponneri Bus Terminals (7.35 am) - Anna Statue (7.45) – Krishnapuram (7.50) – Andarkuppam (7.52) – Thatchur (7.55) – Peruvoyal (8.00)  – College (8.05).",
        busStarting: "Ponneri Bus Terminals"
    },
    {
        busNumber: "191",
        busRoutes: "Sunnambukulam (7.15am) - Elavur (7.30) – Pethikkuppam (7.35) Gummidipoondi (7.40) – College (8.10).",
        busStarting: "Sunnambukulam"
    },
    {
        busNumber: "192",
        busRoutes: "Uthukottai (7.10 am) – Palavakkam (7.25) – Periyapalayam (7.40) – Arani (7.50) – College (8.10).",
        busStarting: "Uthukottai"
    },
    {
        busNumber: "194",
        busRoutes: "Manavalan Nagar (6.35 am) – Tiruvallur Raiway Station (6.40)- Tiruvallur GH (6.45)  - Theradi (6.50) – Ekadu (6.55) - Thamaraipakkam kootroad (7.15)  Kanniputhur (7.40) – Janapanchathiram (7.50)  – College (8.10)",
        busStarting: "Manavalan Nagar"
    },

];
export default busRoute;
