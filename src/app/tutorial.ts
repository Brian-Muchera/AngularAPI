export class Tutorial {
    showDescription: boolean;

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public submittedBy: string,
        public Date:Date){
            this.showDescription = false;

            
        }
    
 
}

