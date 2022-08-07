class Controls{
    constructor(){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;
        this.turbo=false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "a":
                    this.left=true;
                    break;
                case "d":
                    this.right=true;
                    break;
                case "w":
                    this.forward=true;
                    break;
                case "s":
                    this.reverse=true;
                    break;
                case "r":
                    this.turbo=true;
                    break;
            }
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "a":
                    this.left=false;
                    break;
                case "d":
                    this.right=false;
                    break;
                case "w":
                    this.forward=false;
                    break;
                case "s":
                    this.reverse=false;
                    break;
                case "r":
                    this.turbo=false;
                    break;
            }
        }
    }
}
    