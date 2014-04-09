/*$(document).ready(function() {
	console.log('document.ready');*/
	// $.ajax({
	// 	url: "soundfile.mp3",
	// 	success: function() {
	// 		$("#play_button").show();
	// 	}
	// });
//http://markdalgleish.com/2011/04/document-ready-for-jquery-mobile/

function pageScript(func) {
  var $context = $("div:jqmData(role='page'):last");
  func($context);
}

pageScript(function($context){
  $context.bind("pagebeforecreate", function(event, ui) {
    console.log("The DOM is untouched by jQM");
  });

  $context.bind("pagebeforeshow", function(event, ui) {
    console.log("Before show");
  });

  $context.bind("pageshow", function(event, ui) {
    console.log("Show");
  });

  $context.bind("pagebeforehide", function(event, ui) {
    console.log("Before hide");
  });

  $context.bind("pagehide", function(event, ui) {
    console.log("Hide");
  });

	var notesData;
	$.getJSON("js/songs.json", function (data) {  //get json file
		console.log("made it");
		console.debug(data);
		 $.each(data["songs"], function(key, val) {   //loop through array of objects
			console.log("key:"+key);
		 	console.log("val:");
		 	console.debug(val);
		 	var obj = val; //alias the object to handle inside next .each
		 	console.log("obj.  obj should === val")
		 	console.debug(obj);
		 	$.each(val["tunings"], function(key, val) {  //loop through each tuning
		 		
		 		console.log("for each tuning key:"+key);
		 		console.log("for each tuning value:");
				console.debug(val);
		 		// $("'#" + obj["id"] + "'").append("<button src='" + val + ".mp3'> val</button"); //target view id and append button
		 		$("#" + obj["id"]).append('<button id="' + key + '" data-role="button" src="' + val + '.mp3">'+val+ '</button'); //target view id and append button;
		 		
		 	});

		 	$('button').click(function(e) { 
		 		/*$.mobile.loading('show');*/
		 		console.log($(this).attr('src'));
		 		$('audio source').attr('src', "tuneNotes/" + $(this).text() + ".ogg");
		 		$('audio #ogg').attr('src',"tuneNotes/" + $(this).attr('src')); 
		 		$('audio').load();
		 		$('#aud').trigger("play");
		 		/*$.mobile.loading('hide');*/
		 	})
		 });
	});
	$.ready.refresh();
		console.log("end script");
});


