let popups = []; 
const spacingTop = 50; 
const backgroundColor = "#292929";
const textColor = 'white';

// Function to create a popup notification
function createPopup(message) {
    const popup = document.createElement('div');
    popup.innerText = message;
    popup.className = 'popup';
    popup.style.top = `${spacingTop + 50 * popups.length}px`; 
    document.body.appendChild(popup);
    popups.push(popup); 

    setTimeout(() => {
        popup.remove();
        popups = popups.filter(p => p !== popup); 
        updatePopupPositions(); 
    }, 6000); // Notification visible for 6 seconds
}

// Update the position of remaining popups
function updatePopupPositions() {
    popups.forEach((popup, index) => {
        popup.style.top = `${spacingTop + 50 * index}px`; 
    });
}

// Function to show popups at random intervals
function showPopups() {
    const timeout = Math.random() * (12000 - 1000) + 1000; // Random time between 1-12 seconds
    setTimeout(() => {
        const solAmounts = [0.5, 1, 1.5, 2, 2.5, 3, 0.1, 0.4, 1.6, 2.3, 0.2, 3.4, 1.2, 2.1, 1.1, 1.2];
        const randomSol = solAmounts[Math.floor(Math.random() * solAmounts.length)];
        const randomWallet = generateSolanaAddress();
        createPopup(`${randomWallet} bought using ${randomSol} SOL!`);
        showPopups(); 
    }, timeout);
}

// Generate a random Solana wallet address
function generateSolanaAddress() {
    const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let address = '';
    for (let i = 0; i < 44; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        address += chars[randomIndex];
    }
    return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
}

// Start the notifications
showPopups();