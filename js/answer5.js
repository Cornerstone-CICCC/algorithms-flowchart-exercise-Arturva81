function gradeAndName(name, grade){
    if (grade >= 80) {
        return name + "got an A!";
    } else if (grade >= 60) {
        return name + "got a B";
    } else if (grade >= 40) {
        return name + "got a C";
    } else {
        return name + "got no grade";
    }
}

console.log(gradeAndName("Elmer ", 85));