<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5 
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img-intro.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Apreciado aprendiz, bienvenido a este componente formativo, donde reconocerá conceptos como población, muestra, parámetros estadísticos, fuentes de obtención de información, así como también las herramientas que facilitan la tabulación, la graficación y el análisis de datos e indicadores; todo esto potenciará la comprensión de los resultados a nivel organizacional. Se conceptualiza sobre el indicador, las características que lo componen, los tipos existentes y una serie de recomendaciones, para la creación y definición de estos, concluyendo con la interiorización de conceptos y mecanismos para realizar un correcto análisis de indicadores, la mejora continua y los informes de gestión, que se desprenden del desarrollo organizacional.

    
    p.mb-5.mt-3 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ndzj15PQEVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
