class Aniaml{
    constructor(name,color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + "is running and color is "+ this.color)
    }
    shout(){
        console.log(this.name + "is shouting")
    }
}
class Monkey extends Aniaml{
    eat(){
        console.log(this.name + "is eating banana like a monkey")
    }
}

let ani = new Aniaml("basit ", "black")
let kashan =new  Monkey("kasho ", "dark black")

ani.run()
kashan.run()
kashan.eat()