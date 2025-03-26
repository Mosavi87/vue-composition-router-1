<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/Notkns">NotFound</router-link></li>
    </ul>

    <div>
      <router-view></router-view>
    </div>
  </div>

</template>