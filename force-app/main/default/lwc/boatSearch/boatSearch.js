import { LightningElement } from 'lwc';

export default class BoatSearch extends LightningElement {
    isLoading = false;
  
    // Handles loading event
    handleLoading() {
        this.isLoading = true;
     }
    
    // Handles done loading event
    handleDoneLoading() { 
        this.isLoading = false;
    }
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) { 
        console.log ('searchBoats:', event.detail.boatTypeId);
    }
    
    createNewBoat(event) { 
        console.log ('createNewBoat');
    }
}