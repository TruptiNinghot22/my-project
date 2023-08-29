// script.js
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const rooms = document.querySelectorAll("ol[type='A']");

    document.getElementById("shuffleAllButton").addEventListener("click", function() {
        let allMembers = [];
        rooms.forEach(function(room) {
            const roomMembers = Array.from(room.getElementsByTagName("li"));
            allMembers = allMembers.concat(roomMembers);
            room.innerHTML = ''; // Clear the room
        });

        shuffleArray(allMembers);

        let currentRoomIndex = 0;
        allMembers.forEach(function(member) {
            rooms[currentRoomIndex].appendChild(member);
            currentRoomIndex = (currentRoomIndex + 1) % rooms.length;
        });
    });
});
