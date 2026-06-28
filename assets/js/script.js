function toggleProject() {

    const details = document.getElementById("amr-details");

    details.classList.toggle("active");

    const button = document.getElementById("amr-button");

    if (details.classList.contains("active")) {
        button.innerHTML = "Hide Project ↑";
    } else {
        button.innerHTML = "Explore Project →";
    }

}