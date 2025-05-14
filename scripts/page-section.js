function pageSection(sectionId) {
    const sections = ['home', 'introduction', 'contract', 'brand'];
    
    sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.style.display = 'block';

    const sectionTitles = {
        home: 'Home',
        introduction: 'Introduction',
        contract: 'Contract',
        brand: 'Brand'
    };

    document.title = `Brenda Oliveira's Blue Orchid « WEB215 » ${sectionTitles[sectionId] || ''}`;
}

function loadComponents() {
    fetch('components/header.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('site-header').innerHTML = data;

            ['home', 'introduction', 'contract', 'brand'].forEach((section) => {
                const btn = document.getElementById(`${section}-btn`);
                if (btn) {
                    btn.addEventListener('click', (event) => {
                        event.preventDefault();
                        pageSection(section);
                        window.location.hash = `#${section}`;
                    });
                }
            });
        });

    fetch('components/footer.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('site-footer').innerHTML = data;
        });
}

window.onload = () => {
    loadComponents();
    const hash = window.location.hash.substring(1);
    if (['home', 'introduction', 'contract', 'brand'].includes(hash)) {
        pageSection(hash);
    } else {
        pageSection('home');
    }
};
