function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let thumbnailHTML = document.createElement("div");
    thumbnailHTML.setAttribute("class", "thumbnailHTML");
    card.append(thumbnailHTML);

    let img = document.createElement("img");
    img.setAttribute("src", `${thumbnail}`);
    thumbnailHTML.append(img);

    let span = document.createElement("span");
    span.innerHTML = duration;
    thumbnailHTML.append(span);

    let text = document.createElement("div");
    text.setAttribute("class", "text");
    card.append(text);

    let h1 = document.createElement("h1");
    h1.innerHTML = title;
    text.append(h1);

    let span1 = document.createElement("span");
    span1.innerHTML = cName;
    text.append(span1);

    let span2 = document.createElement("span");
    span2.innerHTML = `${views}k views`;
    text.append(span2);

    let span3 = document.createElement("span");
    span3.innerHTML = `${monthsOld} months ago`;
    text.append(span3);

    document.querySelector(".container").append(card);
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");
createCard("Introduction to Frontend | Sigma Web Dev video #2", "CodeWithHarry", 560, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");