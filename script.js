// ========================================
// CORE: GLOBAL ENTRY POINT
// ========================================

/**
 * START EXPERIENCE
 * This function is attached directly to the "Ábreme" button via onclick.
 * It is designed to be fail-safe: Visuals happen first, logic second.
 */
window.startExperience = function () {
    console.log("🚀 Start Experience Triggered");

    // 1. Get Elements
    const openBtn = document.getElementById('openBtn');
    const envelope = document.getElementById('envelope');
    const coverSection = document.getElementById('coverSection');
    const welcomeSection = document.getElementById('welcomeSection');
    const music = document.getElementById('backgroundMusic');

    // 2. Immediate Visual Feedback (The "Click" feel)
    if (openBtn) {
        openBtn.style.transform = 'scale(0.9)';
        openBtn.style.opacity = '0';
        openBtn.style.pointerEvents = 'none'; // Prevent double click

        // Hide button completely after short delay to prevent ghost clicks
        setTimeout(() => openBtn.style.display = 'none', 300);
    }

    // 3. Envelope Animation
    if (envelope) {
        envelope.classList.add('open');
    }

    // 4. Play Music (Non-blocking)
    if (music) {
        music.volume = 0.5; // Set reasonable volume
        const playPromise = music.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log("🎵 Music playing successfully");
                updateMusicIcons(true);
            }).catch(error => {
                console.warn("⚠️ Autoplay prevented. Music will start on next interaction.", error);
                // We don't stop the experience. Mute icon might show.
            });
        }
    }

    // 5. Sequence Transition (Timeouts for animation synchronization)

    // Step A: Allow "Letter sliding out" animation (approx 1.0s)
    setTimeout(() => {
        console.log("➡️ Fading out cover...");
        if (coverSection) {
            coverSection.style.opacity = '0';
            coverSection.style.transform = 'translateY(-20px)'; // Slide up slightly
        }

        // Step B: Switch Active Sections
        setTimeout(() => {
            console.log("➡️ Showing welcome...");
            if (coverSection) coverSection.classList.remove('active');

            if (welcomeSection) {
                welcomeSection.classList.add('active');
                // DOM Reflow trick to ensure transition runs
                void welcomeSection.offsetWidth;
                welcomeSection.style.opacity = '1';
                welcomeSection.style.transform = 'translateY(0)';
            }

            // Step C: Start Typewriter
            startTypewriter();

        }, 800); // Matches CSS transition time for Section fade
    }, 1200); // Wait for letter animation
};


// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ DOM Content Loaded - v3.1 Github Fix");

    // Init all modules with Error Handling
    const safeInit = (fn, name) => {
        try {
            fn();
            console.log(`✅ ${name} Initialized`);
        } catch (e) {
            console.error(`❌ Error initializing ${name}:`, e);
        }
    };

    safeInit(initHearts, 'Hearts');
    safeInit(initMusicControl, 'Music Control');
    safeInit(initCountdown, 'Countdown');
    safeInit(initGallery, 'Gallery');
    safeInit(initBook, 'Book');
    safeInit(initInvitation, 'Invitation');
    safeInit(initNavigation, 'Navigation');
    safeInit(initSecrets, 'Secrets'); // Was missing in original listener list?
});

// ========================================
// MODULES
// ========================================

// 1. Hearts
function initHearts() {
    const container = document.getElementById('heartsContainer');
    if (!container) return;

    // Create a heart every 800ms
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's'; // 10-20s
        container.appendChild(heart);

        // Cleanup
        setTimeout(() => heart.remove(), 20000);
    }, 800);
}

// 2. Music Control (Toggle)
function initMusicControl() {
    const btn = document.getElementById('musicToggle');
    const music = document.getElementById('backgroundMusic');

    if (btn && music) {
        btn.addEventListener('click', () => {
            if (music.paused) {
                music.play().then(() => updateMusicIcons(true)).catch(e => console.error(e));
            } else {
                music.pause();
                updateMusicIcons(false);
            }
        });
    }
}

function updateMusicIcons(isPlaying) {
    const play = document.querySelector('.play-icon');
    const pause = document.querySelector('.pause-icon');
    if (play && pause) {
        play.style.display = isPlaying ? 'none' : 'inline';
        pause.style.display = isPlaying ? 'inline' : 'none';
    }
}

// 3. Typewriter
function startTypewriter() {
    const text = "Si tuviera que elegir un sueño, de todos, sería no despertarme nunca del sueño de tenerte a mi lado.";
    const el = document.getElementById('welcomeText');
    if (!el) return;

    el.textContent = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    }
    type();
}

// 4. Countdown
function initCountdown() {
    // Target: Feb 14, 2026 22:15
    const target = new Date('2026-02-14T22:15:00').getTime();

    function update() {
        const now = new Date().getTime();
        const diff = target - now;

        if (diff < 0) {
            ['days', 'hours', 'minutes', 'seconds'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = "00";
            });
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        setText('days', d);
        setText('hours', h);
        setText('minutes', m);
        setText('seconds', s);
    }

    setInterval(update, 1000);
    update(); // Run immediately
}

function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = String(val).padStart(2, '0');
}

