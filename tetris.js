class LoopList {
    constructor(_array){
        this._array = _array;
        this._pointer = 0;
    }
    next(){
        if(this._pointer === this._array.length-1){
            return this._array[this._pointer = 0]
        }
        return this._array[++this._pointer];
    }
    
    prev(){
        if(this._pointer === 0){
            return this._array[this._pointer = this._array.length-1]
        }
        return this._array[--this._pointer];
    }

    get(){
        return this._array[this._pointer];
    }

    sufflePointer(){
        this._pointer = ~~(Math.random()*this._array.length);
    }
}

class Minos {
    constructor(){
        this.blockList;
        this.turnPoint = {
            yCor:0,xCor:0
        };
        this.color;
    }
    spin(isClockWise){
        if(isClockWise){
            return this.blockList.next();
        } else {
            return this.blockList.prev();
        }
    }
    drop(){

    }
    down(row){

    }
}

class Imino extends Minos{
    constructor(){
        super()
        this.color = '#8be9fd';
        let c = this.color, f = false;
        this.blockList = new LoopList([
            [
                [f,c,f,f],
                [f,c,f,f],
                [f,c,f,f],
                [f,c,f,f],
            ],
            [
                [f,f,f,f],
                [c,c,c,c],
                [f,f,f,f],
                [f,f,f,f],
            ],
            [
                [f,f,c,f],
                [f,f,c,f],
                [f,f,c,f],
                [f,f,c,f],
            ],
            [
                [f,f,f,f],
                [f,f,f,f],
                [c,c,c,c],
                [f,f,f,f],
            ],
        ]);
        this.turnPoint.yCor = 2;
        this.turnPoint.xCor = 2;
    }
}
class Jmino extends Minos{
    constructor(){
        super()
        this.color = '#6272a4';
        let c = this.color, f = false;
        this.blockList = new LoopList([
            [
                [c,f,f],
                [c,c,c],
                [f,f,f],
            ],
            [
                [f,c,c],
                [f,c,f],
                [f,c,f],
            ],
            [
                [f,f,f],
                [c,c,c],
                [f,f,c],
            ],
            [
                [f,c,f],
                [f,c,f],
                [c,c,f],
            ],
        ]);
        this.turnPoint.yCor = 1;
        this.turnPoint.xCor = 1;
    }
}
class Lmino extends Minos{
    constructor(){
        super()
        this.color = '#ffb86c';
        let c = this.color, f = false;
        this.blockList = new LoopList([
            [
                [f,c,f],
                [f,c,f],
                [f,c,c],
            ],
            [
                [f,f,f],
                [c,c,c],
                [c,f,f],
            ],
            [
                [c,c,f],
                [f,c,f],
                [f,c,f],
            ],
            [
                [f,f,c],
                [c,c,c],
                [f,f,f],
            ],
        ]);
        this.turnPoint.yCor = 1;
        this.turnPoint.xCor = 1;
    }
}
class Omino extends Minos{
    constructor(){
        super()
        this.color = '#f1fa8c';
        let c = this.color, f = false;
        this.blockList = new LoopList([
            [
                [c,c],
                [c,c],
            ],
        ]);
        this.turnPoint.yCor = 0;
        this.turnPoint.xCor = 0;
    }
}
class Smino extends Minos{
    constructor(){
        super()
        this.color = '#50fa7b';
        let c = this.color, f = false;
        this.blockList = new LoopList([
            [
                [c,f,f],
                [c,c,f],
                [f,c,f],
            ],
            [
                [f,c,c],
                [c,c,f],
                [f,f,f],
            ],
            [
                [f,c,f],
                [f,c,c],
                [f,f,c],
            ],
            [
                [f,f,f],
                [f,c,c],
                [c,c,f],
            ],
        ]);
        this.turnPoint.yCor = 1;
        this.turnPoint.xCor = 1;
    }
}
class Tmino extends Minos{
    constructor(){
        super()
        this.color = '#bd93f9';
        let c = this.color, f = false;
        this.blockList = new LoopList([
            [
                [f,f,f],
                [c,c,c],
                [f,c,f],
            ],
            [
                [f,c,f],
                [c,c,f],
                [f,c,f],
            ],
            [
                [f,c,f],
                [c,c,c],
                [f,f,f],
            ],
            [
                [f,c,f],
                [f,c,c],
                [f,c,f],
            ],
        ]);
        this.turnPoint.yCor = 1;
        this.turnPoint.xCor = 1;
    }
}
class Zmino extends Minos{
    constructor(){
        super()
        this.color = '#ff5555';
        let c = this.color, f = false;
        this.blockList = new LoopList([
            [
                [f,f,c],
                [f,c,c],
                [f,c,f],
            ],
            [
                [f,f,f],
                [c,c,f],
                [f,c,c],
            ],
            [
                [f,c,f],
                [c,c,f],
                [c,f,f],
            ],
            [
                [c,c,f],
                [f,c,c],
                [f,f,f],
            ],
        ]);
        this.turnPoint.yCor = 1;
        this.turnPoint.xCor = 1;
    }
}

const tetriminos = [
    new Imino(),
    new Jmino(),
    new Lmino(),
    new Omino(),
    new Smino(),
    new Tmino(),
    new Zmino(),
]

class Random7Buffer {
    constructor(){
        this.buffer = [];
        this.idx = [0,1,2,3,4,5,6];
        this.usedIdx = [];
    }
    fillBuffer(){
        for(let i=0; i<7; i++){
            let pickedIdx = 
                this.idx.splice(
                    ~~(Math.random()*this.idx.length),1
                )[0];
            this.buffer.push(tetriminos[pickedIdx])
            this.usedIdx.push(pickedIdx);
        }
        this.idx = [...this.usedIdx];
        this.usedIdx = [];
    }
    unfillBuffer(){
        this.buffer = [];
    }
}

/** @type {CanvasRenderingContext2D} */
const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');
