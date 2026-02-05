
/* ===== BREAKING NEWS LIVE ===== */
let tickerRunning = true;
let refreshTime = 30;
let expanded = false;

/* ===== DUMMY DATA ===== */
const tickerData = [

    {
        title: "Ghana Approves $244M Agricultural Subsidy Package",
        desc: "Major development in Ghana's agricultural sector.",
        category: "agriculture",
        source: "Ecofin Agency",
        live: true,
        content: "Full detailed article about agriculture..."
    },

    {
        title: "Energy Giant Invests $184M Gas Project",
        desc: "Important energy sector update.",
        category: "petroleum",
        source: "Ghana Web",
        live: true,
        content: "Full energy article..."
    },

    {
        title: "Nigeria Digital Transformation Plan",
        desc: "Technology sector breakthrough.",
        category: "tech",
        source: "BBC Africa",
        live: true,
        content: "Digital economy content..."
    },

    {
        title: "Mining Output Rises 22%",
        desc: "Strong growth in mining sector.",
        category: "mining",
        source: "African Business",
        live: false,
        content: "Mining details..."
    }

];

/* ===== RENDER ===== */
function renderTicker() {

    const c =
        document.getElementById("tickerContent");

    c.innerHTML = tickerData.map(n => `

<div class="ticker-item"
onclick="openModal('${n.title}')">

<div style="width:100px">

<span class="time-badge ${n.live ? 'live' : ''}">
${n.live ? 'LIVE LIVE' : randTime()}
</span>

</div>

<div style="width:140px">

<span class="category-badge
category-${n.category}">
${n.category.toUpperCase()}
</span>

</div>

<div style="flex:1">

<h4>${n.title}</h4>
<p>${n.desc}</p>

</div>

<div>${n.source}</div>

</div>

`).join("");

}

/* ===== RANDOM TIME ===== */
function randTime() {
    return Math.floor(Math.random() * 20) + "m ago";
}

/* ===== TIMER ===== */
function tickerTick() {

    if (!tickerRunning) return;

    refreshTime--;

    document.getElementById("refreshTimer")
        .innerText = refreshTime;

    if (refreshTime <= 0)
        refreshTicker();

}

/* ===== REFRESH ===== */
function refreshTicker() {

    document.getElementById("tickerContent")
        .innerHTML = "Loading...";

    setTimeout(() => {

        renderTicker();

        document.getElementById("lastUpdated")
            .innerText =
            new Date().toLocaleTimeString();

        refreshTime = 30;

    }, 700);

}

/* ===== PAUSE ===== */
document.getElementById("pauseTicker")
    .onclick = () => {

        tickerRunning = !tickerRunning;

        document.querySelector("#pauseTicker i")
            .className =
            tickerRunning ?
                "fas fa-pause" : "fas fa-play";

    };

/* ===== MANUAL ===== */
document.getElementById("refreshTicker")
    .onclick = refreshTicker;

/* ===== EXPAND ===== */
document.getElementById("expandTicker")
    .onclick = () => {

        expanded = !expanded;

        document.querySelector(".ticker-content")
            .style.maxHeight =
            expanded ? "800px" : "400px";

    };

/* ===== MODAL ===== */
function openModal(title) {

    const item =
        tickerData.find(x => x.title === title);

    document.getElementById("newsModal")
        .style.display = "flex";

    document.getElementById("modalBody")
        .innerHTML = `

<h2>${item.title}</h2>

<p>${item.content}</p>

<button onclick="closeModal()">
Close
</button>

`;

}

function closeModal() {
    document.getElementById("newsModal")
        .style.display = "none";
}

document.getElementById("closeModal")
    .onclick = closeModal;

/* ===== INIT ===== */
setInterval(tickerTick, 1000);
refreshTicker();







// country wise investment //


const COUNTRIES = [
    { name: "Ghana", code: "gh", flag: "https://flagcdn.com/w40/gh.png" },
    { name: "Nigeria", code: "ng", flag: "https://flagcdn.com/w40/ng.png" },
    { name: "Senegal", code: "sn", flag: "https://flagcdn.com/w40/sn.png" },
    { name: "Côte d'Ivoire", code: "ci", flag: "https://flagcdn.com/w40/ci.png" },
    { name: "Mali", code: "ml", flag: "https://flagcdn.com/w40/ml.png" },
    { name: "Benin", code: "bj", flag: "https://flagcdn.com/w40/bj.png" },
    { name: "Togo", code: "tg", flag: "https://flagcdn.com/w40/tg.png" },
    { name: "Burkina Faso", code: "bf", flag: "https://flagcdn.com/w40/bf.png" },
    { name: "Niger", code: "ne", flag: "https://flagcdn.com/w40/ne.png" },
    { name: "Guinea", code: "gn", flag: "https://flagcdn.com/w40/gn.png" },
    { name: "Guinea-Bissau", code: "gw", flag: "https://flagcdn.com/w40/gw.png" },
    { name: "Liberia", code: "lr", flag: "https://flagcdn.com/w40/lr.png" },
    { name: "Sierra Leone", code: "sl", flag: "https://flagcdn.com/w40/sl.png" },
    { name: "Gambia", code: "gm", flag: "https://flagcdn.com/w40/gm.png" },
    { name: "Cabo Verde", code: "cv", flag: "https://flagcdn.com/w40/cv.png" }
];