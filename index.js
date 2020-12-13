window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#c060d3",
        "#d3d160",
        "#d36060",
        "#6860d3",
        "#15a4bd"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(s) {
            sounds[index].currentTime = 0;
            sounds[index].play();
            console.log(index)
            createBubble(index);
        });
    });

    //animation
    const createBubble = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        });
    };
});