const gamesTlou = [
    { src: "pict/theLastOfUsPart1.jpeg", name: "part1", wallpaper: "pict/theLastOfUsPart1Menu.jpg" },
    { src: "pict/theLastOfUsPart2.jpeg", name: "part2", wallpaper: "pict/theLastOfUsPart2Menu.jpg" }
];

const listGames = document.querySelector('.listGames');

gamesTlou.forEach(game => {
    const img = document.createElement('img');
    img.src = game.src;
    img.classList.add("img");
    listGames.appendChild(img);

    // Ajout du nom du jeu en tant que texte alternatif
    img.alt = game.name;

    // Ajout d'un événement de survol pour changer la bordure
    img.addEventListener('mouseenter', function () {
        img.style.border = "2px solid azure";
        body.style.backgroundImage = `url(${game.wallpaper})`;
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
    });

    img.addEventListener('mouseleave', function () {
        img.style.border = "none";
    });
});

const part1 = document.querySelector('.part1');
const part2 = document.querySelector('.part2');

const body = document.getElementById('contain')

part1.addEventListener('mouseenter', function () {
    const wallaperPart1 = document.createElement("imgPart1");
    imgPart1.src = "pict/theLastOfUsPart1Menu.jpg";
    body.appendChild(wallaperPart1);
})

part2.addEventListener('mouseenter', function () {
    const wallaperPart1 = document.createElement("imgPart2");
    imgPart2.src = "pict/theLastOfUsPart2Menu.jpg";
    body.appendChild(wallaperPart2);
})


