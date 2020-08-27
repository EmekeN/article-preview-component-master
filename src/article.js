const shareBtn = document.querySelectorAll(".button-button");
const shareExpanded = document.querySelector(".share-expanded");
let visible = false;

for (let btn of shareBtn) {
    btn.addEventListener("click", () => {
        if (visible) {
            shareExpanded.className = "share-expanded";
            shareBtn.forEach((btn) => {
                btn.className = "button-button";
            });
        } else {
            shareExpanded.className = "share-expanded visible";
            shareBtn.forEach((btn) => {
                btn.className = "button-button dark";
            });
        }
        visible = !visible;
    });
}
