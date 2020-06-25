var btn="btn";
var fa="glyphicon glyphicon-trash";
var t="true";
$("input").on("keypress",function(e){
if(e.which===13){
	var inp=document.querySelector("input");
	console.log(inp.value);
$("ul").append("<li>	<span class='fa fa-trash' aria-hidden='true' ></span>"+"  "+inp.value+"</li>");
inp.value="";
}
});


$('ul').on("click", "li",function(){
$(this).toggleClass("deco");

});
$("ul").on("click", "span",function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
    event.stopPropagation();
})

$("input").on("keypress",function f(){
var s=$("li");
var i=0;
for(var x=0;x<s.length;x++)
{
if(i%2===0){
	s[x].style.background="white";
}
i=i+1;
}
});

$("i").addClass("trans");
$("i").on("click",function(){
	$("input").fadeToggle(500);
	$("i").toggleClass("trans");
});