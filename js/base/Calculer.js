class Calculers{
    constructor(){
        this._display = document.getElementById("display");
        this._hours = document.getElementById("hora");
        this._dates = document.getElementById("data");
        this._locale = "pt-BR";
        this.initValueConfigDate();
    }
   initValueConfigDate(){
        setInterval(()=>{
            this.hoursSet = this.timeGet.toLocaleTimeString(this._locale);
            this.datesSet = this.timeGet.toLocaleDateString(this._locale);
        },1000);
    
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
}