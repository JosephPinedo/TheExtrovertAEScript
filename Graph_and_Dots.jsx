{ 
    function GraphDots(thisObj){
        alert("starting");
//~         var CompositionToSearch = findComp(prompt("Please enter the Composition that contains \n the layer to duplicate. This project uses \"Line Test.\""),app.project);
//~         var layerToCopy = findLayer(prompt("Please enter the Layer to duplicate. \"This project uses Dot.\""),CompositionToSearch);
//~         var duplicatedLayer = layerToCopy.duplicate();
//~         duplicatedLayer.property("position").setValue([3000,1080,0]);
        var dotPositionArray = new Array(1000);
        var num = Math.floor((Math.random() * 1000) + 1);
        var n = num.toString();
        return;
            
    function createArray(length){
          var arr = new Array(length || 0),
              i = length;

          if (arguments.length > 1) 
          {
            var args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[i] = createArray.apply(this, args);
          }        
          return arr;
    }

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

    function findComp(name,project){
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
    
    GraphDots(this);
 }