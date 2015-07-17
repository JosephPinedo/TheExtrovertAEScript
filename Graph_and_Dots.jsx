{ 
    function GraphDots(thisObj){
        alert("starting");
        var DotComp = findComp("Dot",app.project);
        if(DotComp == null) {return;}
        var LineTestComp = findComp("Line Test",app.project);
        if(LineTestComp == null) {return;}
        var copyComp = DotComp.duplicate();
        LineTestComp.layers.add(changePositionOfLayer(1060,520,0,copyComp));
        var dotPositionArray = createArray(1000,1000);
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

    function findLayerIndex(name,currentComp){
        for(var index = 1; currentComp.layers.length >= index; index++){
                if( currentComp.layers[index].name.localeCompare(name) == 0 ){
                         alert(name + " Layer Found.");
                         return index;
                 }
         }
        alert(name + " Layer NOT Found.");
        return null;
        }

    function findComp(name,currentProject){
        for(var index = 1; currentProject.items.length >= index; index++){
                if( currentProject.items[index].name.localeCompare(name) == 0 ){
                         alert(name + " Comp Found.");
                         return currentProject.items[index];
                 }
         }
        alert(name + " Comp NOT Found.");
        return null;
        }
    }
    
    GraphDots(this);
 }