function main() {
    // simplest form of object, this form is known as object literals
    let obj = {};
    let obj1 = { name: "Sayli" };
    let obj2 = { name: "Sayli", age: 22};
    let obj3 = { name: "Sayli", age: 22,city:"Jalgaon" };
  
  
    // console.log(obj);
    // console.log(obj1);
    // console.log(obj2);
    // console.log(obj3);

    // console.log(obj);
    // console.log(obj3.name);
    // console.log(obj3.age);
    // console.log(obj3.city);

    // console.log(obj3["name"]);
    // console.log(obj3["age"]);
    // console.log(obj3["city"]);

    // obj.name="Sayli Rane";
    // obj.age="22";
    // console.log(obj3.name);
    // console.log(obj3.age);

    // obj1.state="Maharastra";
    // obj2["id"]="31";
    // console.log(obj1);
    // console.log(obj2);
    // console.log(obj3);

    delete obj1.id;
    console.log(obj1);
    console.log(obj2);
    console.log(obj3);

}
main()


