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
          <div>
            <input type="text" id="inputTask" name="inputTask" v-model="description" class="form-control" placeholder="Create a new task?" required="" autofocus="">
            <button type="button" class="btn-cus" v-on:click.prevent="addTask" >Ok</button>
          </div>
        </div>
        <div class="n-block-centr">
          <div class="wrapper-name">
            <h2>Actual task's</h2>
            <hr>
          </div>
          <div class="row">

            <div class="act-t col-md-4" v-for="(item, index) in data.items" :key="item">
              <div class="panel">
                 <button type="button" class="close" data-dismiss="alert" aria-hidden="true" v-on:click.prevent="deleteTask(index)">×</button>
                 <p class="task">1 {{ item }}</p>
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
      description:'',
      data: {
        items:[],
        numCurrent: null
      }
    }
  },
  methods: {
    addTask: function () {
      console.log(this.data.items);
      this.data.items.push(this.description);
    },
    deleteTask(index) {
      this.data.items.splice(index,1);
      console.log(this.data.items);
      for(let i = 0; i < this.data.items.length; i++){
        if(this.data.numCurrent === this.data.items[i]){
          this.data.numCurrent = i;
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style src="../../bootstrap.min.js"></style> -->


<style src="../../bstrap.min.css"></style>
<style src="../../style.css"></style>
