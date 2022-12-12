class Calculers{
    constructor(){
        this._display = document.getElementById("display");
        this._hours = document.getElementById("hora");
        this._dates = document.getElementById("data");
        this.initConfigDate();
    }
   initConfigDate(){
    /* Config Display */    
    this._display.innerHTML = "10";
    /* Config Hours */
    this._hours.innerHTML = "19:29";
    /* Config Date */
    this_dates.innerHTML = "10/10/2023"
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
}