// Sample data for shows
const shows = [
    { id: 1, name: "Concert A", date: "2024-04-15", ticketsAvailable: 50 },
    { id: 2, name: "Concert B", date: "2024-04-20", ticketsAvailable: 30 },
    { id: 3, name: "Show X", date: "2024-04-25", ticketsAvailable: 100 }
];

// Function to display shows
function displayShows() {
    const showsContainer = document.getElementById('shows');
    showsContainer.innerHTML = '';
    shows.forEach(show => {
        const showElement = document.createElement('div');
        showElement.classList.add('show');
        showElement.innerHTML = `
            <h3>${show.name}</h3>
            <p>Date: ${show.date}</p>
            <p>Tickets Available: ${show.ticketsAvailable}</p>
            <button onclick="openBookingModal(${show.id})">Book Now</button>
        `;
        showsContainer.appendChild(showElement);
    });
}

// Function to open booking modal
function openBookingModal(showId) {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'block';

    const closeButton = document.querySelector('.close');
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    const bookingForm = document.getElementById('bookingForm');
    bookingForm.onsubmit = function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const tickets = document.getElementById('tickets').value;

        // Here you can send booking details to the backend
        console.log(`Booking for Show ID ${showId} - Name: ${name}, Email: ${email}, Tickets: ${tickets}`);

        modal.style.display = 'none';
    };
}

// Display shows when the page loads
window.onload = displayShows;
