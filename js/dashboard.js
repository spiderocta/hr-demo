// dynamic sections in the same page
function showSection(sectionName) {
  var sections = document.querySelectorAll('.content section');
  sections.forEach(function(section) {
    section.style.display = 'none';
  });
  var targetSection = document.querySelector('.content .' + sectionName);
  if (targetSection) {
    targetSection.style.display = 'block';
  }
}

// frront end Table Search
$('#search').keyup(function() {
  var regex = new RegExp($('#search').val(), "i");
  var rows = $('table tr:gt(0)');
  rows.each(function (index) {
    title = $(this).children("#title").html()
    if (title.search(regex) != -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});