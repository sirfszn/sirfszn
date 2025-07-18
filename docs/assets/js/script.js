const contentData = {
    truth: {
        mahabharata: `<p><strong>Dharma & Karma:</strong> Divine truth is a dynamic, contextual cosmic order (*dharma*), not a rigid dogma. Truth is realized through righteous action and navigating moral dilemmas, understanding that every action (*karma*) has consequences. The ultimate battle is internal.</p>`,
        zoroastrianism: `<p><strong>Moral Dualism:</strong> Truth is an active, moral imperative defined by the cosmic struggle between *Asha* (Truth, Order) and *Druj* (Falsehood). Humanity must consciously choose to align with the supreme good, Ahura Mazda, through good thoughts, words, and deeds.</p>`,
        abrahamic: `<p><strong>Monotheistic Covenant:</strong> Truth is revealed through a personal, binding relationship with a singular, omnipotent God. Apprehending truth is achieved through unwavering faith and obedience to the divine will and promises laid out in this covenant.</p>`
    },
    ritual: {
        mahabharata: `<p><strong>Yajna (Sacrifice):</strong> Fire rituals (*Yajna* or *Homa*) are performed to maintain cosmic order and connect with the gods. The fire god, Agni, acts as a divine messenger, carrying offerings and prayers from the human to the divine realm.</p>`,
        zoroastrianism: `<p><strong>Temple Fires:</strong> A continuous flame is kept burning in temples as the central focus of worship. It is the eternal symbol of Ahura Mazda's light and truth. Offerings of sandalwood are made to sustain this sacred fire.</p>`,
        abrahamic: `<p><strong>Sacrificial Offerings:</strong> Sacrifices to God are performed by fire. Later practices include the lighting of candles for Sabbath and festivals (e.g., Menorah), and the eternal flame (*Ner Tamid*) in synagogues, symbolizing God's everlasting covenant.</p>`
    },
    purifying: {
        mahabharata: `<p><strong>Inner & Outer Purity:</strong> Fire is a symbol of purity, but its ritual efficacy depends on the practitioner's inner state. The "purifying fire" extends beyond the physical flame to the moral purification of the individual through selflessness and discipline.</p>`,
        zoroastrianism: `<p><strong>Agent of Judgment:</strong> Fire is the ultimate agent of purity and a divine judge. Ordeals by fire or molten metal were historically used to determine truth and justice. It is a tool for cleansing the world of evil and falsehood.</p>`,
        abrahamic: `<p><strong>Transformation & Judgment:</strong> Fire is a powerful metaphor for divine judgment and spiritual transformation. It represents a cleansing force that separates the righteous from the wicked and purifies the faithful (e.g., tongues of fire at Pentecost).</p>`
    },
    divine: {
        mahabharata: `<p><strong>Essence of the Gods:</strong> Agni, the fire god, is not just a mediator but is seen as the very essence of other great deities. Fire represents a transformative spiritual awakening—the spark of the divine within the human soul.</p>`,
        zoroastrianism: `<p><strong>Emanation of God:</strong> Fire (*Atar*) is the direct, pure emanation of Ahura Mazda's own divine light and wisdom. It is the most perfect physical manifestation of the supreme God, a "teacher of man" that guides intuition.</p>`,
        abrahamic: `<p><strong>Direct Theophany:</strong> Fire is the raw, unmediated presence of God. Yahweh appears as the Burning Bush, the Pillar of Fire guiding the Israelites, and the "consuming fire" on Mount Sinai. The divine law (Torah) itself is conceived as "black fire on white fire."</p>`
    }
};

function updateContent(topic) {
    const data = contentData[topic];
    const fadeOut = (el) => {
        el.style.opacity = 0;
    };
    const fadeIn = (el, content) => {
         setTimeout(() => {
            el.innerHTML = content;
            el.style.opacity = 1;
        }, 300);
    };

    const mahabharataEl = document.getElementById('content-mahabharata');
    const zoroastrianismEl = document.getElementById('content-zoroastrianism');
    const abrahamicEl = document.getElementById('content-abrahamic');

    fadeOut(mahabharataEl);
    fadeOut(zoroastrianismEl);
    fadeOut(abrahamicEl);

    fadeIn(mahabharataEl, data.mahabharata);
    fadeIn(zoroastrianismEl, data.zoroastrianism);
    fadeIn(abrahamicEl, data.abrahamic);
}

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active-nav'));
            button.classList.add('active-nav');
            const contentTopic = button.dataset.content;
            updateContent(contentTopic);
        });
    });
    updateContent('truth');

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    const modal = document.getElementById('timeline-modal');
    const modalText = document.getElementById('modal-text');
    const closeModalBtn = document.getElementById('close-modal');

    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            modalText.textContent = item.dataset.text;
            modal.classList.remove('hidden');
        });
    });

    closeModalBtn.addEventListener('click', () => {
         modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // JavaScript for collapsible narratives
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.dataset.target;
            const content = document.getElementById(targetId);
            const arrow = header.querySelector('.arrow');

            // Toggle the 'expanded' class on the content and arrow
            content.classList.toggle('expanded');
            arrow.classList.toggle('expanded');

            // Optional: Close any other open sections when a new one is opened
            document.querySelectorAll('.collapsible-content.expanded').forEach(openContent => {
                if (openContent.id !== targetId) { // Don't close the one just clicked
                    openContent.classList.remove('expanded');
                    openContent.previousElementSibling.querySelector('.arrow').classList.remove('expanded');
                }
            });
        });
    });


    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
    const body = document.body;
    const themeIconDesktop = document.getElementById('theme-icon-desktop');
    const themeIconMobile = document.getElementById('theme-icon-mobile');

    // Function to update theme icons
    const updateThemeIcons = (theme) => {
        if (theme === 'dark') {
            themeIconDesktop.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
            themeIconMobile.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
        } else {
            themeIconDesktop.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
            themeIconMobile.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
        }
    };

    // Function to apply theme
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
        updateThemeIcons(theme); // Update icons when theme changes
    };

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Default to dark mode if OS preference is dark
        applyTheme('dark');
    } else {
        applyTheme('light'); // Default to light mode
    }

    // Event listener for desktop toggle
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Event listener for mobile toggle
    if (themeToggleBtnMobile) {
        themeToggleBtnMobile.addEventListener('click', () => {
            const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
});
