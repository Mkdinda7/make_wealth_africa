
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




// ============ DUMMY DATA (9-10 PER COUNTRY) ============

const newsData = {


    // ===================== GHANA =====================
    ghana: [

        {
            title: "Ghana Refinery Expansion to Reduce Fuel Imports",
            desc: "Ghana’s energy sector continues to attract significant foreign investment creating new infrastructure opportunities.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "PETROLEUM",
            growth: "43.61%",
            country: "🇬🇭 Ghana",
            source: "Ecofin Agency",
            grade: "8/10"
        },

        {
            title: "Ghana Gold Production Hits Record High",
            desc: "New mining technologies boost productivity and sustainability across Ashanti region.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "MINING",
            growth: "21.45%",
            country: "🇬🇭 Ghana",
            source: "Mining Weekly",
            grade: "9/10"
        },

        {
            title: "Accra Fintech Startups Raise $90M",
            desc: "Digital payment platforms expanding across West Africa from Ghana base.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "FINTECH",
            growth: "33.20%",
            country: "🇬🇭 Ghana",
            source: "TechCabal",
            grade: "9/10"
        },

        {
            title: "Tema Port Smart Upgrade",
            desc: "Automation reduces cargo waiting time by 40 percent.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "TRADE",
            growth: "12.11%",
            country: "🇬🇭 Ghana",
            source: "Reuters",
            grade: "8/10"
        },

        {
            title: "Ghana Cocoa Value Chain Boost",
            desc: "Local processing increases farmer income.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "AGRICULTURE",
            growth: "10.87%",
            country: "🇬🇭 Ghana",
            source: "BBC Africa",
            grade: "7/10"
        },

        {
            title: "Solar Farm in Volta Region",
            desc: "Largest renewable plant begins operation.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "ENERGY",
            growth: "16.4%",
            country: "🇬🇭 Ghana",
            source: "Al Jazeera",
            grade: "8/10"
        },

        {
            title: "Ghana Digital Tax Reform",
            desc: "New system simplifies business registration.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "POLICY",
            growth: "9.7%",
            country: "🇬🇭 Ghana",
            source: "Bloomberg",
            grade: "7/10"
        },

        {
            title: "Accra Real Estate Boom",
            desc: "Diaspora investment drives housing market.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "REAL ESTATE",
            growth: "14.3%",
            country: "🇬🇭 Ghana",
            source: "Forbes Africa",
            grade: "8/10"
        },

        {
            title: "Ghana Startups Enter US Market",
            desc: "Local SaaS companies expand globally.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "STARTUP",
            growth: "25.9%",
            country: "🇬🇭 Ghana",
            source: "TechCrunch",
            grade: "9/10"
        }

    ],



    // ===================== NIGERIA =====================
    nigeria: [

        {
            title: "Nigeria E-commerce Market Grows 115%",
            desc: "Digital transformation creates new opportunities for SMEs.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "TECH",
            growth: "39.40%",
            country: "🇳🇬 Nigeria",
            source: "Reuters",
            grade: "9/10"
        },

        {
            title: "Lagos Fintech Unicorn Emerges",
            desc: "Payment platform valued at $1.1B.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "FINTECH",
            growth: "41.2%",
            country: "🇳🇬 Nigeria",
            source: "Bloomberg",
            grade: "10/10"
        },

        {
            title: "Dangote Refinery Export Begins",
            desc: "Fuel export changes regional dynamics.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "PETROLEUM",
            growth: "28.5%",
            country: "🇳🇬 Nigeria",
            source: "CNBC",
            grade: "9/10"
        },

        {
            title: "AgriTech Funding Surge",
            desc: "Smart farming startups raise $60M.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "AGRICULTURE",
            growth: "18.2%",
            country: "🇳🇬 Nigeria",
            source: "Forbes",
            grade: "8/10"
        },

        {
            title: "Abuja Housing Demand Rises",
            desc: "Urbanization drives construction boom.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "REAL ESTATE",
            growth: "13.9%",
            country: "🇳🇬 Nigeria",
            source: "BusinessDay",
            grade: "7/10"
        },

        {
            title: "Nigeria Crypto Adoption",
            desc: "Largest blockchain market in Africa.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "BLOCKCHAIN",
            growth: "52.7%",
            country: "🇳🇬 Nigeria",
            source: "CoinDesk",
            grade: "9/10"
        },

        {
            title: "Lekki Free Zone Expansion",
            desc: "Manufacturing attracts Asian investors.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "INDUSTRY",
            growth: "17.4%",
            country: "🇳🇬 Nigeria",
            source: "Reuters",
            grade: "8/10"
        },

        {
            title: "EdTech Platforms Grow",
            desc: "Online learning users double.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "EDUCATION",
            growth: "22.6%",
            country: "🇳🇬 Nigeria",
            source: "TechPoint",
            grade: "8/10"
        },

        {
            title: "Nigeria Power Sector Reform",
            desc: "Mini grid projects accelerate.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "ENERGY",
            growth: "15.3%",
            country: "🇳🇬 Nigeria",
            source: "Al Jazeera",
            grade: "7/10"
        }

    ],



    // ===================== SENEGAL =====================
    senegal: [
        {
            title: "Senegal Energy Corridor $1.2B",
            desc: "Regional power export initiative launched.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "ENERGY",
            growth: "14.2%",
            country: "🇸🇳 Senegal",
            source: "Al Jazeera",
            grade: "7/10"
        },

        {
            title: "Dakar Startup Visa Program",
            desc: "Attracts African tech founders.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "STARTUP",
            growth: "19.5%",
            country: "🇸🇳 Senegal",
            source: "TechPoint",
            grade: "8/10"
        },

        {
            title: "Senegal Port Automation",
            desc: "Digital customs cuts clearance time.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "TRADE",
            growth: "8.9%",
            country: "🇸🇳 Senegal",
            source: "Reuters",
            grade: "7/10"
        },

        {
            title: "Peanut Export Recovery",
            desc: "Agricultural reforms boost income.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "AGRICULTURE",
            growth: "10.4%",
            country: "🇸🇳 Senegal",
            source: "BBC",
            grade: "7/10"
        },

        {
            title: "Tourism Returns to Dakar",
            desc: "Visitor numbers rise post pandemic.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "TOURISM",
            growth: "12.6%",
            country: "🇸🇳 Senegal",
            source: "Africa Travel",
            grade: "8/10"
        },

        {
            title: "Solar Micro Grids Launch",
            desc: "Rural electrification project.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "ENERGY",
            growth: "11.3%",
            country: "🇸🇳 Senegal",
            source: "UNDP",
            grade: "8/10"
        },

        {
            title: "Senegal Digital ID",
            desc: "E-gov services expand nationwide.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "GOVTECH",
            growth: "9.8%",
            country: "🇸🇳 Senegal",
            source: "Reuters",
            grade: "7/10"
        },

        {
            title: "Dakar Real Estate Surge",
            desc: "Coastal properties attract diaspora.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "REAL ESTATE",
            growth: "13.7%",
            country: "🇸🇳 Senegal",
            source: "Bloomberg",
            grade: "8/10"
        },

        {
            title: "Fisheries Modernization",
            desc: "Cold storage boosts exports.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "INDUSTRY",
            growth: "8.4%",
            country: "🇸🇳 Senegal",
            source: "FAO",
            grade: "7/10"
        }

    ],



    // ===================== BENIN =====================
    benin: [

        {
            title: "Benin Refinery Expansion",
            desc: "Energy projects creating opportunities.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "PETROLEUM",
            growth: "27.67%",
            country: "🇧🇯 Benin",
            source: "Ecofin Agency",
            grade: "9/10"
        },

        {
            title: "Cotonou Port Upgrade",
            desc: "Trade capacity doubles.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "TRADE",
            growth: "9.3%",
            country: "🇧🇯 Benin",
            source: "Bloomberg",
            grade: "7/10"
        },

        {
            title: "Benin Cotton Boom",
            desc: "Leads West Africa rankings.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "AGRICULTURE",
            growth: "15.5%",
            country: "🇧🇯 Benin",
            source: "Reuters",
            grade: "8/10"
        },

        {
            title: "Tourism Digital Platform",
            desc: "Heritage tourism app launched.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "TOURISM",
            growth: "8.2%",
            country: "🇧🇯 Benin",
            source: "Africa Travel",
            grade: "7/10"
        },

        {
            title: "Startup Tax Incentives",
            desc: "Tech friendly reforms announced.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "STARTUP",
            growth: "14.4%",
            country: "🇧🇯 Benin",
            source: "TechCabal",
            grade: "8/10"
        },

        {
            title: "Benin Solar Program",
            desc: "Off grid solutions expand.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "ENERGY",
            growth: "10.1%",
            country: "🇧🇯 Benin",
            source: "UNDP",
            grade: "7/10"
        },

        {
            title: "Cocoa Processing Plant",
            desc: "Adds value to exports.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "INDUSTRY",
            growth: "11.9%",
            country: "🇧🇯 Benin",
            source: "BBC",
            grade: "7/10"
        },

        {
            title: "Digital Banking Growth",
            desc: "Mobile money users rise.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "FINTECH",
            growth: "20.5%",
            country: "🇧🇯 Benin",
            source: "Bloomberg",
            grade: "8/10"
        },

        {
            title: "Benin Road Corridor",
            desc: "Infrastructure links Niger border.",
            img: "https://i.imgur.com/6v4Qx3x.png",
            tag: "INFRA",
            growth: "9.6%",
            country: "🇧🇯 Benin",
            source: "Reuters",
            grade: "7/10"
        }

    ]

};




