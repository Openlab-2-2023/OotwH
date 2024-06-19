document.addEventListener('DOMContentLoaded', () => {
    const jokes = [
        "Ako sa volá hračka, ktorá sa predáva ako suvenír v okolí Černobyľu? Má-Tri-Očká🪆.",
        "Viete čo je najlepšie na židoch? Ako rýchlo sa vedia vypariť. ",
        "Viete čo vchádza dverami a vychádza komínom? Židia.",
        "Vieš aký je rozdiel medzi Židom a Mikulášom? Mikuláš ide dole komínom.",
        "Viete čo sa stane keď vám Žid ukáže kúzelnícky trik? Vyparí sa.",
        "Viete prečo Hitler nemal vodičák? Lebo keď sa ho opýtali kde je plyn tak povedal tretie dvere naľavo.",
        "Vieš aká je najobľúbenejšia pesnička žida? Pec nám spadla.",
        "Prečo vozičkár nemôže ísť do basy? Lebo už sedí.",
        "Viete ako sa povie vozičkárovi čo horí? Hotwheels.",
        "Viete ako sa povie Autistovi s pištoľou? Špeciálne sily.",
        "Viete čo vám žid nikdy nepovie v aute? Pridaj plyn.",
        "Viete čo robí žid keď vidí popolník? Hľadá príbuzných.",
        "Viete kto boli najväčší kúzelníci? Židia. Prišli vlakom a odleteli komínom.",
        "Paradox: Čím viac máme samovrahov, tým menej máme samovrahov...",
        "Viete prečo deti v Afrike nejedia lieky? Lebo je na nich napísané až po jedle.",
        "Viete kto sa vracia domov z tábora? No židia to nebudú.",
        "Sedí babka na koľaji nepočuje vlak o chvíľu má rušňovodič na okienku fľak.",
        "Čo nedostane dieťa s rakovinou na Vianoce? No predsa hrebeň.",
        "Boh stvorí židov. Boh stvorí Ježiša. Židia zabijú Ježiša. Boh vytvorí Hitlera.",
        "Minule som pichal jednu cigánku, bolo to perfektné, no potom sa mi zlomil nôž.",
        "Nekrofil spoznal svoju lásku na patológii. Vôbec sa nebránila.",
        "Prečo sa kanibal rozišiel so svojím dievčaťom? Už mu nebola po chuti.",
        "Čierny humor je ako nohy. Niekto ho má a niekto nie.",
        "Viete kde je najviac židov? V atmosfére.",


    ];

    const jokeContainer = document.getElementById('joke');
    const jokeButton = document.getElementById('joke-button');

    jokeButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        jokeContainer.textContent = jokes[randomIndex];
    });
});


