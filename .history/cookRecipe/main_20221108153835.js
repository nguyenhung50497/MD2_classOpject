let recipe = {


    'title': 'Sườn xào chua ngọt',


    'servings': 2,


    'ingredients': ['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)']


};

let {title, servings,ingredients} = recipe;

console.log('Tên món ăn: ' + title);


console.log('Khẩu phần ăn: : ' + servings);


console.log('Thành phần: ');


for (var i = 0; i < ingredients.length; i++) {


    console.log('- ' + ingredients[i]);


}

ingredients.forEach