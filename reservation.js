const seatContainer =
    document.getElementById("seatContainer");

const rows = ["A", "B", "C", "D"];

for(let row of rows){

    const rowDiv =
        document.createElement("div");

    rowDiv.classList.add("seat-row");

    for(let i = 1; i <= 7; i++){

        const seat =
            document.createElement("div");

        seat.classList.add("seat");

        seat.textContent = row + i;

        rowDiv.appendChild(seat);

        seat.addEventListener("click", () => {

            if(
                !seat.classList.contains("occupied")
            ){
                seat.classList.toggle("selected");
            }

        });

    }

    seatContainer.appendChild(rowDiv);
}

const occupiedSeats =
[
    "A2",
    "B4",
    "C1"
];

document
.querySelectorAll(".seat")
.forEach(seat => {

    if(
        occupiedSeats.includes(
            seat.textContent
        )
    ){
        seat.classList.add("occupied");
    }

});

document
.getElementById("confirmBtn")
.addEventListener("click", () => {

    const selectedSeats =
        document.querySelectorAll(".selected");

    selectedSeats.forEach(seat => {

        seat.classList.remove("selected");

        seat.classList.add("occupied");

    });

});