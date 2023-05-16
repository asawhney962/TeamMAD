const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});







// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



/*========================================================================================*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
//========================table for schedule==========================================
// Get unique values for the desired columns

// {2 : ["M", "F"], 3 : ["RnD", "Engineering", "Design"], 4 : [], 5 : []}

function getUniqueValuesFromColumn() {

  var unique_col_values_dict = {}

  allFilters = document.querySelectorAll(".table-filter")
  allFilters.forEach((filter_i) => {
      col_index = filter_i.parentElement.getAttribute("col-index");
      // alert(col_index)
      const rows = document.querySelectorAll("#emp-table > tbody > tr")

      rows.forEach((row) => {
          cell_value = row.querySelector("td:nth-child("+col_index+")").innerHTML;
          // if the col index is already present in the dict
          if (col_index in unique_col_values_dict) {

              // if the cell value is already present in the array
              if (unique_col_values_dict[col_index].includes(cell_value)) {
                  // alert(cell_value + " is already present in the array : " + unique_col_values_dict[col_index])

              } else {
                  unique_col_values_dict[col_index].push(cell_value)
                  // alert("Array after adding the cell value : " + unique_col_values_dict[col_index])

              }


          } else {
              unique_col_values_dict[col_index] = new Array(cell_value)
          }
      });

      
  });

  for(i in unique_col_values_dict) {
      alert("Column index : " + i + " has Unique values : \n" + unique_col_values_dict[i]);
  }

  updateSelectOptions(unique_col_values_dict)

};

// Add <option> tags to the desired columns based on the unique values

function updateSelectOptions(unique_col_values_dict) {
  allFilters = document.querySelectorAll(".table-filter")

  allFilters.forEach((filter_i) => {
      col_index = filter_i.parentElement.getAttribute('col-index')

      unique_col_values_dict[col_index].forEach((i) => {
          filter_i.innerHTML = filter_i.innerHTML + `\n<option value="${i}">${i}</option>`
      });

  });
};


// Create filter_rows() function

// filter_value_dict {2 : Value selected, 4:value, 5: value}

function filter_rows() {
  allFilters = document.querySelectorAll(".table-filter")
  var filter_value_dict = {}

  allFilters.forEach((filter_i) => {
      col_index = filter_i.parentElement.getAttribute('col-index')

      value = filter_i.value
      if (value != "all") {
          filter_value_dict[col_index] = value;
      }
  });

  var col_cell_value_dict = {};

  const rows = document.querySelectorAll("#emp-table tbody tr");
  rows.forEach((row) => {
      var display_row = true;

      allFilters.forEach((filter_i) => {
          col_index = filter_i.parentElement.getAttribute('col-index')
          col_cell_value_dict[col_index] = row.querySelector("td:nth-child(" + col_index+ ")").innerHTML
      })

      for (var col_i in filter_value_dict) {
          filter_value = filter_value_dict[col_i]
          row_cell_value = col_cell_value_dict[col_i]
          
          if (row_cell_value.indexOf(filter_value) == -1 && filter_value != "all") {
              display_row = false;
              break;
          }


      }

      if (display_row == true) {
          row.style.display = "table-row"

      } else {
          row.style.display = "none"

      }





  })

}
//=================================collasible======================
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//====================================forum=============================
var defaultThreads = [
  {
      id: 1,
      title: "Thread 1",
      author: "Aaron",
      date: Date.now(),
      content: "Thread content",
      comments: [
          {
              author: "Jack",
              date: Date.now(),
              content: "Hey there"
          },
          {
              author: "Arthur",
              date: Date.now(),
              content: "Hey to you too"
          }
      ]
  },
  {
      id: 2,
      title: "Thread 2",
      author: "Aaron",
      date: Date.now(),
      content: "Thread content 2",
      comments: [
          {
              author: "Jack",
              date: Date.now(),
              content: "Hey there"
          },
          {
              author: "Arthur",
              date: Date.now(),
              content: "Hey to you too"
          }
      ]
  }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
  threads = JSON.parse(localStorage.getItem('threads'));
} else {
  threads = defaultThreads;
  localStorage.setItem('threads', JSON.stringify(defaultThreads));
}