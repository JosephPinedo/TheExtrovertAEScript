{
     function findLayer(name,currentComp){
        for(var index = 1; currentComp.layers.length >= index; index++){
                if( currentComp.layers[index].name.localeCompare(name) == 0 ){
                         alert(name + " Layer Found.");
                         return currentComp.layers[index];
                 }
         }
        alert(name + " Layer NOT Found.");
        return null;
        }

    function findComp(name,project)
    {
        for(var index = 1; project.items.length >= index; index++){
                if( project.items[index].name.localeCompare(name) == 0 ){
                         alert(name + " Comp Found.");
                         return project.items[index];
                 }
         }
        alert(name + " Comp NOT Found.");
        return null;
      }
    
}