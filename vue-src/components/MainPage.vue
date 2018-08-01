<template>
 <transition name="fade" :duration="{ enter: 500, leave: 1 }" v-on:before-enter = "beforeEnter" >
     <div class="container" id="MainPage">
      <div class="starter-template">
        <h1>Bootstrap starter template</h1>
        <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
      </div>

    </div><!-- /.container -->
    </transition>
</template>

<script>
    export default {
        name: 'MainPage',
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
