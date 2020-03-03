$( document ).ready(function() {
  // Handler for .ready() called.
var Obj = {
	"skills":[
	{"name":"HTML", "progress":90, "class": "progress-bar progress-bar-warning"},
	{"name":"CSS", "progress":80, "class": "progress-bar"},
	{"name":"JavaScript", "progress":70, "class": "progress-bar"},
	{"name":"Docker", "progress":10, "class": "progress-bar progress-bar-danger"},
	{"name":"K8S", "progress":10, "class": "progress-bar progress-bar-danger"},
]  
};

var html = "";
for (i in Obj.skills) {
	console.log(Obj.skills[i].name + ":" + Obj.skills[i].progress + ":" + Obj.skills[i].class);
	html += `<h3>`+Obj.skills[i].name+`</h3>
	<div class="progress">
    <div class="`+Obj.skills[i].class+`" role="progressbar" aria-valuenow="`+Obj.skills[i].progress+`" aria-valuemin="0" aria-valuemax="100" style="width:`+Obj.skills[i].progress+`%">
      `+Obj.skills[i].progress+`% Complete
    </div>
  </div>`;
}
console.log(html);
console.log($(".container"));
$(".container").append(html);  
});