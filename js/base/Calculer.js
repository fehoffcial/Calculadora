class Cal{
    constructor(){
        this._saveoperation = [];
        this._display = document.getElementById("display");
        this._hours = document.getElementById("hora");
        this._dates = document.getElementById("data");
        this._locale = "pt-BR";
        this.initConfigDate();
        this.initConfigButton();
    }
    /* Config Date Display */
   initConfigDate(){
        setInterval(()=>{
            this.hoursSet = this.timeGet.toLocaleTimeString(this._locale);
            this.datesSet = this.timeGet.toLocaleDateString(this._locale);
        },1000);
    }
    /* CONFIG  SWITCH BUTTON */
    btnAC(){

    }
    btnCE(){

    }
    btnPCT(){

    }
    btnDVS(){

    }
    btnMTL(){

    }
    btnSTC(){

    }
    btnSM(){

    }
    btnIGL(){

    }
    btnPTN(){

    }
    defaultErro(){

    }
    /* CONFIG NUMBER SWITCH */
    btn0(){

    }
    btn1(){

    }
    btn2(){

    }
    btn3(){

    }
    btn4(){

    }
    btn5(){

    }
    btn6(){

    }
    btn7(){

    }
    btn8(){

    }
    btn9(){

    }
    initSwitch(value){
        switch(value){
            /* SWITCH ON CONFIG BUTTON */
            case "ac":
                this.btnAC();
                break;
            case "ce":
                 this.btnCE();
                 break;
            case "porcento":
                this.btnPCT();
                break;
            case "divisao":
                this.btnDVS();
                break;
            case "multiplicacao":
                this.btnMTL();
                break;
            case "subtracao":
                this.btnSTC();
                break;
            case "soma":
                this.btnSM();
                break;
            case "igual":
                this.btnIGL();
                break;
            case "ponto":
                this.btnPTN();
                break;
            default:
                this.defaultErro = "ERROR";
                break
            /* CONFIG SWITCH NUMBERS */
            case "0":
                this.btn0();
                break;
            case "1":
                this.btn1();
                break;
            case "2":
                this.btn2();
                break;
            case "3":
                this.btn3();
                break;
            case "4":
                this.btn4();
                break;
            case "5":
                this.btn5();
                break;
            case "6":
                this.btn6();
                break;
            case "7":
                this.btn7();
                break;
            case "8":
                this.btn8();
                break;
            case "9":
                this.btn9();
                break;
        }
    }
    initConfigBtn(element,events,functions){
        events.split(" ").forEach(event=>{
            element.addEventListener(event,functions, false);
        });
    }
    initConfigButton(){
        let button = document.querySelectorAll("#buttons > g, #parts > g")
        button.forEach((values, index)=>{
            this.initConfigBtn(values,"click drag",value=>{
                let TextBtn = values.className.baseVal.replace("btn-","");
                this.initSwitch(TextBtn)
                console.log(TextBtn)
            });
            this.initConfigBtn(values,"mouseover mouseup mousedown", value =>{
                values.style.cursor = "pointer";
            })
        });
    }

    /* Display Get Date */
    get displayGet(){
        return this._display.innerHTML;
    }
    get hoursGet(){
        return this._hours.innerHTML;
    }
    get datesGet(){
        return this._dates.innerHTML;
    } 
    get timeGet(){
        return new Date();
    }
    /* Display SET Date */
    set displaySet(value){
        this._display.innerHTML = value;
    }
    set hoursSet(value){
        this._hours.innerHTML = value;
    }
    set datesSet(value){
        this._dates.innerHTML = value;
    }
    set timeSet(value){
        this._dateGet = value
    }
    /* -------- END ------- */



















}