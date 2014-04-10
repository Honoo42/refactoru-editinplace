$(document).on('ready', function() {
	// var shift = function(){
	// 	$(this).css('background-color','red');
	// };
  $(document).on('click','.clickhere', function(e) {
  		console.log(this);
  		TBox(this);
  });
  $("input").on('blur', function() {
  	RBox(this);
  });

  function TBox(obj) {
  	var id = $(obj).attr("id");
  	var tid = id.replace("click_here_", "clic_khere")
  	var input = $('<input />', { 'type': 'text', 'name' : 'n' + tid, 'id': tid, 'class': 'text_box', 'value':
  	$(obj).html() });
  	$(obj).parent().append(input);
  	$(obj).remove();
  	input.focus();
  }

  function RBox(obj) {
  	var id = $(obj).attr("id");
  	var tid= id.replace("clic_khere"," click_here_");
  	var input= $('<p />', { 'id':tid, 'class': 'clickhere', 'html':$(obj).val() });
  	$(obj).parent().append(input);
  	$(obj).remove();
  	input.blur();
  }

	// $('p').on('click',shift);

// 	var blurredOut = function() {
// 		$('#divbox').blur();
// 		$('divbox').append( function () {
// 			var textField = $(this).val(text);
// 		});
// 	};
// 	var input = function(){
// 		$(this).replaceWith('<input type="text" placeholder="Please enter a brief bio." class="edittext" maxlength="500">' );
// 	};
// 	var userInput = function(){
// 		$('#divbox').toggle(input);
// 		// $('#divbox').focus('<input type="text" class="edittext" >');

// 	};
// 	$('#divbox').mouseenter(function (){
// 		$(this).css('background-color','peachpuff');
// 	});
// 	$('#divbox').mouseleave(function () {
// 		$(this).css('background-color','white');
// 	});
// 	$('#divbox').on('click',userInput);
// 	// $(document).hide("blur", "#divbox", userinput);

// 	// var unclick = function () {
// 	// 	$('#divbox').blur();
// 	// 	$('#divbox').replaceWith('')
// 	// 	// body...
// 	// }
	
// // var addEvent = function(elem, type, fn) { // Simple utility for cross-browser event handling
// //     if (elem.addEventListener) elem.addEventListener(type, fn, false);
// //     else if (elem.attachEvent) elem.attachEvent('on' + type, fn);
// // },
// // textField = document.getElementById('myField'),
// // placeholder = 'Type some text'; // The placeholder text

// // addEvent(textField, 'focus', function() {
// //     if (this.value === placeholder) this.value = '';
// // });
// // addEvent(textField, 'blur', function() {
// //     if (this.value === '') this.value = placeholder;
// // });
});