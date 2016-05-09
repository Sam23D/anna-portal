var mainContent = $("#main-content");

var projectsBtn = $("#btn-projects");
var profileBtn = $("#btn-profile");
var notificationsBtn = $("#btn-notifications");

var projectsContainer = $("#projects-container");
var singleProject = $("#project-container");


var main = function(){
  clearMainContainer();
}

//#########################################################################VIEWS
//#########################################################################VIEWS
//#########################################################################VIEWS
var allContentViews = [
  singleProject,
  projectsContainer
]

AllProjectsView = {
  displayView: function(){
    clearMainContainer();
    projectsContainer.show();
  }
}


//button event actions bindings
projectsBtn.on("click",function(){
  clearMainContainer();
  projectsContainer.show();
});
notificationsBtn.on("click", function(){
  clearMainContainer();

});



var clearMainContainer = function(){ // sets all views in the container to hidden
  allContentViews.forEach(function(view){
    view.hide();
  })
}


//###################################################################CONTROLLERS
//###################################################################CONTROLLERS
//###################################################################CONTROLLERS

var SingleProjectController = {
  getProject : function(){
   // request project with id from server
 },
 renderProject : function( ){
   //fill single project container
   console.log("dam")
   clearMainContainer();
   singleProject.show();
 }
}

//########################################################################MODELS
//########################################################################MODELS
//########################################################################MODELS
var Project = {
  title : "Test Project",
  img : "https://d.ibtimes.co.uk/en/full/1477372/syria-2015-photos.jpg",
  content :`  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`
}

//MAIN
main();
