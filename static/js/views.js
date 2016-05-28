//{imgUrl: , name: , country: , title: }
const  menuProfileCard = _.template(
  `<div class="col s6">
      <img id="profile-picture" src="<%= imgUrl %>">
    </div>
    <div class="col s6">
      <h5><%= name %></h5>
      <p><%= country %></p>
      <p><%= title %></p>
    </div>`);

//{credits: , points: }
const menuProfileScore = _.template(
  `<div class="row">
      <div class="col l6">
        <p>Credits:</p>
        <p class="points-badge"><%= credits %></p>
      </div>
      <div class="col l6">
        <p>Points:</p>
        <p class="points-badge"><%= points %></p>
      </div>
  </div>`);

//{details: , imgUrl: }
const menuAward = _.template(
  `<div class="col l6">
    <a class=" tooltipped" data-position="top" data-delay="50" data-tooltip="<%= details %>">
      <img class="award" src="<%= imgUrl %>" alt="" >
    </a>
  </div>`
);

//{imgUrl: , title: , progress: ,goalDetails: , author: , tag: }
const feturedProject = _.template(
  `<div class="col l12">
    <div class="card medium">
        <div class="card-image">
          <img src="<%= imgUrl %>">
        </div>

        <div class="card-content">
          <a href="#" onclick=" SingleProjectController.renderProject() "><h5><%= title %></h5></a>
          <div class="progress">
              <div class="determinate" style="width: <%= progress %>%"></div>
          </div>
          <span class="project-details">Goal: <%= goalDetails %>/span>
          <p><%= author %></p>
          <span class="tag reconstruction" ><%= tag %></span>
        </div>

    </div>
  </div>`
);

//{imgUrl: , title: , progress: ,goalDetails: , author: , tag : }
const normalProject = _.template(
  `
  <div class="col l6">
    <div class="card medium">
        <div class="card-image">
          <img src="<=% imgUrl =>">
        </div>
        <div class="card-content">
          <h5><%= title =%></h5>
          <div class="progress">
              <div class="determinate" style="width: <%= progress %>%"></div>
          </div>
          <span class="project-details">Goal: <%= goalDetails %> - Tampere Finland</span>
          <p><%= author %></p>
          <span class="tag reconstruction" ><%= tag %></span>
        </div>
    </div>
  </div>
  `
);
