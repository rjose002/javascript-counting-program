
	$("#one").on("click", function(){
	var name=$("#name").val();
	console.log(name);
	
	if(isNaN(name)){
	alert('Your name is ' + name);
	$('h2').text(' Welcome '+name+'!');
	$('h2').css('background-color','lightgreen');
}
	else{
	alert("Please eneter a valid name.")
}
});
	$("#two").on("click",function(){
	var number=$("#number").val();
	for(i=0;i<=number;i+=2){
	console.log(i);
	$("h3").append(i+"<br>");

}
});
	$('h1').css('background-color','red');