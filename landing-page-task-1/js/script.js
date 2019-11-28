const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

//form validation

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
  }
  
  
  
  function validation() {
	var validated = true;
  
	var email = $("#email").val();
	var name = $("#name").val();
	$("#name").next().text("");
	$("#email").next().text("");
  
	if (name == '' || name == "null" || name.length < 2) {
	  $("#name").next().text("* Name must be at least 2 chars");
	  name == 'name';
	  validated = false;
	} else if (!validateEmail(email)) {
	  $("#email").next().text("* please add a valid email");
	  $('#email').val() == 'email';
	  validated = false;
	}
  
	if (validated == false) {
	  return false;
	} else {
	  window.open("thanks.html", "_self");
	}
  
  }
  
  $("#contact-btn").on("click", validation);
