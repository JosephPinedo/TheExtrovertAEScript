{ 
    function GraphDots(thisObj){
        alert("starting");
        var CompositionToSearch = findComp(prompt("Please enter the Composition that contains \n the layer to duplicate. This project uses \"Line Test.\""),app.project);
        var layerToCopy = findLayer(prompt("Please enter the Layer to duplicate. \"This project uses Dot.\""),CompositionToSearch);
        var duplicatedLayer = layerToCopy.duplicate();
        duplicatedLayer.property("position").setValue([3000,1080,0]);
//~         var dotPositionArray = createArray(1000,1000);
        return;
        
        function changePositionOfLayer(xPosition,YPosition,ZPosition,Copiedcomp){
            var leftCompIndex = findLayerIndex("Left_Side_OfDot",Copiedcomp);
            var rightCompIndex = findLayerIndex("Right_Side_OfDot",Copiedcomp);
            Copiedcomp.layers[leftCompIndex].position[0] = xPosition;
            Copiedcomp.layers[leftCompIndex].position[1] = YPosition;
            Copiedcomp.layers[leftCompIndex].position[2] = ZPosition;
            Copiedcomp.layers[rightCompIndex].position[0] = xPosition;
            Copiedcomp.layers[rightCompIndex].position[1] = YPosition;
            Copiedcomp.layers[rightCompIndex].position[2] = ZPosition;
            return Copiedcomp;
            }
        
        
    function createArray(xLength,yLength){
        var array = new Array(xLength);
        
        for(var index = 0; index < array.Length; index++)
        {
            array[index] = new Array(yLength);
        }
        return array;
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