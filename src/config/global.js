export default {
  global: {
    componenteFormativo:
      'Etapas del procesamiento de datos y métodos estadísticos',
    descripcionCurso:
      'La comprensión de las estadísticas y las herramientas para la interpretación como la muestra, población, la tabulación y representación de los datos, el diligenciamiento de informes, la creación y el análisis correcto de los indicadores, coadyuvará a la mejora continua del proceso, permitiendo identificar de forma prospectiva el cumplimiento y la propuesta de objetivos organizacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg/'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estadística',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Parámetros estadísticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tabulación y análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Variables y frecuencias',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Gráficos estadísticos y análisis de datos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Mejora continua, evaluación e informes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estadística',
      referencia:
        'Sede Manizales UNAL. (2017).  Video Introductorio: Antecedentes de la Estadística (video). YouTube.  https://www.youtube.com/watch?v=-NutZ7n-Exg',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=-NutZ7n-Exg',
    },
    {
      tema: 'Estadística',
      referencia:
        'Lifeder Educación. (2020). ¿Qué son la población y la muestra? (Con ejemplos) (video). YouTube. https://youtu.be/Q4RZqKLZ8zU  ',
      tipo: 'Video ',
      link: 'https://youtu.be/Q4RZqKLZ8zU  ',
    },
    {
      tema: 'Estadística ',
      referencia:
        'fbombab. (2018). Tamaño de muestra paso a paso (video). YouTube. https://youtu.be/oc8i9g144Y0',
      tipo: 'Video',
      link: 'https://youtu.be/oc8i9g144Y0',
    },
    {
      tema: 'Parámetros estadísticos ',
      referencia:
        'Math2me Kids. (2021). Medidas de dispersión – datos no agrupados (video). YouTube. https://youtu.be/pLPKjLfjRYE',
      tipo: 'Video',
      link: 'https://youtu.be/pLPKjLfjRYE ',
    },
    {
      tema: 'Parámetros estadísticos',
      referencia:
        'Carreón, D. (2017). Media, moda y mediana Super fácil - Medidas de tendencia central. (video). YouTube. https://youtu.be/0DA7Wtz1ddg ',
      tipo: 'Video ',
      link: 'https://youtu.be/0DA7Wtz1ddg',
    },
    {
      tema: 'Parámetros estadísticos',
      referencia:
        'Bioestadistica Odontología UV. (2014).  ¿Qué son los Cuantiles? (video). YouTube. https://youtu.be/x9fznavEozk ',
      tipo: 'Video ',
      link: 'https://youtu.be/x9fznavEozk',
    },

    {
      tema: 'Mejora continua, evaluación e informes',
      referencia:
        'Nueva ISO 9001:2015. (2020). 10 técnicas de análisis de causa raíz de los desperdicios de la calidad para eliminarlos. https://www.nueva-iso-9001-2015.com/2020/05/10-tecnicas-de-analisis-de-causa-raiz-de-los-desperdicios-de-la-calidad-para-eliminarlos/ ',
      tipo: 'Artículo',
      link:
        'https://www.nueva-iso-9001-2015.com/2020/05/10-tecnicas-de-analisis-de-causa-raiz-de-los-desperdicios-de-la-calidad-para-eliminarlos/ ',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de causa',
      significado:
        'técnica para identificación de la raíz de los problemas, los cuales pueden darse en las no conformidades detectadas.',
    },
    {
      termino: 'CAC',
      significado:
        'calidad de la información, Aplicación de Técnicas y Comunicación correcta de resultados.',
    },
    {
      termino: 'Ciclo PHVA',
      significado:
        'definición a la estructura de tareas del PLANEAR, HACER, VERIFICAR, ACTUAR.',
    },
    {
      termino: 'Gráfica',
      significado: 'representación de los datos bajo un esquema.',
    },
    {
      termino: 'Instrumento',
      significado:
        'elemento que sirve de herramienta para el levantamiento de información.',
    },
    {
      termino: 'Método',
      significado:
        'secuencia de procesos, procedimientos o actividades, ordenada para el desarrollo de un ejercicio ejecutando un protocolo establecido.',
    },
    {
      termino: 'No conformidad',
      significado:
        'falla, error, incumplimiento en alguna de las actividades que se gestiona en un proceso que alimenta un sistema.',
    },
    {
      termino: 'Parámetros de centralización',
      significado:
        'indican en torno a qué valor o criterio central se distribuyen en los datos obtenidos, para lo cual se establecen la media aritmética, mediana y moda.',
    },
    {
      termino: 'Parámetros de dispersión',
      significado:
        'es la representación de los datos que se alejan de la parte central de los valores de distribución generales.',
    },
    {
      termino: 'Parámetros de posición',
      significado:
        'son los datos que se organizan en criterios conocidos como cuantiles, los cuales son variables de intervalos en los que se dividen los datos.',
    },
    {
      termino: 'Proceso',
      significado:
        'secuencia de actividades que requieren ser desarrolladas bajo mecanismos controlados.',
    },
    {
      termino: 'Técnica',
      significado:
        'características para el desarrollo de una actividad especifica que parte de la pericia y la secuencia para adelantar actividades.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gamboa, M. E. (2017). Estadística aplicada a la investigación educativa. <em>Dilemas Contemporáneos: Educación, Política y Valores, </em>(2).',
      link:
        'https://dilemascontemporaneoseducacionpoliticayvalores.com/index.php/dilemas/article/view/427/443',
    },
    {
      referencia:
        'Hernández, R., Fernández, C., & Baptista, P. (2014). <em>Metodología de la investigación.</em> McGraw Hill.',
      link:
        'https://www.uca.ac.cr/wp-content/uploads/2017/10/Investigacion.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
