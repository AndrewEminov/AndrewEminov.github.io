function createData(name, group_1, group_2, group_3, group_4) {
    return { name, group_1, group_2, group_3, group_4 };
  }
  
  const outerwear = [
    createData('Frozen yoghurt', {cell: 159, id: Math.random()}, {cell: 3, id: Math.random()}, {cell: 55, id: Math.random()}, {cell: 111, id: Math.random()}),
    createData('Frozen yoghurt', {cell: 4, id: Math.random()}, {cell: 1, id: Math.random()}, {cell: 0, id: Math.random()}, {cell: 6, id: Math.random()}),
    createData('Frozen yoghurt', {cell: 4, id: Math.random()}, {cell: 6, id: Math.random()}, {cell: 7, id: Math.random()}, {cell: 33, id: Math.random()}),
    createData('Frozen yoghurt', {cell: 766, id: Math.random()}, {cell: 8, id: Math.random()}, {cell: 57, id: Math.random()}, {cell: 12, id: Math.random()}),
    createData('Frozen yoghurt', {cell: 6, id: Math.random()}, {cell: 55, id: Math.random()}, {cell: 21, id: Math.random()}, {cell: 4, id: Math.random()}),
  ];

  const lightClothesW = [
   
  ];

  const lightClothesM = [
    
  ];

  const complicatingElements_Outerwear = [
    createData('Frozen yoghurt', {cell: 159, id: Math.random()}, {cell: 3, id: Math.random()}, {cell: 55, id: Math.random()}, {cell: 111, id: Math.random()}),
    createData('Frozen yoghurt', {cell: 4, id: Math.random()}, {cell: 1, id: Math.random()}, {cell: 0, id: Math.random()}, {cell: 6, id: Math.random()}),
  ]

  const complicatingElements_W = [
    createData('Frozen yoghurt', {cell: 159, id: Math.random()}, {cell: 3, id: Math.random()}, {cell: 55, id: Math.random()}, {cell: 111, id: Math.random()}),
  ]

  const complicatingElements_M = [
    createData('Frozen yoghurt', {cell: 159, id: Math.random()}, {cell: 3, id: Math.random()}, {cell: 55, id: Math.random()}, {cell: 111, id: Math.random()}),
  ]


  const complicatingElements_List = [
    {
      id: 1,
      title: 'Рельефы, швы, складки, клинья, шлицы (разрезы)',
      description: [
        createData(
          {item: 1, rowSpan: 6}, 
          {text: 'Рельефы, или отрезные бочки, или швы в изделии', rowSpan: 6}, 
          [
            {cell: 1, id: Math.random(), text: 'Рельефы разрезные или неразрезные, прямые или переходящие в складки – не более двух '},
            {cell: 1, id: Math.random(), text: 'Каждые два прерывающихся рельефа на одной полочке или другой детали'},
            {cell: 2, id: Math.random(), text: 'Отрезные бочки в изделии'},
            {cell: 1, id: Math.random(), text: 'Швы в изделии, включая швы клиньев – не более двух'},
            {cell: 2, id: Math.random(), text: 'Фигурные разрезные не более двух'},
          ]
        ),
        createData(
          {item: 2, rowSpan: 2}, 
          {text: 'Вытачки по линии талии полочек и спинки', rowSpan: 2}, 
          [
            {cell: 1, id: Math.random(), text: 'Сверх минимальной сложности'},
          ]
        ),
        createData(
          {item: 3, rowSpan: 4}, 
          {text: 'Складки разных видов', rowSpan: 4}, 
          [
            {
              cell: 1, 
              id: Math.random(), 
              text: `
                Заутюженные шириной свыше 2 см: 
                - длиной свыше 30 см – не более
                трёх - длиной до 30 см – не
                более шести - одна складка в
                изделии поперечная или расположенная в
                косом
                направлении
              `
            },
            {cell: 1, id: Math.random(), text: 'Складки в боковых швах брюк'},
            {
              cell: 1.5, id: Math.random(), text: `
                Мягкие (застрочены по линии соединения с другой деталью): 
                не более шести, кроме юбки в складку
              `
            },
          ]
        ),
      ]
    },

    {
      id: 2,
      title: 'Подрезы, драпировки, сборки, кулиса. Детали отрезные в горизонтальном направлении',
      description: [
        createData(
          {item: 7, rowSpan: 3}, 
          {text: 'Подрезы', rowSpan: 3}, 
          [
            {cell: 1.5, id: Math.random(), text: 'Два подреза, симметрично расположенные, или один асимметрично расположенный подрез'},
            {cell: 2, id: Math.random(), text: 'Два подреза, симметрично расположенные, или один асимметрично расположенный подрез со сборками или мягкими складками'},
          ]
        ),
        createData(
          {item: 8, rowSpan: 2}, 
          {text: 'Драпировка несложная', rowSpan: 2}, 
          [
            {cell: 1, id: Math.random(), text: `
                                          Достигается конструктивным способом с
                                          помощью сборок, мягких складок: по
                                          плечевым швам, переводному плечу
                                          изделий, середине переда, отрезной линии
                                          талии, бёдер, кокетки или на других участках
                                          полочек и спинки, половинок брюк, юбки`},
          ]
        ),
        createData(
          {item: 9, rowSpan: 4}, 
          {text: 'Драпировка сложная глубокая полочек (переда) или спинки ', rowSpan: 4}, 
          [
            {
              cell: 4, 
              id: Math.random(), 
              text: `
                Достигается частично конструктивным путём,
                а в основном муляжным методом – на фигуре
                заказчика
              `
            },
            {cell: 1, id: Math.random(), text: 'Складки в боковых швах брюк'},
            {
              cell: 1.5, id: Math.random(), text: `
                Мягкие (застрочены по линии соединения с другой деталью): 
                не более шести, кроме юбки в складку
              `
            },
          ]
        ),
      ]
    }
  ];


  export {
    lightClothesM,
    lightClothesW,
    outerwear,
    complicatingElements_Outerwear,
    complicatingElements_W,
    complicatingElements_M,
    complicatingElements_List,
  };