// 5. Gallery
function initGallery() {
    const carousel = document.getElementById('galleryCarousel');
    const continueBtn = document.getElementById('continueBtn4');
    if (!carousel) return;

    // --- Generate Items ---
    const items = [];
    // 39 Images
    for (let i = 1; i <= 39; i++) items.push({ type: 'img', src: `assets/images/foto${i}.jpeg` });
    // 14 Videos
    for (let i = 1; i <= 14; i++) items.push({ type: 'vid', src: `assets/videos/video${i}.mp4` });

    items.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        if (item.type === 'img') {
            const img = document.createElement('img');
            img.src = item.src;
            div.appendChild(img);
        } else {
            const vid = document.createElement('video');
            vid.src = item.src;
            vid.controls = true;
            vid.setAttribute('playsinline', ''); // Better mobile behavior
            vid.preload = 'metadata'; // Load metadata
            div.appendChild(vid);
        }
        carousel.appendChild(div);
    });

    // --- Navigation Logic ---
    let currentIndex = 0;
    const itemEls = carousel.querySelectorAll('.gallery-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function showSlide(index) {
        itemEls.forEach((el, i) => {
            el.classList.remove('active');
            const vid = el.querySelector('video');
            if (vid) vid.pause(); // Stop video if hiding

            if (i === index) {
                el.classList.add('active');
            }
        });

        // Unlock check
        if (index === itemEls.length - 1 && continueBtn) {
            continueBtn.classList.remove('locked');
        }
    }

    if (nextBtn) nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % itemEls.length;
        showSlide(currentIndex);
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + itemEls.length) % itemEls.length;
        showSlide(currentIndex);
    });

    // Init first slide
    showSlide(0);
}

// 5b. Secrets (Cards) - FIX: Add Click Handler for Mobile
function initSecrets() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const inner = card.querySelector('.card-inner');
            if (inner) {
                // Toggle rotation via inline style or class
                // Using style for simple toggle 0 or 180
                const current = inner.style.transform;
                inner.style.transform = (current === 'rotateY(180deg)') ? 'rotateY(0deg)' : 'rotateY(180deg)';
            }
        });
    });
}

// 6. Book (Letter) - NOW CLICKABLE ON BOOK ITSELF
function initBook() {
    const btn = document.getElementById('pageTurnBtn');
    const bookContainer = document.querySelector('.book-container'); // Click zone
    const book1 = document.querySelector('.book');
    const book2 = document.querySelector('.second-book');
    let isPage1 = true;

    // Helper to flip
    const flipBook = () => {
        if (isPage1) {
            book1.style.transform = 'rotateY(-180deg)';
            setTimeout(() => {
                book1.style.display = 'none';
                book2.style.display = 'flex';
                // Allow restart of animation
                setTimeout(() => book2.style.transform = 'rotateY(0deg)', 50);
                if (btn) btn.textContent = '‹ Página anterior';
            }, 300);
        } else {
            book2.style.transform = 'rotateY(180deg)';
            setTimeout(() => {
                book2.style.display = 'none';
                book1.style.display = 'flex';
                setTimeout(() => book1.style.transform = 'rotateY(0deg)', 50);
                if (btn) btn.textContent = 'Voltear página ›';
            }, 300);
        }
        isPage1 = !isPage1;
    };

    if (bookContainer) {
        bookContainer.addEventListener('click', flipBook);
    }

    // Keep button working just in case
    if (btn) btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent double trigger
        flipBook();
    });
}

// 7. Invitation & Modal
function initInvitation() {
    const btn = document.getElementById('confirmBtn');
    const modal = document.getElementById('confirmModal');
    const close = document.getElementById('modalCloseBtn');

    if (btn && modal) {
        btn.addEventListener('click', () => modal.classList.add('show'));
        if (close) close.addEventListener('click', () => modal.classList.remove('show'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('show');
        });
    }

    // Final Section Restart
    const restart = document.getElementById('restartBtn');
    if (restart) restart.addEventListener('click', () => window.location.reload());
}

// 8. General Navigation
function initNavigation() {
    const map = {
        'continueBtn1': ['welcomeSection', 'countdownSection'],
        'continueBtn2': ['countdownSection', 'secretsSection'],
        'continueBtn3': ['secretsSection', 'gallerySection'],
        'continueBtn4': ['gallerySection', 'letterSection'],
        'continueBtn5': ['letterSection', 'invitationSection'],
        'continueBtn6': ['invitationSection', 'finalSection'],
        // Back buttons
        'backBtn1': ['welcomeSection', 'coverSection'],
        'backBtn2': ['countdownSection', 'welcomeSection'],
        'backBtn3': ['secretsSection', 'countdownSection'],
        'backBtn4': ['gallerySection', 'secretsSection'],
        'backBtn5': ['letterSection', 'gallerySection'],
        'backBtn6': ['invitationSection', 'letterSection']
    };

    Object.keys(map).forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                const [from, to] = map[btnId];
                switchSection(from, to);
            });
        }
    });
}

function switchSection(fromId, toId) {
    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);
    if (!from || !to) return;

    // Fade out
    from.style.opacity = '0';
    from.style.transform = 'translateY(-20px)';

    setTimeout(() => {
        from.classList.remove('active');
        // Actually Hide
        from.style.display = 'none';

        // Show Next
        to.style.display = 'flex'; // Prepare for flex
        // Force Reflow
        void to.offsetWidth;

        to.classList.add('active'); // Trigger CSS animation

        // Reset manual styles that might conflict with class
        to.style.opacity = '';
        to.style.transform = '';
    }, 500); // Faster transition
}
