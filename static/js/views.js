
const  profileCard = _.template(
  `<div class="col s6">
      <img id="profile-picture" src="<%= imgUrl %>">
    </div>
    <div class="col s6">
      <h5><%= name %></h5>
      <p><%= country %></p>
      <p><%= title %></p>
    </div>`);

const profileScore = _.template(
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
