$( document ).ready(function() {

	$('#box1').click(function() {
		$( "#box1" ).css( "height", "50%" );
		$( "#textclick1" ).css( "display", "none" );
		$( "#textclick3" ).css( "display", "none" );
		$( "#textclick2" ).css( "display", "block" );
        $( "#textclick4" ).css( "display", "none" );
        $( "#textclick5" ).css( "display", "none" );
	});

	$('#box2').click(function() {
		$( "#box2" ).css( "margin-left", "-20%" );
		$( "#box1" ).css( "height", "25%" );
		$( "#textclick2" ).css( "display", "none" );
		$( "#textclick3" ).css( "display", "block" );
        $( "#textclick4" ).css( "display", "none" );
        $( "#textclick5" ).css( "display", "none" );
	});

	$('#box3').click(function() {
		$( "#box2" ).css( "margin", "-10%" );
		$( "#box3" ).css( "transform", "rotate(40deg)" );
		$( "#textclick3" ).css( "display", "none" );
		$( "#textclick4" ).css( "display", "block" );
        $( "#textclick5" ).css( "display", "none" );
	});

	$('#box4').click(function() {
		$( "#box4" ).css( "transform", "skewY(20deg)" );
		$( "#box2" ).css( "margin-left", "20%" );
        $( "#textclick4" ).css( "display", "none" );
        $( "#textclick5" ).css( "display", "none" );
	});

	$('#box5').click(function() {
		$( "#box5" ).css( "margin-left", "-30%" );
        $( "#box5" ).css( "margin-top", "-30%" );
        $( "#box4" ).css( "height", "25%" );
	});

	$('#box6').click(function() {
		$( "#box6" ).css( "height", "200%" );
        $( "#box6" ).css( "margin-left", "-70%" );
	});

	$('#box7').click(function() {
		$( "#box7" ).css( "margin-right", "-30%" );
        $( "#box7" ).css( "margin-top", "-20%" );
        $( "#box7" ).css( "width", "200%" );
	});

	$('#box8').click(function() {
		$( "#box8" ).css( "height", "160%" );
        $( "#box8" ).css( "margin-left", "160%" );
	});

	$('#box9').click(function() {
		$( "#box1" ).css( "display", "none" );
        $( "#box2" ).css( "display", "none" );
        $( "#box3" ).css( "display", "none" );
        $( "#box4" ).css( "display", "none" );
        $( "#box5" ).css( "display", "none" );
        $( "#box6" ).css( "display", "none" );
        $( "#box7" ).css( "display", "none" );
        $( "#box8" ).css( "display", "none" );
        $( "#box9" ).css( "display", "none" );
        $( "#main" ).css( "display", "none" );
        $( "#textclick4" ).css( "display", "none" );
        $( "#textclick5" ).css( "display", "block" );
	});
    
});





