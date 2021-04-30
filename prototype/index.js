function Car(){
    this.driver = function(){
        console.log('drive')
    }
    this.stop = function(){
        console.log('stop')
    }
}

function avante(color){
    this.color = color;
    this.wheels = 4;
}

avante.prototype.showName = function(){
    console.log('아반떼')
}

avante.prototype.__proto__ = new Car;

let oh = new avante('blue')