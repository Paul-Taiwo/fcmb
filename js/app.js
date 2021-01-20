/* FAQ Accordion */
$(".open").click(function() {
	var container = $(this).parents(".topic");
	var answer = container.find(".answer");
	var trigger = container.find(".faq-t");
  
	answer.slideToggle(200);
  
	if (trigger.hasClass("faq-o")) {
	  trigger.removeClass("faq-o");
	} else {
	  trigger.addClass("faq-o");
	}
  
	if (container.hasClass("expanded")) {
	  container.removeClass("expanded");
	} else {
	  container.addClass("expanded");
	}
  });
  
  jQuery(document).ready(function($) {
	$('.question').each(function() {
	  $(this).attr('data-search-term', $(this).text().toLowerCase() + $(this).find("ptag").text().toLowerCase());
  
	});
  
	$('.live-search-box').on('keyup', function() {
  
	  var searchTerm = $(this).val().toLowerCase();
  
	  $('.question').each(function() {
  
		if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
		  $(this).parent().parent().show();
		} else {
		  $(this).parent().parent().hide();
		}
  
	  });
  
	});
  
  });

// $(document).ready(function() {
// 	// let slider = document.getElementById('slider');
// 	// let numClick = 0;
// 	// let next = document.getElementById('swipebtn');
// 	// 	next.addEventListener('click', 	function next(){
// 	// 		// slider.scrollLeft += 271.25;
// 	// 		if(numClick < 5) {
// 	// 			numClick += 1;
// 	// 			slider.scrollLeft += 271.25;
// 	// 		}
// 	// 		else {
// 	// 			numClick = 0;
// 	// 			slider.scrollLeft = 0;
// 	// 		}
// 	// })

// 	let secondHover = document.getElementById('tracksaving');
// 	let thirdHover = document.getElementById('automate');
// 	let img1 = document.getElementById('fr1');
// 	let img2 = document.getElementById('fr2');	
// 	let img3 = document.getElementById('fr3');	

	
// 	secondHover.addEventListener('mouseover', function secondHover(){
// 		// slider.scrollLeft += 271.25;
// 		img1.style.display = 'none';
// 		img2.style.display = 'block';
// 	})

// 	secondHover.addEventListener('mouseout', function secondHover(){
// 		// slider.scrollLeft += 271.25;
// 		img1.style.display = 'block';
// 		img2.style.display = 'none';
// 	})

// 	thirdHover.addEventListener('mouseover', function secondHover(){
// 		// slider.scrollLeft += 271.25;
// 		img1.style.display = 'none';
// 		img3.style.display = 'block';
// 	})

// 	thirdHover.addEventListener('mouseout', function secondHover(){
// 		// slider.scrollLeft += 271.25;
// 		img1.style.display = 'block';
// 		img3.style.display = 'none';
// 	})
	

// })