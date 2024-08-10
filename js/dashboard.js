function showSection(sectionName) {
  // Get all sections within the content div
  var sections = document.querySelectorAll('.content section');

  // Iterate over each section and hide it
  sections.forEach(function(section) {
    section.style.display = 'none';
  });

  // Show the selected section
  var targetSection = document.querySelector('.content .' + sectionName);
  if (targetSection) {
    targetSection.style.display = 'block';
  }
}
