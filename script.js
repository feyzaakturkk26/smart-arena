const events = [
    {
        title: "Bahar Şenliği",
        date: "10 Haziran 2026",
        capacity:250,
        category: "Festival",
        occupancy:70,
        image: "assets/images/festival.jpg"
    },

    {
        title: "Yapay Zeka Konferansı",
        date: "15 Haziran 2026",
        capacity:150,
        category: "Konferans",
        occupancy:45,
        image: "assets/images/ai.jpg"
    },

    {
        title: "Mezuniyet Töreni",
        date: "20 Haziran 2026",
        capacity:500,
        category: "Tören",
        occupancy:90,
        image: "assets/images/graduation.jpg"
    },

    {
        title: "Girişimcilik Zirvesi",
        date: "25 Haziran 2026",
        capacity:100,
        category: "Zirve",
        occupancy:60,
        image: "assets/images/summit.jpg"
    }
];

const container = document.getElementById("eventContainer");

function createEventCard(event){

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `

        <img src="${event.image}" alt="${event.title}">
        
        <span class="category">
            ${event.category}
        </span>

        <h3>${event.title}</h3>

        <p>${event.date}</p>

        <p class="capacity">Kontenjan: ${event.capacity}</p>

        <p>Doluluk: %${event.occupancy}</p>

        <button class="reserve-btn">
            Rezervasyon Yap
        </button>

        <a href="pages/reservation.html" class="seat-link">
               Koltuk Seç
        </a>
    `;

    container.appendChild(card);
}

events.forEach(event => {
    createEventCard(event);
});

document.addEventListener("click", function(e){

    if(e.target.classList.contains("reserve-btn")){

        const card = e.target.parentElement;

        const capacityElement =
            card.querySelector(".capacity");

        let currentCapacity =
            parseInt(
                capacityElement.textContent.replace(
                    "Kontenjan: ",
                    ""
                )
            );

        if(currentCapacity > 0){

            currentCapacity--;

            capacityElement.textContent =
                "Kontenjan: " + currentCapacity;

            alert("Rezervasyon başarılı!");

        }else{

            alert("Etkinlik dolu!");

        }

    }

});

const addBtn = document.getElementById("addEventBtn");

addBtn.addEventListener("click", () => {

    const title =
        document.getElementById("eventTitle").value;

    const date =
        document.getElementById("eventDate").value;

    const capacity =
        document.getElementById("eventCapacity").value;

    if(title === "" || date === "" || capacity === ""){

        alert("Lütfen tüm alanları doldurun.");

        return;
    }

    const newEvent = {

        title: title,

        date: date,

        capacity: capacity,

        category: "Yeni Etkinlik",

        occupancy: 0
    };

    createEventCard(newEvent);

    document.getElementById("eventTitle").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("eventCapacity").value = "";

});

document.querySelectorAll(".seat").forEach(seat => {

    seat.addEventListener("click", () => {

        seat.style.background = "green";

    });

});