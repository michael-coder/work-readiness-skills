$(document).ready(function() {
  // Handler for .ready() called.
  var Obj = {
    "skills": [{
        "name": "Fund",
        "progress": 1,
        "class": "progress-bar progress-bar-danger"
      },
      {
        "name": "Tax",
        "progress": 1,
        "class": "progress-bar progress-bar-danger"
      },
      {
        "name": "Accounting",
        "progress": 1,
        "class": "progress-bar progress-bar-danger"
      },
      {
        "name": "Agile",
        "progress": 70,
        "class": "progress-bar progress-bar-success"
      },
      {
        "name": "SAFe Agile",
        "progress": 70,
        "class": "progress-bar progress-bar-success"
      },
      {
        "name": "PMBOOK",
        "progress": 27,
        "class": "progress-bar progress-bar-danger"
      },
      {
        "name": "Google Analytics",
        "progress": 15,
        "class": "progress-bar progress-bar-danger"
      },

      {
        "name": "HTML",
        "progress": 90,
        "class": "progress-bar progress-bar-success"
      },
      {
        "name": "CSS",
        "progress": 90,
        "class": "progress-bar progress-bar-success"
      },
      {
        "name": "JavaScript",
        "progress": 90,
        "class": "progress-bar progress-bar-success"
      },
      {
        "name": "JQuery",
        "progress": 70,
        "class": "progress-bar progress-bar-success"
      },
      {
        "name": "Java",
        "progress": 50,
        "class": "progress-bar progress-bar-warning"
      },
      {
        "name": "Perl",
        "progress": 70,
        "class": "progress-bar progress-bar-success"
      },
      {
        "name": "MySQL",
        "progress": 60,
        "class": "progress-bar progress-bar-warning"
      },
      {
        "name": "Git",
        "progress": 60,
        "class": "progress-bar progress-bar-warning"
      },
      {
        "name": "JSON",
        "progress": 50,
        "class": "progress-bar progress-bar-warning"
      },
      {
        "name": "XML",
        "progress": 50,
        "class": "progress-bar progress-bar-warning"
      },
      {
        "name": "YAML",
        "progress": 60,
        "class": "progress-bar progress-bar-warning"
      },
      {
        "name": "Windows",
        "progress": 50,
        "class": "progress-bar progress-bar-warning"
      },
      {
        "name": "Linux",
        "progress": 70,
        "class": "progress-bar progress-bar-success"
      },
      {
        "name": "Bash",
        "progress": 60,
        "class": "progress-bar progress-bar-warning"
      },

      {
        "name": "Cloud Computing",
        "progress": 20,
        "class": "progress-bar progress-bar-danger"
      },
      {
        "name": "Docker",
        "progress": 20,
        "class": "progress-bar progress-bar-danger"
      },
      {
        "name": "Kubernetes",
        "progress": 20,
        "class": "progress-bar progress-bar-danger"
      },
    ]
  };

  var html = "";
  for (i in Obj.skills) {
    console.log(Obj.skills[i].name + ":" + Obj.skills[i].progress + ":" + Obj.skills[i].class);
    html += `<h3>` + Obj.skills[i].name + `</h3>
	<div class="progress">
    <div class="` + Obj.skills[i].class + `" role="progressbar" aria-valuenow="` + Obj.skills[i].progress + `" aria-valuemin="0" aria-valuemax="100" style="width:` + Obj.skills[i].progress + `%">
      ` + Obj.skills[i].progress + `% Complete
    </div>
  </div>`;
  }

  var sampleHtml = `
  <p>The contextual classes colors the progress bars:</p>
  <div class="progress">
    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">
      40% Complete (success)
    </div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">
      50% Complete (info)
    </div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%">
      60% Complete (warning)
    </div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">
      70% Complete (danger)
    </div>
  </div>
`;

  //html += sampleHtml;

  console.log(html);
  console.log($(".container"));
  $(".container").append(html);
});
