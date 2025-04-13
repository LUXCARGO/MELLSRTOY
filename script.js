let selectedTariff = '';
const playerIdInput = document.getElementById('playerId');
const whatsappBtn = document.getElementById('whatsappBtn');
const telegramBtn = document.getElementById('telegramBtn');
const tariffButtons = document.querySelectorAll('.tariff-btn');

// Fade-in animation
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => observer.observe(element));

// Tariff selection
tariffButtons.forEach(button => {
    button.addEventListener('click', () => {
        tariffButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedTariff = button.dataset.value;
        checkFormValidity();
    });
});

// Input validation
playerIdInput.addEventListener('input', () => {
    if (playerIdInput.value.length > 10) {
        playerIdInput.value = playerIdInput.value.slice(0, 10);
    }
    checkFormValidity();
});

// Check form validity
function checkFormValidity() {
    const isValid = selectedTariff && playerIdInput.value.length === 10;
    whatsappBtn.classList.toggle('active', isValid);
    telegramBtn.classList.toggle('active', isValid);
}

// WhatsApp button
whatsappBtn.addEventListener('click', () => {
    if (whatsappBtn.classList.contains('active')) {
        const message = encodeURIComponent(`Я хочу купить у вас ${selectedTariff}\nМой айди - ${playerIdInput.value}`);
        window.open(`https://wa.me/992550266668?text=${message}`, '_blank');
    }
});

// Telegram button
telegramBtn.addEventListener('click', () => {
    if (telegramBtn.classList.contains('active')) {
        const message = encodeURIComponent(`Я хочу купить у вас ${selectedTariff}\nМой айди - ${playerIdInput.value}`);
        window.open(`https://t.me/mrveels?text=${message}`, '_blank');
    }
});