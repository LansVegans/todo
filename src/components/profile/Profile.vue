<template>
<div>
 <div class="con-centr">
   <div class="nav-head col-md-8">
      <div class="col-md-3">
        <h2>ToDoList</h2>
      </div>
      <div class="col-md-3">
        
      </div>
      <div class="col-md-3">
        
      </div>
      <div class="col-md-3">
        <h2>ToDoList</h2>
      </div>
   </div>
</div> 
<div class="con-centr">
  <div class="col-md-7">
    <div class="n-container">
      <div class="n-block">
        <div class="n-block-top">
          <h1 class="h1 mt-0 pt-20">Create a new task</h1>
          <label for="inputTask" class="sr-only">Create a new task</label>
          <input type="text" id="inputTask" class="form-control" placeholder="Create a new task?" required="" autofocus="">
          <button type="button" class="btn-cus">Ok</button>          
        </div>
        <div class="n-block-centr">
          <div class="wrapper-name">
            <h2>Actual task's</h2>
            <hr>
          </div>
          <div class="row">

            <div class="act-t col-md-4">
              <div class="panel">
                 <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                 <p class="task">1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sed nisi odio aut quaerat obcaecati.</p>
                 <div class="middle">
                    <div class="text">
                      <button class="none-btn">
                        <span class="glyphicon glyphicon-ok"></span>
                      </button>
                    </div>
                   </div>
               </div>
            </div>
            <div class="act-t col-md-4">
              <div class="panel">
                 <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                 <p class="task">2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ad, laborum officia, expedita, perferendis repellat in debitis consequuntur omnis blanditiis, consectetur obcaecati. Nobis enim repellat qui, illo nulla eveniet voluptate.</p>
                 <div class="middle">
                    <div class="text">
                      <button class="none-btn">
                        <span class="glyphicon glyphicon-ok"></span>
                      </button>
                    </div>
                   </div>
               </div>
            </div>
            <div class="act-t col-md-4">
              <div class="panel">
                 <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                 <p class="task">3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sed nisi odio aut quaerat obcaecati.</p>
                  <div class="middle">
                    <div class="text">
                      <button class="none-btn">
                        <span class="glyphicon glyphicon-ok"></span>
                      </button>
                    </div>
                   </div>
               </div>
            </div>
            <div class="act-t col-md-4">
              <div class="panel">
                 <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                 <p class="task">4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores saepe, rem optio. ipsum dolor sit amet, consectetur adipisicing elit. Architecto sed nisi odio aut quaerat obcaecati.</p>
                 <div class="middle">
                    <div class="text">
                      <button class="none-btn">
                        <span class="glyphicon glyphicon-ok"></span>
                      </button>
                    </div>
                   </div>
               </div>
            </div>
            <div class="act-t col-md-4">
              <div class="panel">
                 <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                 <p class="task">5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis veniam voluptas necessitatibus aliquid rerum velit praesentium vero sunt esse molestiae dignissimos nesciunt nostrum magni maiores accusantium enim, incidunt eius nihil.</p>
                 <div class="middle">
                    <div class="text">
                      <button class="none-btn">
                        <span class="glyphicon glyphicon-ok"></span>
                      </button>
                    </div>
                   </div>
               </div>
            </div>
            <div class="act-t col-md-4">
              <div class="panel">
                 <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                 <p class="task">6Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sed nisi odio aut quaerat obcaecati.</p>
                 <div class="middle">
                    <div class="text">
                      <button class="none-btn">
                        <span class="glyphicon glyphicon-ok"></span>
                      </button>
                    </div>
                   </div>
               </div>
            </div>
            <div class="act-t col-md-4">
              <div class="panel">
                 <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                 <p class="task">7Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sed nisi odio aut quaerat obcaecati.</p>
                 <div class="middle">
                    <div class="text">
                      <button class="none-btn">
                        <span class="glyphicon glyphicon-ok"></span>
                      </button>
                    </div>
                   </div>
               </div>
            </div><div class="act-t col-md-4">
              <div class="panel">
                 <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                 <p class="task">8Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sed nisi odio aut quaerat obcaecati.</p>
                 <div class="middle">
                    <div class="text">
                      <button class="none-btn">
                        <span class="glyphicon glyphicon-ok"></span>
                      </button>
                    </div>
                   </div>
               </div>
            </div>
          </div>
        </div>
        <div class="row n-block-bottom">
          <h2>Completed task's</h2>
          <hr>
          <div class="act-t col-md-4">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
</div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      msg: 'SignUp'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style src="../../bootstrap.min.js"></style> -->


<style src="../../style.css"></style>
<!-- <style src="../../bootstrap.min.css"></style> -->
