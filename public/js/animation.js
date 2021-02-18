const textWrapper = document.querySelector('.txt .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.txt .letter',
        scale: [0, 1],
        duration: 2000,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1)
    }).add({
        targets: '.txt',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });