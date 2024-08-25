document.addEventListener('DOMContentLoaded', function() {
    const stations = [
        { id: 1, name: 'Station A', location: 'City Center', availablePorts: 3 },
        { id: 2, name: 'Station B', location: 'Suburban Area', availablePorts: 5 },
        { id: 3, name: 'Station C', location: 'Highway Rest Stop', availablePorts: 2 },
    ];

    const stationList = document.getElementById('station-list');

    function displayStations() {
        stationList.innerHTML = '';
        stations.forEach(station => {
            const stationElement = document.createElement('div');
            stationElement.classList.add('station');
            stationElement.innerHTML = `
                <h3>${station.name}</h3>
                <p>Location: ${station.location}</p>
                <p>Available Ports: ${station.availablePorts}</p>
                <button onclick="bookStation(${station.id})">Book Now</button>
            `;
            stationList.appendChild(stationElement);
        });
    }

    displayStations();

    // This function would typically interact with a backend API
    window.bookStation = function(stationId) {
        alert(`Booking station ${stationId}. This would typically connect to a backend API.`);
    };
});