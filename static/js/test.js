var mainContent = $("#main-content")

var projectsBtn = $("#btn-projects")
var profileBtn = $("#btn-profile")
var notificationssBtn = $("#btn-notifications")

var testProjects = $("#test-projects")

projectsBtn.on("click", function(){
  console.log(testProjects.html())
  mainContent.html( testProjects )
});
