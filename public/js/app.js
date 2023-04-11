class menuItem {
    constructor(name, calories, protein, carbohydrates, fat) {
        this.name = name;
        this.calories = calories;
        this.protein = protein;
        this.carbohydrates = carbohydrates;
        this.fat = fat;
    }
}

class UI {
    static displayMenu() {
        // Loads menu from local storage
        UI.clear();
        // Build html for menu list
        const menu = Menu.getMenu();
        let list = "";
        if (menu) {
            menu.forEach((item) => list += `<tr><td><i class="fa-sharp fa-solid fa-trash mx-2"></i>${item.name}</td><td>${item.calories}</td><td>${item.protein}</td><td>${item.carbohydrates}</td><td>${item.fat}</td></tr>`);
            document.querySelector("#menu").innerHTML = list;
            UI.menuRemoveIcons();
        }
    }

    static displayResults(searchResults) {
        // Displays user search results
        UI.clearResults();
        UI.filterResults(searchResults);
        let results = "";
        searchResults.forEach((result) =>
            // Build HTML
            results += `<tr><td><i class="fa-solid fa-plus mx-2"></i>${result.name}</td><td>${result.calories}</td><td>${result.protein}</td><td>${result.carbohydrates}</td><td>${result.fat}</td></tr>`
        );
        document.querySelector("#results").innerHTML = results;
        // Add event listener to each icon
        UI.searchAddIcons();
    }

    static filterResults(results) {
        // Removes search results already stored in local memory
        const menu = Menu.getMenu();
        if (menu) {
            menu.forEach(item => {
                results.forEach(el => {
                    if (el.name === item.name && el.calories === Number(item.calories)) {
                        results.splice(results.indexOf(el), 1);
                    }
                });
            })
        }
    }

    static clearResults() {
        // Clears search results
        const results = document.querySelector("#results");
        while (results.firstChild) {
            results.removeChild(results.firstChild);
        }
    }

    static remove(item, section) {
        // Removes item
        const domSection = document.querySelector(section);
        domSection.removeChild(item);
    }

    static clear() {
        // Clears menu
        const menu = document.querySelector("#menu");
        menu.innerHTML = "";
    }

    static menuRemoveIcons() {
        // Add event listener to each menu icon
        const icons = document.querySelectorAll(".fa-trash");
        icons.forEach(icon => icon.addEventListener("click", (e) => {
            let removedItem = [];
            const nameElement = icon.parentElement;
            removedItem.push(nameElement.innerText);
            let sibling = nameElement.nextElementSibling;
            while (sibling) {
                removedItem.push(sibling.innerText);
                sibling = sibling.nextElementSibling;
            }
            const name = removedItem[0], calories = removedItem[1], protein = removedItem[2], carbohydrates = removedItem[3], fat = removedItem[4];
            const removedMenuItem = new menuItem(name, calories, protein, carbohydrates, fat);
            UI.remove(e.target.parentElement.parentElement, "#menu");
            Menu.remove(removedMenuItem);

        }));
    }

    static searchAddIcons() {
        // Add event listener to each search result icon
        const icons = document.querySelectorAll(".fa-plus");
        icons.forEach(icon => icon.addEventListener("click", (e) => {
            let newItem = [];
            const nameElement = icon.parentElement;
            newItem.push(nameElement.innerText);
            let sibling = nameElement.nextElementSibling;
            while (sibling) {
                newItem.push(sibling.innerText);
                sibling = sibling.nextElementSibling;
            }
            const name = newItem[0], calories = newItem[1], protein = newItem[2], carbohydrates = newItem[3], fat = newItem[4];
            const newMenuItem = new menuItem(name, calories, protein, carbohydrates, fat);
            // UI.add(newMenuItem);
            Menu.add(newMenuItem);
            UI.remove(e.target.parentElement.parentElement, "#results");
            UI.displayMenu();
        }));
    }
}

class Menu {
    // Stores and manages menu in local storage
    static getMenu() {
        // Get items in local storage
        if (localStorage.getItem("menu"))
            return JSON.parse(localStorage.getItem("menu"));
    }

    static add(item) {
        // Add item to menu
        // If menu is null, convert to empty array to facilitate first push
        let menu = Menu.getMenu();
        if (menu == null) {
            menu = [];
        }
        if (menu.filter(e => e.name === item.name && e.calories === item.calories).length <= 0)
            menu.push(item);
        const json = JSON.stringify(menu);
        localStorage.setItem("menu", json);
    }

    static remove(item) {
        // Removes item from menu
        let menu = Menu.getMenu();
        menu.forEach((el) => {
            if (el.name === item.name && el.calories === item.calories) {
                menu.splice(menu.indexOf(el), 1);
            }
        })

        const json = JSON.stringify(menu);
        localStorage.setItem("menu", json);
    }
}

async function searchFood(url) {
    // Fetch food data from edanam API
    try {
        // Request data to server
        const response = await fetch(url);
        // Build result array
        const jsonData = await response.json(), resultArray = [];
        searchRes = jsonData.hints;
        searchRes.forEach((result) => {
            let name = result.food.label, calories = Math.round(result.food.nutrients.ENERC_KCAL), protein = Math.round(result.food.nutrients.PROCNT), carbohydrates = Math.round(result.food.nutrients.CHOCDF), fat = Math.round(result.food.nutrients.FAT);
            let item = new menuItem(name, calories, protein, carbohydrates, fat);
            resultArray.push(item);
        });
        // Populate menu in UI
        const results = document.querySelector("#results");
        UI.displayResults(resultArray);
        results.scrollIntoView();
    } catch (e) {
        console.log("e.message");
    }
}

// Load items from local memory
document.addEventListener("DOMContentLoaded", UI.displayMenu);

//Get user search terms
const search = document.querySelector("#search");
const submit = document.querySelector("#submit");

// Add event listener to search button
submit.addEventListener("click", function (e) {
    e.preventDefault();
    // Build request url
    if (search.value) {
        let url = `fetch.php?food=${search.value}`;
        // Fetch data
        searchFood(url);
    }
});