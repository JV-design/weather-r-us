// Toolip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
// Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

// // Varying Modals
// const exampleModal = document.getElementById('exampleModal')
// exampleModal.addEventListener('show.bs.modal', event => {
//   // Button that triggered the modal
//   const button = event.relatedTarget
//   // Extract info from data-bs-* attributes
//   const recipient = button.getAttribute('data-bs-whatever') 
//   // Update the modal's content.
//   const modalTitle = exampleModal.querySelector('.modal-title')
//   const modalBodyInput = exampleModal.querySelector('.modal-body input')

//   modalTitle.textContent = `New message to ${recipient}`
//   modalBodyInput.value = recipient
// });


// Offcanvas trigger
$('body').on( 'click tap', '.add-anomaly', function(e) {
	var myOffcanvas = $('#offcanvasRight')[0];
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    e.stopPropagation();
	bsOffcanvas.toggle();  
});


//Toggle section icons
let curSecToggle = document.querySelector('#currentSectionToggle')

curSecToggle.addEventListener('click', (e) =>  {
    $('#currentSectionToggle i').toggleClass("fa-eye-slash");
    $('#currentSectionToggle i').toggleClass("fa-eye");
    
});


  // Get current date and time
  var now = new Date();
  var datetime = now.toISOString().slice(0, 10);

  // Insert date and time into HTML
  document.getElementById("datetime").innerHTML = datetime;




