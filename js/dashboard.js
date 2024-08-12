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

// emp modal 
document.addEventListener('DOMContentLoaded', function() {
  var rows = document.querySelectorAll('#modaltable tbody tr');
  rows.forEach(function(row) {
    row.addEventListener('click', function(event) {
      event.preventDefault();
      var modal = document.querySelector('.emp-modal');
      if (modal.style.display === 'none') {
        modal.style.display = 'block';
      } else {
        modal.style.display = 'none';
      }
    });
  });

  window.onclick = function(event) {
    var modal = document.querySelector('.emp-modal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    var modal = document.querySelector('.emp-modal');
    modal.style.display = 'none';
  };
});


// new employee modal
var modal = document.getElementById("new-emp-modal");
var btn = document.getElementsByClassName("emp-add")[0];
var span = document.getElementsByClassName("close")[1];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
