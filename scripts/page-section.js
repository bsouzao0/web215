function pageSection(sectionId) {
    const sections = ['home', 'introduction', 'contract'];
    
    sections.forEach((id) => {
        document.getElementById(id).style.display = 'none'; //If I wanna show the sections I should put 'block' instead of 'none'
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';

    const sectionTitles = {
        home: 'Home',
        introduction: 'Introduction',
        contract: 'Contract'
    };

    document.title = `Brenda Oliveira's Blue Orchid « WEB215 » ${sectionTitles[sectionId]}`;
}


window.onload = () => {
    
    pageSection('home');

    
    ['home', 'introduction', 'contract'].forEach((section) => {
        document.getElementById(`${section}-btn`).addEventListener('click', (event) => {
            event.preventDefault(); 
            pageSection(section); 
            window.location.hash = `#${section}`;
        });
    });
};