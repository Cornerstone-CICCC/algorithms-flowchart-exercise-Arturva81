function isTrianglePossible(a, b, c){ 
    if (a + b > c && b + c > a && a + c > b)
        return "Triangle is possible!";
    else
        return "Triangle is not possible";
}

console.log(isTrianglePossible(3, 4, 5));