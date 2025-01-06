
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const skillsSection = document.querySelector('#skills');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Skills';
toggleButton.style.marginBottom = '10px';
skillsSection.prepend(toggleButton);

toggleButton.addEventListener('click', () => {
    const skillsList = skillsSection.querySelector('ul');
    skillsList.style.display = skillsList.style.display === 'none' ? 'block' : 'none';
});


document.querySelectorAll('#projects .project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        project.style.transform = 'scale(1.05)';
        project.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    });
    project.addEventListener('mouseleave', () => {
        project.style.boxShadow = 'none';
        project.style.transform = 'scale(1)';
    });
});
