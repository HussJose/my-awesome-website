// Menu Database
var menuData = [
    {
        id: 1,
        name: "Foie Gras Terrine",
        category: "starters",
        price: "$28",
        description: "Fig compote, toasted brioche, fleur de sel."
    },
    {
        id: 2,
        name: "Trifoliate Mushroom Soup",
        category: "starters",
        price: "$22",
        description: "Wild forest mushrooms, white truffle oil, chive emulsion."
    },
    {
        id: 3,
        name: "Wagyu Beef Tenderloin",
        category: "mains",
        price: "$65",
        description: "Smoked potato purée, heirloom carrots, bone marrow jus."
    },
    {
        id: 4,
        name: "Pan-Seared Chilean Sea Bass",
        category: "mains",
        price: "$48",
        description: "Saffron risotto, asparagus spears, champagne velouté."
    },
    {
        id: 5,
        name: "Grand Marnier Soufflé",
        category: "desserts",
        price: "$18",
        description: "Tahitian vanilla bean crème anglaise."
    },
    {
        id: 6,
        name: "Deconstructed Dark Chocolate Tart",
        category: "desserts",
        price: "$19",
        description: "70% Valrhona chocolate, sea salt flakes, raspberry sorbet."
    }
];
// DOM Elements
var menuContainer = document.getElementById('menu-container');
var filterButtons = document.querySelectorAll('.filter-btn');
var navbar = document.getElementById('navbar');
var resForm = document.getElementById('res-form');
var formResponse = document.getElementById('form-response');
// Function to Render Menu Items
function renderMenu(items) {
    if (!menuContainer)
        return;
    menuContainer.innerHTML = "";
    items.forEach(function (item) {
        var itemElement = document.createElement('div');
        itemElement.classList.add('menu-item');
        itemElement.innerHTML = "\n            <div>\n                <h3>".concat(item.name, "</h3>\n                <p>").concat(item.description, "</p>\n            </div>\n            <div class=\"price\">").concat(item.price, "</div>\n        ");
        menuContainer.appendChild(itemElement);
    });
}
// Filter Functionality
filterButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        // Remove active class from all buttons
        filterButtons.forEach(function (btn) { return btn.classList.remove('active'); });
        var target = e.target;
        target.classList.add('active');
        var category = target.getAttribute('data-category');
        if (category === 'all') {
            renderMenu(menuData);
        }
        else {
            var filteredItems = menuData.filter(function (item) { return item.category === category; });
            renderMenu(filteredItems);
        }
    });
});
// Sticky Navbar Logic
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    }
    else {
        navbar.classList.remove('sticky');
    }
});
// Reservation Submission Simulation
resForm === null || resForm === void 0 ? void 0 : resForm.addEventListener('submit', function (e) {
    e.preventDefault();
    resForm.classList.add('hidden');
    if (formResponse) {
        formResponse.classList.remove('hidden');
        formResponse.classList.add('success-msg');
        formResponse.innerHTML = "Merci. Your exquisite dining experience has been reserved. A confirmation email is on its way.";
    }
});
// Initial Load
document.addEventListener("DOMContentLoaded", function () {
    renderMenu(menuData);
});
