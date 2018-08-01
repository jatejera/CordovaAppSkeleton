<template>
<div id="AppPage">
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
            
<!--
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
          </li>
-->
         
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    
    <li class="nav-item active">
            <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
          </li>

    
    <router-view></router-view>
    
</div>


</template>

<script>
//    import axios from 'axios';
//        import router from 'vue-router';
    export default {
        name: 'AppPage',
        data: function() {
            return {
            }
        }
      
    }

</script>
