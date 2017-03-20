window.onload=function(){
	$('#loading').css('display','none');
	AutoCompleteCode();
	function AutoCompleteCode(){
		var AutoChar = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		var RotateDeg = ['-75deg','-60deg','-45deg','-30deg','-15deg','15deg','30deg','45deg','60deg','75deg','180deg'];
		$('#auto1').text(AutoChar[Math.floor(Math.random()*36)]).css('transform','rotateZ('+RotateDeg[Math.floor(Math.random()*11)]+')');
		$('#auto2').text(AutoChar[Math.floor(Math.random()*36)]).css('transform','rotateZ('+RotateDeg[Math.floor(Math.random()*11)]+')');
		$('#auto3').text(AutoChar[Math.floor(Math.random()*36)]).css('transform','rotateZ('+RotateDeg[Math.floor(Math.random()*11)]+')');
		$('#auto4').text(AutoChar[Math.floor(Math.random()*36)]).css('transform','rotateZ('+RotateDeg[Math.floor(Math.random()*11)]+')');	
	}
	$('#autoCode').on('click',AutoCompleteCode);
	
	
	
}