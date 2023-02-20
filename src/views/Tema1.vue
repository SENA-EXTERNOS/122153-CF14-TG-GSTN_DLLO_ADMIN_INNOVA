<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estadística 

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-4

          figure.mb-3
            img(src='@/assets/curso/temas/tema1/img-1.svg')

      .col-md-6.col-lg-8

        .cajon.color-acento-botones.p-4.mb-5.fnd-2
          p En primer lugar, se aborda el concepto de la estadística, la cual consiste en recoger datos para clasificarlos y presentarlos adecuadamente, para esto se requiere de una organización y análisis de la información, de tal modo que sirvan para la posterior toma de decisiones.

        p.mb-5 Es utilizada científicamente pero también de manera rutinaria por las personas, que en muchas ocasiones la emplean desconociendo su interpretación, comúnmente es y ha sido aplicada a lo largo de la historia de la humanidad, en diferentes áreas del conocimiento y en diferentes conductas sociales; dada su naturaleza y su método es una ciencia exacta, porque permite experimentar las probabilidades con argumentos que desarrollan o crean métodos, los cuales permiten evaluar el comportamiento de las tendencias, asumiendo como objetivo el estudio de conjuntos numerosos de personas, animales, objetos de cualquier clase o cualquier tipo de información, entre otras, que puedan ser recopiladas y analizadas para la orientación al planteamiento de necesidades.


    .row.mt-5
      p Amplíe sus conocimientos sobre estadística, visualizando el vídeo “<b>Antecedentes de la estadística</b>”, el cual encuentra en el material complementario.

      p.mb-3 Cuando hablamos de estadística, existen dos términos que se deben comprender muy bien:

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8
        TabsA.color-acento-contenido.grs
          .tarjeta.color-acento-botones.fnd-3.p-4(titulo="Población")
            p En estadística, el término población, se refiere a la integración de datos que requieren ser organizados, analizados e interpretados. Expone Gamboa (2017), que la población no se refiere exclusivamente a seres humanos, sino que también puede corresponder a animales, muestras biológicas, expedientes, hospitales, objetos, familias, organizaciones, etc.; para estos últimos, podría ser más adecuado utilizar un término análogo, como universo de estudio. Entonces, en el objeto de estudio, el análisis de la información conlleva a estudiar datos identificados, estos datos los conocemos como población, un ejemplo de población puede ser la cantidad de personas o la cantidad de cosas, en un lugar específico con el fin de ser analizado.
          .tarjeta.color-acento-botones.fnd-3.p-4(titulo="Muestra")
            p La acción de realizar un muestreo de información, se refiere a la selección de una porción-parte-subconjunto de datos del universo o población que haya sido seleccionada, delimitada y ubicada cronológicamente, la cual es objeto de estudio en la investigación. El muestreo tiene por objetivo estudiar las relaciones existentes entre la distribución de una variable “y” en una población “z” y la distribución de esta variable en la muestra a estudio (Hernández Sampieri, Fernández-Collado, & Baptista-Lucio, 2006), a su vez también exponen que cuando se determina la muestra en una investigación, se toman dos decisiones fundamentales: la manera como van a seleccionarse los casos (participantes, eventos, episodios, organizaciones, productos, etc.) y el número de casos a incluir (tamaño de muestra). Estos dos elementos permiten claramente unificar esfuerzos mediante la centralización de información, logrando con estos tener datos que representen la integralidad de los resultados analizados y que conllevarán a las decisiones.  
      .col-lg-4.mt-5
        figure
            img(src='@/assets/curso/temas/tema1/img-2.svg')

    p.mb-5 Por otra parte, para definir una población y tomar el tamaño de la muestra correctamente, se deben tener en cuenta algunos detalles.
    p.mb-5 Analice atentamente cada uno de ellos:

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-4
        figure.mb-5
            img(src='@/assets/curso/temas/tema1/img-3.svg')    
      .col-lg-8
        TabsA.color-acento-contenido.grs
          .tarjeta.color-acento-botones.fnd-3.p-4(titulo="Definición de<br> la población")
            p Para definir una población, se deben tener en cuenta características que terminan siendo determinantes para el desarrollo de la investigación. El primer criterio a tener en cuenta, se refiere a la selección correcta de la población a estudiar, porque, de acuerdo con la selección clara de su población, podrá dar una delimitación objetiva, permitiendo la organización de los datos requeridos para el estudio; es importante, recordar que hay poblaciones con datos infinitos, pero también estas poblaciones se pueden delimitar, con el objetivo que sus datos sean finitos; otra característica determinante que le permitirá ubicar, de manera correcta, los datos a ser estudiados, es la ubicación cronológica; no es lo mismo estudiar una población determinada en diferentes momentos, porque entran a ponderar variables externas que influyen en los análisis estadísticos se deseen adelantar. 

          .tarjeta.color-acento-botones.fnd-3.p-4(titulo="Tamaño correcto <br>de la muestra")
            p Buscando cómo llegar de manera correcta al tamaño de muestra, la cual busca encontrar esa porción-parte-subconjunto de datos del universo o población que haya sido seleccionada, se deben buscar mecanismos para la reducción de costos en diferentes recursos, como los son económicos, mano de obra y materiales, entre otros, siendo el muestreo un mecanismo que selecciona y delimita la recolección de los datos, porque se puede realizar en menor tiempo y también permite el estudio poblaciones muy grandes.
            p Para hallar el tamaño de muestra estadísticamente, se desarrollan métodos, por lo cual es importante identificar el nivel de confianza, siendo este un grado de certeza o probabilidad expresado en porcentajes con el que se pretende realizar la estimación de un parámetro a través de un estadístico muestral “fórmula”.  

    .row.mt-5.justify-content-center  
      .col-lg-9
        .cajon.color-acento-botones.p-4.mb-5.fnd-2
          p Para ampliar la información sobre el tema, lo invitamos a ver los siguientes videos, los cuales se encuentran en el material complementario:

          ul.lista-ul--color
            li 
              i.fas.fa-check
              p.mb-0 ¿Qué son la población y la muestra? (Con ejemplos).

            li 
              i.fas.fa-check
              p.mb-0 Tamaño de muestra paso a paso.
                

































</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
