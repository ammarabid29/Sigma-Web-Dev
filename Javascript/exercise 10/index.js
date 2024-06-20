/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

// Function to generate business names
function getRandomItem(items) {
    // floor round off interger e.g. 5.7 round of to 5
    return items[Math.floor(Math.random() * items.length)];
}

function generateRandomBusinessNames(){
    const adjectives = "Crazy Amazing Fire".split(" ");
    const shopNames = "Engine Foods Garments".split(" ");
    const anotherWords = "Bros Limited Hub".split(" ");

    const adjective = getRandomItem(adjectives);
    const shopName = getRandomItem(shopNames);
    const anotherWord = getRandomItem(anotherWords);

    return `${adjective} ${shopName} ${anotherWord}`;
}

const businessName = generateRandomBusinessNames();
console.log(`Generated Business Name: ${businessName}`);