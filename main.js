const gamesTlou = [
    { src: "pict/theLastOfUsPart1.jpeg", name: "part1", wallpaper: "pict/theLastOfUsPart1Menu.jpg" },
    { src: "pict/theLastOfUsPart2.jpeg", name: "part2", wallpaper: "pict/theLastOfUsPart2Menu.jpg" }
];

const listGames = document.querySelector('.listGames');
const body = document.getElementById('contain');

gamesTlou.forEach(game => {
    const img = document.createElement('img');
    img.src = game.src;
    img.classList.add("img");
    listGames.appendChild(img);

    img.alt = game.name;

    // Ajout d'un événement de survol pour changer la bordure
    img.addEventListener('mouseenter', function () {
        img.style.border = "2px solid azure";
        body.style.backgroundImage = `url('${game.wallpaper}')`;
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
    });

    img.addEventListener('mouseleave', function () {
        img.style.border = "none";
    });
});



