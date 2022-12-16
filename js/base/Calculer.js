class Cal{
    constructor(){
        this._lastOperation = "";
        this._lastNumber = "";
        this._operationSave = [];
        this._display = document.getElementById("display");
        this._hours = document.getElementById("hora");
        this._dates = document.getElementById("data");
        this._locale = "pt-BR";
        this.initalize();
        this.initConfigButton();
    }
    /* Config Date Display */
    initalize(){
        setInterval(()=>{
            this.hoursSet = this.timeGet.toLocaleTimeString(this._locale);
            this.datesSet = this.timeGet.toLocaleDateString(this._locale);
        },1000);
        this.inputLastDisplay();
    }
    /* CONFIG  SWITCH BUTTON */
    btnAC(){
        this._operationSave = [];
        this.clearDisplay();
    }
    btnCE(){
        this._operationSave.pop();
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
    defaults(){
        this.displaySet = "ERROR";
    }
    isOperation(value){
        return (['+','-','*','%',"/"].indexOf(value) > -1)
    }
    setPush(value){
        this._operationSave.push(value);
        if(this._operationSave.length > 3){
            this.calc();
        }
    }
    getResult(){
        return CalcResult = eval(this._operationSave.join(""));

    }
    calc(){
        let lastPop = "";
        this._lastOperation = this.getLastItem();
        if(this._operationSave.length >3){
            lastPop = this._operationSave.pop();
            this._lastNumber = this.getResult();
        }
        if (this._operationSave.length == 3){
            this._lastNumber = this.getLastItem(false);
            }
        let CalcResult = this.getResult();
        if(lastPop=="%"){
            CalcResult /= 100;
            this._operationSave = [CalcResult];

        }else{
            this._operationSave = [CalcResult];
            if(lastPop) this._operationSave.push(lastPop)
        }
            this.inputLastDisplay();

    }
    setLastOperation(value){
        this._operationSave[this._operationSave.length-1] = value;
    }
    operation(value){
        if(isNaN(this.getlast())){
            // String
            if(this.isOperation(value)){
                this.setLastOperation(value);
            }else if(isNaN(value)){
                console.log("It is Number",value)
            }else{
                this.setPush(value);
                this.inputLastDisplay()
            }
        }else{
            if(this.isOperation(value)){
                this.setPush(value);
            }else{
            // Number
            let newValue = this.getlast().toString() + value.toString();
            this.setLastOperation(parseInt(newValue));
            // Update Display
            this.inputLastDisplay();
            }
        }
        // DEBUG CONSOLE.LOG
        console.log("This is Number",value,isNaN(this.getlast()));
        console.log(this._operationSave);
    }
    getLastItem(isOperation = true){
        let lastitem;
        for(let lengths = this._operationSave.length-1; lengths >=0; lengths--){
            if(this.isOperation(this.operation[lengths]) == isOperation){
                lastitem = this._operationSave[lengths];
                break;
            }
        }
        return lastitem;
    }
    inputLastDisplay(){ 
        let lastNumber = this.getLastItem(false);       
        if(!lastNumber) lastNumber = 0;
        this.displaySet = lastNumber;
    }
    clearDisplay(){
        let lastNumber = 0;
        this.displaySet = lastNumber;
    }
    getlast(value){
        return this._operationSave[this._operationSave.length-1];
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
                this.operation('%');
                break;
            case "divisao":
                this.operation('/');
                break;
            case "multiplicacao":
                this.operation('*');
                break;
            case "subtracao":
                this.operation('-');
                break;
            case "soma":
                this.operation('+');
                break;
            case "igual":
                this.calc();
                break;
            case "ponto":
                this.operation('.');
                break;
            default:
                this.defaults();
                break
            /* CONFIG SWITCH NUMBERS */
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                this.operation(parseInt(value));
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
                this.initSwitch(TextBtn);
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