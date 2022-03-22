<template>
<<<<<<< HEAD
    <div class="footer">
        <footer class="text-center bg-dark text-white py-3">
            <h3>&copy; {{year}} - Jesus Omar Cervantes</h3>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            year:new Date().getFullYear(),
        }
    },
}
</script>
<style>
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
=======
  <div class="footer">
    <footer class="text-center bg-dark text-white py-3 bg-gradient">
      <h3>&copy; {{ year }} - Yirsis Serrano</h3>
    </footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    year: new Date().getFullYear(),
  }),
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
>>>>>>> ce2bf962e4480bf18a61b978aac458e0bb67145d
