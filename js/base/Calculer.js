class Cal{
    constructor(){
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
    /* CONFIG BUTTON */
    initConfigBtn(element,events,functions){
        events.split(" ").forEach(event=>{
            element.addEventListener(event,functions, false);
        });
    }
    initConfigButton(){
        let button = document.querySelectorAll("#buttons > g, #parts > g")
        button.forEach((values, index)=>{
            this.initConfigBtn(values,"click drag",value=>{
                console.log(values.className.baseVal.replace("btn-",""));
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