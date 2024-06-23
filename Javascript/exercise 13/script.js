function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "k";
    }
    let html = ` <div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                    <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>
                    ${title}
                </h1>
                <p>
                    ${cName} . ${viewStr} views . ${monthsOld} months ago
                </p>
            </div>
        </div>`;
    // document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
    document.querySelector(".container").insertAdjacentHTML("beforeend",html)
}

document.getElementById("btn").addEventListener("click", ()=>{
    createCard("Introduction to Backend | Sigma Web Dev video #1", "CodeWithHarry", 220000, 9, "16:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");
})

// createCard("Introduction to Backend | Sigma Web Dev video #1", "CodeWithHarry", 220000, 9, "16:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");
// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 56000000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");
// createCard("Introduction to ExpressJs | Sigma Web Dev video #3", "CodeWithHarry", 560, 2, "12:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");
