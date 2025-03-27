// Normalise BS Toolip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// Normalise BS Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));


// Normalise BS Offcanvas trigger
$('body').on( 'click tap', '.add-anomaly', function(e) {
	var myOffcanvas = $('#offcanvasRight')[0];
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    e.stopPropagation();
	bsOffcanvas.toggle();  
});


//Toggle section icons
let curSecToggle = document.querySelector('#currentSectionToggle');

curSecToggle.addEventListener('click', (e) =>  {
    $('#currentSectionToggle i').toggleClass("fa-eye-slash");
    $('#currentSectionToggle i').toggleClass("fa-eye");
    $('#expandAnomalies').toggleClass("col-md-10");
    $('#expandAnomalies').toggleClass("col-md-12");    
});


//Toggle Show More/Less
let showMore = document.querySelector('#showMore');
let showLess = document.querySelector('#showLess');

showMore.addEventListener('click', (e) =>  {
    $('#showMore').toggleClass("d-none"); 
    $('#showLess').toggleClass("d-none");
    $('#anomalyList').toggleClass("max-height");
    $('#anomalyList').toggleClass("min-height");        
});

showLess.addEventListener('click', (e) =>  {
    $('#showLess').toggleClass("d-none"); 
    $('#showMore').toggleClass("d-none");
    $('#anomalyList').toggleClass("min-height");
    $('#anomalyList').toggleClass("max-height");        
});


// Get current date and time
var now = new Date();
var datetime = now.toISOString().slice(0, 10);

// Insert date and time into HTML
document.getElementById("datetime").innerHTML = datetime;


// Declare Filter buttons
let allFilterBtn = document.querySelector('#allFilterBtn');
let coldFilterBtn = document.querySelector('#coldFilterBtn');
let hotFilterBtn = document.querySelector('#hotFilterBtn');
let windFilterBtn = document.querySelector('#windFilterBtn');
let rainFilterBtn = document.querySelector('#rainFilterBtn');
let thunderFilterBtn = document.querySelector('#thunderFilterBtn');
let tornadoFilterBtn = document.querySelector('#tornadoFilterBtn');
let droughtFilterBtn = document.querySelector('#droughtFilterBtn');
let clearFilters = document.querySelector('#clearFilters');


// Events for Filter buttons
allFilterBtn.addEventListener('click', (e) =>  {
    $('.hot-item, .cold-item, .wind-item, .rain-item, .thunder-item, .tornado-item, .drought-item').removeClass("d-none");       
});
clearFilters.addEventListener('click', (e) =>  {
    $('.hot-item, .cold-item, .wind-item, .rain-item, .thunder-item, .tornado-item, .drought-item').removeClass("d-none");       
});
coldFilterBtn.addEventListener('click', (e) =>  {
    $('.hot-item, .cold-item, .wind-item, .rain-item, .thunder-item, .tornado-item, .drought-item').removeClass("d-none"); 
    $('.hot-item, .wind-item, .rain-item, .thunder-item, .tornado-item, .drought-item').toggleClass("d-none");       
});
hotFilterBtn.addEventListener('click', (e) =>  {
    $('.hot-item, .cold-item, .wind-item, .rain-item, .thunder-item, .tornado-item, .drought-item').removeClass("d-none"); 
    $('.cold-item, .wind-item, .rain-item, .thunder-item, .tornado-item, .drought-item').toggleClass("d-none");       
});
windFilterBtn.addEventListener('click', (e) =>  {
    $('.hot-item, .cold-item, .wind-item, .rain-item, .thunder-item, .tornado-item, .drought-item').removeClass("d-none"); 
    $('.hot-item, .cold-item, .rain-item, .thunder-item, .tornado-item, .drought-item').toggleClass("d-none");       
});
rainFilterBtn.addEventListener('click', (e) =>  {
    $('.hot-item, .cold-item, .wind-item, .rain-item, .thunder-item, .tornado-item, .drought-item').removeClass("d-none"); 
    $('.hot-item, .cold-item, .wind-item, .thunder-item, .tornado-item, .drought-item').toggleClass("d-none");       
});
thunderFilterBtn.addEventListener('click', (e) =>  {
    $('.hot-item, .cold-item, .wind-item, .rain-item, .thunder-item, .tornado-item, .drought-item').removeClass("d-none"); 
    $('.hot-item, .cold-item, .wind-item, .rain-item, .tornado-item, .drought-item').toggleClass("d-none");       
});
tornadoFilterBtn.addEventListener('click', (e) =>  {
    $('.hot-item, .cold-item, .wind-item, .rain-item, .thunder-item, .tornado-item, .drought-item').removeClass("d-none"); 
    $('.hot-item, .cold-item, .wind-item, .rain-item, .thunder-item, .drought-item').toggleClass("d-none");       
});
droughtFilterBtn.addEventListener('click', (e) =>  {
    $('.hot-item, .cold-item, .wind-item, .rain-item, .thunder-item, .tornado-item, .drought-item').removeClass("d-none"); 
    $('.hot-item, .cold-item, .wind-item, .rain-item, .thunder-item, .tornado-item').toggleClass("d-none");       
});


// Filter Severity Function 
document.querySelector("#severityRange").addEventListener('change', filterSeverity);

function filterSeverity(){
    if (this.value == 1 ) {
        $('.col-md-4').removeClass("d-none");  
        $('.severity2, .severity3, .severity4, .severity5 ').closest('.col-md-4').toggleClass("d-none");       
    } else if (this.value == 2 ) {
        $('.col-md-4').removeClass("d-none");  
        $('.severity1, .severity3, .severity4, .severity5 ').closest('.col-md-4').toggleClass("d-none");       
    }
    else if (this.value == 3 ) {
        $('.col-md-4').removeClass("d-none");  
        $('.severity1, .severity2, .severity4, .severity5 ').closest('.col-md-4').toggleClass("d-none");       
    }
    else if (this.value == 4 ) {
        $('.col-md-4').removeClass("d-none");  
        $('.severity1, .severity2, .severity3, .severity5 ').closest('.col-md-4').toggleClass("d-none");       
    }
    else if (this.value == 5 ) {
        $('.col-md-4').removeClass("d-none");  
        $('.severity1, .severity2, .severity3, .severity4 ').closest('.col-md-4').toggleClass("d-none");       
    }  
}

// Add button loader 

function submitForm() {
    document.getElementById("anomalyForm").submit()
}

document.getElementById('addAnomaly').onclick = function() {
    this.innerHTML = "<i class='fa-solid fa-spinner fa-spin'></i>";
    setTimeout(submitForm, 3000);     
}