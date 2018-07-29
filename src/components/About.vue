<template>
<transition name="slideUp" :duration="{ enter: 800, leave: 0 }" v-on:before-enter = "beforeEnter">
    
  <div class="container" id="AboutPage">

      <div class="starter-template">
        <h1>This is the About Page</h1>
        <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
      </div>

    </div><!-- /.container -->
    </transition>
</template>

<script>
    export default {
        name: 'AboutPage',
        data: function() {
            return {

            }
        },
        methods: {
            beforeEnter() {
                var currentPage = this.$options._refElm;
                currentPage.setAttribute("class", "hidden");
                setTimeout(function() {
                    currentPage.removeAttribute("class", "hidden");
                }, 300);
            }
        }

    }

</script>

<style>
    

</style>
