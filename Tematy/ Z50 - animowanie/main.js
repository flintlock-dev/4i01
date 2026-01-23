const img = document.getElementById("kote");

img.addEventListener("mouseover", () => {
    img.src = "cat1.png";
});

img.addEventListener("mouseout", () => {
    img.src = "cat2.png";
});
