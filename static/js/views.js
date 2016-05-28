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

const projectSkeleton = _.template(
  `
  <div id="project" class="">
    <div class="card-content">
        <ul class="tabs">
          <li class="tab col s3"><a class="active" href="#project-content">Project</a></li>
          <li class="tab col s3"><a  href="#blog-content">Blog</a></li>
        </ul>
    </div>
  </div>
  <!-- ends menu -->
  <div class="">
    <div class="card-content">
      <div id="project-content" class="col s12">
        <div id="single-project-description" class="card large">
          <div class="card-image">
            <img src="http://materializecss.com/images/sample-1.jpg" alt="" />
          </div>
          <div class="card-content">
            <span class="card-title">After fire reconstruction</span>
            <p>
              Owner:<span class="details">Samuel Blanco</span>
            </p>
            <p>
              Goal:<span class="details"> 14000 / 20000</span>
            </p>
            <div class="progress">
                <div class="determinate" style="width: 70%"></div>
            </div>
          </div>
          <div class="card-action">
            <a class="modal-trigger" href="#modal1">Donate</a>
          </div>
        </div>
        <!-- Modal Structure -->
        <div id="modal1" class="modal donation-modal">
          <div class="modal-content">
            <div class="row">
              <div class="col s4">
                <p>
                  <img class="" src="/static/img/badges/coins.png" alt="" />
                </p>
              </div>
                <div class="col s8">
                  <p>
                    Donate to:
                  </p>
                  <h4>After Fire Reconstruction</h4>
                  <form class="" action="" method="">
                    <input type="number" name="name" value="1000" step="100">
                  </form>
                  <br><br>
                  <h5 class="blue-text">Thanks for your support!</h5>
                </div>
            </div>

          </div>
          <div class="modal-footer">
            <a href="#!" onclick="Materialize.toast('Thanks for donating!', 4000)" class=" modal-action modal-close waves-effect waves-green btn-flat">Donate</a>
          </div>
        </div>
        <!-- Description Content -->
        <div class="card">
          <div class="card-content">
            <%= content %>
          </div>

        </div>
      </div>
      <div id="blog-content" class="col s12">

        <div class="card">
          <div class="card-content">
            <span class="blog-date">9 May</span>
            <h5>First great step</h5>
            <p>
              We are making so much advances, with the initial found we managed to fly, Thanks a lot!!!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            </p>
            <a href="#">read comments</a>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="blog-date">7 May</span>
            <h5>Getting the first found</h5>
            <p>
              as the 20% is done we got that part to start with the first part of the project thanks for the support
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="blog-date">5 May</span>
            <h5>Project lanched</h5>
            <p>
              Thanks for all the support, we jsut started with the campaign and we fell so happy that everyone is so enthusiastic asd afa dq
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>

  `
);

const projectDetails = _.template(
  
);
