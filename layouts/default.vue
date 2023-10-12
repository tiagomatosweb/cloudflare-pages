<template>
	<div>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/page1">Page 1</NuxtLink></li>
      <li><NuxtLink to="/page2">Page 2</NuxtLink></li>
    </ul>
    <br>
		<slot />
	</div>
</template>