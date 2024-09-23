document.addEventListener('DOMContentLoaded', () => {
    const marqueeText = 'Upcoming Events: Fashion Week - September 2024,   New Collection Launch - October 2024,   Black Friday Sale - November 2024,   Holiday Charity Gala - December 2024,  New Year Eve Party - December 31, 2024';
    const marquee = document.createElement('marquee');
    marquee.textContent = marqueeText;
    document.body.prepend(marquee);
});
