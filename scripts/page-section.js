function loadComponents () {
    fetch('components/header.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('site-header').innerHTML = data;
            attachNavEvents();
        });

    fetch('components/footer.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('site-footer').innerHTML = data;
        });
}

function pageSection(sectionId) {
    const sections = ['home', 'introduction', 'contract', 'brand'];
    
    sections.forEach((id) => {
        document.getElementById(id).style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';

    const sectionTitles = {
        home: 'Home',
        introduction: 'Introduction',
        contract: 'Contract',
        brand: 'Brand'
    };

    document.title = `Brenda Oliveira's Blue Orchid « WEB215 » ${sectionTitles[sectionId]}`;
}

window.onload = () => {
    loadComponents();
    const hash = window.location.hash.substring(1);
    if (['home', 'introduction', 'contract', 'brand'].includes(hash)) {
        pageSection(hash);
    } else {
        pageSection('home');
    }
    
    ['home', 'introduction', 'contract', 'brand'].forEach((section) => {
        document.getElementById(`${section}-btn`).addEventListener('click', (event) => {
            event.preventDefault(); 
            pageSection(section); 
            window.location.hash = `#${section}`;
        });
    });
};