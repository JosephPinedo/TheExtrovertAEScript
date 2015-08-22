function FileIO(project,currentComp,layer) 
 {
        this.layer = layer;
     
        this.currentComp =  currentComp;
          
        this.project = project;
        
        this.findLayer = function ()
        {
            for(var index = 1; this.currentComp.layers.length >= index; index++){
                    if( this.currentComp.layers[index].name.localeCompare(this.layer) == 0 ){
                             this.layer =  this.currentComp.layers[index];
                             return("We won!");
                     }
             }
            return null;
        },
    
        this.findComp = function ()
        {
            for(var index = 1; this.project.items.length >= index; index++){
                    if( this.project.items[index].name.localeCompare(this.currentComp) == 0 ){
                             this.currentComp =  this.project.items[index];
                             return("We won!");
                     }
             }
            return null;
        }  
 }