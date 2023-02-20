<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tabulación y análisis de datos

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-4

          figure
            img(src='@/assets/curso/temas/tema3/img-1.svg')

      .col-md-6.col-lg-8
        p.mb-5 Una vez verificada la información recolectada, es necesario ubicarla de acuerdo a las variables cuantitativas discretas o continuas, o las variables cualitativas nominales u ordinales, a su vez teniendo en cuenta el tipo de investigación determinado, como también los parámetros estadísticos definidos para comprender la información de los datos recolectados; es necesario organizarlos y presentarlos en tablas y gráficos, por ello es importante seleccionar un conjunto de características, es decir, las variables que determinan el instrumento, las cuales deben ser objetivas, integrales y que soporten al análisis de información requerido.


    Separador   

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Variables y frecuencias
    p.mb-3 Como lo describimos anteriormente, las variables están determinadas como:

    ul.lista-ul--color.nar
      li 
        i.fas.fa-check
        p.mb-0
          b Variables cuantitativas:
          |  son las que integran argumentos numéricos, pueden ser discretas o continuas.
      li 
        i.fas.fa-check
        p.mb-0
          b Variables cualitativas:
          | integran características o cualidades, y se subdividen en nominales y ordinales.

    p.mb-5 Conozcamos más sobre cada una de ellas:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img-2-.svg')

          .tarjeta.color-secundario.fnd-4-.p-3(x="5.4%" y="48.2%" numero="+")
            p.px-4 Se pueden expresar mediante un número y, además, se pueden realizar operaciones con ellas, como sumar o restar.
          .tarjeta.color-secundario.fnd-4-.p-3(x="32.2%" y="70.4%" numero="+")
            p.px-4 Es la que toma un número finito de valores, o sea, los valores que puede tomar esta variable se pueden contar. Por ejemplo, tenemos la edad, si le preguntamos a alguien, cuál es su edad, me va a decir 15, 16, 25, se puede contar el número de respuestas diferentes. 
          .tarjeta.color-secundario.fnd-4-.p-3(x="32.2%" y="95.6%" numero="+")
            p.px-4 Es la que toma un número infinito de valores o posibles respuestas, o sea, hay muchos valores diferentes que puede tomar esta variable. Por ejemplo, el peso de un balón, no siempre ese peso va a ser igual, Hay muchas cantidades de respuestas dependiendo de la exactitud.
          .tarjeta.color-secundario.fnd-4-.p-3(x="94.6%" y="48.2%" numero="+")
            p.px-4 Se refieren a características o cualidades que no pueden ser medidas con números. Cuando se realice una estadística, y las respuestas no sean con números, esas variables van a ser cualitativas.
          .tarjeta.color-secundario.fnd-4-.p-3(x="67.6%" y="70.4%" numero="+")
            p.px-4 No admiten un orden. Hay cualidades que no necesariamente se pueden ordenar, por ejemplo, el color preferido, alguien puede responder, azul, rojo, verde y no se pueden o no admiten un orden, no podemos decir que un color va primero que otro.
          .tarjeta.color-secundario.fnd-4-.p-3(x="67.6%" y="95.6%" numero="+")
            p.px-4 Son las que sí se pueden ordenar. Por ejemplo, las notas de un examen (excelente, sobresaliente, deficiente), se pueden ordenar de las mejores a las peores, o de las más altas a las más bajas.

    p.mb-5 Por otra parte, la medición de los datos obtenidos, la organización y tabulación, son primordiales para la interpretación estadística, para ello la repetición de los datos se miden por frecuencias, las cuales de manera general se deben organizar de acuerdo con la cantidad de datos.
    p.mb-5 A continuación, se exponen las características para la tabulación de los datos bajo el esquema de frecuencias:           

    .row.mb-5.justify-content-center
      .col-md-6.col-lg-4.mb-5.mb-lg-0.row2
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-3.svg' alt='AvatarTop')
          .ini.fnd-6.color-primario.b-r-i
            .p-4.mt-3
              h2.text-center Datos
              p.text-center Información recopilada la cual debe ser organizada en una variable.
      .col-md-6.col-lg-4.mb-5.mb-lg-0.row2
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-3.svg' alt='AvatarTop')
          .ini.fnd-6-.color-primario
            .p-4.mt-3
              h2.text-center Frecuencia absoluta
              p.text-center Cantidad de veces que se repite el dato. 
      .col-md-6.col-lg-4.mb-5.mb-lg-0.row2
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-3.svg' alt='AvatarTop')
          .ini.fnd-6.color-primario.b-r-d  
            .p-4.mt-3
              h2.text-center Frecuencia relativa
              p.text-center Se obtiene de la división del número de la frecuencia absoluta de una variable y la cantidad total de los datos. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .row
          .col-md-6.col-lg-6.mb-5.mb-lg-0.row2
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/img-3.svg' alt='AvatarTop')
              .ini.fnd-6-.color-primario.b-r-i
                .p-4.mt-3
                  h2.text-center Frecuencia absoluta acumulada
                  p.text-center Se refiere a la acumulación de las variables de la frecuencia absoluta. 
          .col-md-6.col-lg-6.mb-5.mb-lg-0.row2
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/img-3.svg' alt='AvatarTop')
              .ini.fnd-6.color-primario.b-r-d
                .p-4.mt-3
                  h2.text-center Porcentaje
                  p.text-center Se obtiene al multiplicar la frecuencia relativa de cada variable por 100 y como observación particular el resultado total debe dar 100 %.
    br

    p.mb-5 Para ilustrar mejor el correcto diligenciamiento de una tabla de frecuencia, se expone el siguiente ejemplo: 
    p.mb-5 Se realiza una encuesta, con el objetivo de realizar un primer diagnóstico para la creación de un nuevo centro comercial. Se consulta un total de 25 personas, las cuales viven en un rango de distancia entre 8 a 10 kilómetros del centro comercial más cercano, preguntado por la cantidad de veces que han ido al centro comercial más cercano, durante los últimos 30 días, obteniendo los resultados expuestos en la Tabla 1:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1
          p <em> Cantidad de veces que cada persona fue al centro comercial </em>


        figure
            img(src='@/assets/curso/temas/tema3/img-4.svg')

    .titulo-sexto.color-acento-contenido.mb-5(data-aos='fade-right')
          h5 Tabla 2
          p <em>Tabla de frecuencia simple </em>

    .tabla-a.mb-5 
      table.mb-5
        thead.fnd-3.b-tb
          tr.text-center
            th.text-center
              | Valores de la Frecuencia 
              br
              | Xi
              br
              | "Registre la cantidad de veces que las personas fueron al centro comercial"
            th.text-center
              | Frecuencia Absoluta 
              br
              | fi
              br
              | "Registre la cantidad de veces se repite el dato"
            th.text-center
              | Frecuencia Relativa 
              br
              | fr
              br
              | "Divida la cantidad total del dato, en la totalidad de los mismos" fr=fi1/n
            th.text-center
              | %
              br
              | "Resultado de multiplicar la frecuencia relativa por 100"
              br
            th.text-center
              | Frecuencia absoluta
              br
              |  acumulada 
              br
              | F
              br
              | "Sume acumuladamente la frecuencia absoluta de la cantidad de datos obtenidos con el n&uacute;mero anterior"
        tbody.b-tb
          tr.text-center
            td 0
            td 6
            td 6/25 = 0,24
            td 24
            td 6
          tr.text-center
            td 1
            td 7
            td 7/25 = 0,28 
            td 28
            td   6 + 7 = 13
          tr.text-center
            td 2
            td 2
            td 2/25 = 0,08
            td 8
            td 13 + 2 = 15
          tr.text-center
            td 3
            td 4
            td 4/25 = 0,16
            td 16
            td 15 + 4 = 19
          tr.text-center
            td 4
            td 1
            td 1/25 = 0,04
            td 4
            td 19 + 1 = 20
          tr.text-center
            td 5
            td 5
            td 5/25 = 0,20
            td 20
            td 20 + 5 = 25
          tr.text-center
            td
            td 
              b 25 = n
            td 
              b 1,00
            td 
              b 100
            td

    .row.justify-content-center.mb-5
      .col-md-8.col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.fnd-7
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4
                p.text-black Tenga en cuenta las siguientes características para validar si está bien creada la tabla:

            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4.mb-sm-3
                ul.lista-ul--color.nar
                  li 
                    i.fas.fa-check
                    | 
                    p En la columna de frecuencia absoluta <em> Fi</em>, debe obtener la cantidad total de los encuestados.
                  li 
                    i.fas.fa-check
                    | 
                    p En la columna de frecuencia relativa <em>fr</em>, la suma al final debe estar al 0,99 o al número 1 cerrado, este resultado, le da el parámetro que están bien registrados los datos.
                  li 
                    i.fas.fa-check
                    | 
                    p El resultado de la columna de porcentaje, al final de la sumatoria, ponderará un total de 100.
                  li 
                    i.fas.fa-check
                    | 
                    p Al final de la frecuencia acumulada, se debe obtener el mismo resultado de la sumatoria de la frecuencia absoluta, la cual para este ejercicio, es la cantidad de encuestados.
 
    Separador   

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Gráficos estadísticos y análisis de datos
    p.mb-5 Llegamos así a la representación gráfica de la información, la cual juega un papel trascendental en el análisis e interpretación de los datos, por ende, la representación de los datos mediante imágenes coadyuva al lector para la compresión de los resultados.
    p.mb-5 En ese orden de ideas, se presentan varios tipos de gráficas de acuerdo con su uso:

    .row.justify-content-center.mb-5
      SlyderA.fnd-4.fl-a.p-5(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.p-y-5
            h3 Histograma
            p Es una agrupación de datos que sirve para presentar datos cualitativos y cuantitativos. Ayudan a ver el centro, la extensión y la forma de un conjunto de datos.
          .col-md-6
            figure
              img.img-303(src='@/assets/curso/temas/tema3/img-5.svg')
        .row
          .col-md-6.mb-4.mb-md-0.p-y-5
            h3 Polígono de frecuencias
            p Es un gráfico que se crea a partir de un histograma de frecuencia. Estos histogramas emplean columnas verticales para reflejar frecuencias, el polígono de frecuencias es realizado uniendo los puntos de mayor altura de estas columnas.
          .col-md-6
            figure
              img.img-303(src='@/assets/curso/temas/tema3/img-6.svg')
        .row
          .col-md-6.mb-4.mb-md-0.p-y-5
            h3 Diagrama de barras
            p Es una representación en dos dimensiones de la frecuencia, sea <b>absoluta</b> o <b>relativa</b>, de una variable cuantitativa o cualitativa, pero siempre discreta y distribuida en filas.
          .col-md-6
            figure
              img.img-303(src='@/assets/curso/temas/tema3/img-7.svg')
        .row
          .col-md-6.mb-4.mb-md-0.p-y-5
            h3 Diagrama circular
            p Se utiliza para representar la proporción de elementos de cada uno de los valores de la variable.
          .col-md-6
            figure
              img.img-303(src='@/assets/curso/temas/tema3/img-8.svg')
        .row
          .col-md-6.mb-4.mb-md-0.p-y-5
            h3 Tallo y hoja
            p Es un semigráfico que permite presentar la distribución de una variable cuantitativa. Consiste en separar cada dato en el último dígito (que se denomina<b> hoja</b>) y las cifras delanteras restantes (que forman el <b>tallo</b>).
          .col-md-6
            figure
              img.img-303(src='@/assets/curso/temas/tema3/img-9.svg')
        .row
          .col-md-6.mb-4.mb-md-0.p-y-5
            h3 Diagrama de cajas y bigotes
            p Es una manera conveniente de mostrar visualmente grupos de datos numéricos a través de sus cuartiles.
          .col-md-6
            figure
              img.img-303(src='@/assets/curso/temas/tema3/img-10.svg')
        .row
          .col-md-6.mb-4.mb-md-0.p-y-5
            h3 Diagrama de dispersión
            p Usan una colección de puntos colocados usando coordenadas cartesianas para mostrar valores de dos variables.
          .col-md-6
            figure
              img.img-303(src='@/assets/curso/temas/tema3/img-11.svg')
        .row
          .col-md-6.mb-4.mb-md-0.p-y-5
            h3 Pictograma
            p Son tipos de tablas y gráficos que utilizan íconos e imágenes para representar datos.
          .col-md-6
            figure
              img.img-303(src='@/assets/curso/temas/tema3/img-12.svg')

    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Análisis de datos 

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-4

          figure
            img(src='@/assets/curso/temas/tema3/img-13.svg')

      .col-md-6.col-lg-8
        p.mb-5 Tenga en cuenta que para evaluar el resultado de cualquier desempeño, en este caso específico, la medición de indicadores o el comparativo de variables de representaciones gráficas o de las tablas de datos, las cuales se han obtenido producto de una información gestionada, se puede dar aplicando los mecanismos y técnicas que conlleven a la interpretación objetiva e integral de los resultados, debiéndose incluir en el análisis, la interpretación de las variables, sus proyecciones o tendencias, las propuestas, las necesidades, la pertinencia, entre muchas otras, emitiendo un concepto completo de la información. 


    p.mb-5 Los siguientes elementos le permitirán potenciar el análisis de la información:

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8
        TabsA.color-acento-contenido.grs
          .tarjeta.color-acento-botones.fnd-3.p-4(titulo="Comunicación <br>correcta de los<br> resultados")
            p En los análisis de resultados, el determinante es saber mostrar la información, para lo cual es importante la objetividad, la claridad, la transparencia y la organización de la información.
          .tarjeta.color-acento-botones.fnd-3.p-4(titulo="Calidad de la<br> información")
            p Para un correcto análisis de información es importante tener en cuenta las variables, la ponderación de estas refleja la calidad de la información, y así, partiendo de una planificación correcta en la elaboración del instrumento, se puede obtener información concreta, clara y medible, por lo cual es necesario resaltar las características determinantes desde enfoques cualitativos y cuantitativos del dato obtenido. 
          .tarjeta.color-acento-botones.fnd-3.p-4(titulo="Aplicación de <br>técnicas")
            p Desarrolle técnicas que le permitan tener un panorama completo de la información que se esté analizando, integrando las variables obtenidas en la medición y contrastando detalladamente los datos, reflejando con el argumento escrito.             
      .col-lg-4
        figure
            img(src='@/assets/curso/temas/tema3/img-14.svg')    







</template>

<script>
export default {
  name: 'Tema3',
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
