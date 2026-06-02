// Interface for Menu Items
interface MenuItem {
    id: number;
    name: string;
    category: 'starters' | 'mains' | 'desserts';
    price: string;
    description: string;
}

// Menu Database
const menuData: MenuItem[] = [
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
const menuContainer = document.getElementById('menu-container') as HTMLDivElement;
const filterButtons = document.querySelectorAll('.filter-btn');
const navbar = document.getElementById('navbar') as HTMLElement;
const resForm = document.getElementById('res-form') as HTMLFormElement;
const formResponse = document.getElementById('form-response') as HTMLDivElement;

// Function to Render Menu Items
function renderMenu(items: MenuItem[]): void {
    if (!menuContainer) return;
    menuContainer.innerHTML = "";
    
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('menu-item');
        itemElement.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
            <div class="price">${item.price}</div>
        `;
        menuContainer.appendChild(itemElement);
    });
}

// Filter Functionality
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        const target = e.target as HTMLButtonElement;
        target.classList.add('active');
        
        const category = target.getAttribute('data-category');
        
        if (category === 'all') {
            renderMenu(menuData);
        } else {
            const filteredItems = menuData.filter(item => item.category === category);
            renderMenu(filteredItems);
        }
    });
});

// Sticky Navbar Logic
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Reservation Submission Simulation
resForm?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    resForm.classList.add('hidden');
    if (formResponse) {
        formResponse.classList.remove('hidden');
        formResponse.classList.add('success-msg');
        formResponse.innerHTML = "Merci. Your exquisite dining experience has been reserved. A confirmation email is on its way.";
    }
});

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
    renderMenu(menuData);
});