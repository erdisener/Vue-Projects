<template>
<div class="container">

    
<router-link to="/" class="nav-link" active-class="active">Anasayfa</router-link>
<router-link to="/hakkimda" class="nav-link" active-class="active">Hakkımda</router-link>
<router-link to="/detay" class="nav-link" active-class="active">Açıklamalar</router-link>


<router-view class="mt-3"></router-view>
</div>
</template>

<style>
.nav-link {
  
  color: #fa6558;
  margin: 1rem;
  text-decoration: none;
}
.active {
background-color: #fa6558;
color: #fff;
}

</style>
