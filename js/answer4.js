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
