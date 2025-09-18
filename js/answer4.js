function isTrianglePossible(a, b, c){ 
    if ((a + b > c) &&
        (b + c > a) && 
        (a + c > b))
        return "Triangle is possible!";
    else
        return "Triangle is not possible";
}

console.log(isTrianglePossible(5, 10, 10));


function checkTriangle(a, b, c){
    if (a + b > c){
        if (b + c > a){
            if (a + c > b){
                return "Triangle is possible!";
            }
            else return "Triangle is not possible";
        }
    }
}

console.log(checkTriangle(10, 7, 8));