{ 
    var numberOfGraphs = 1000;
    var maxXCoordinate = 4096;
    var maxYCoordinate = 2160;
    var maxZCoordinate = 1000;
    var NegativeSwitcher = true;
    var dotPositionArray = new Array(numberOfGraphs);
    var dotPositionArrayIndex = 0;
    var tempZ = 0;
    var tempY = 0;
    var tempX = 0;
    
    function GraphDots(thisObj){
        alert("Starting");
        
        var CompositionToSearch = findComp(prompt("Please enter the Composition that contains \n the layer to duplicate. This project uses \"Line Test.\""),app.project);
        var layerToCopy = findLayer(prompt("Please enter the Layer to duplicate. \"This project uses Dot.\""),CompositionToSearch);
        createAllDots(layerToCopy);
        
        alert("Done");
        return;
        
    function createAllDots(layerToCopy)
    {
        for( var index = 0; index < numberOfGraphs; index++)
        {
                var copiedLayer = layerToCopy.duplicate();
                randomizeLayerPosition();
                copiedLayer.property("position").setValue([tempX,tempY,tempZ]);
        }
    }
        
            
    function randomizeLayerPosition()
    {     
            var done;
            var coordinateCode;
            do{
                done = true;
                createRandomPosition();
                coordinateCode = tempX.toString() + "*" + tempY.toString() + "*" + tempZ.toString();
                for(var index = 0; index < dotPositionArray.length ; index++)
                {
                        if( coordinateCode.localeCompare(dotPositionArray[index]) == 0 )
                        {
                            done = false;
                            break;
                         }
                 }
             }while(!done)
         dotPositionArray[dotPositionArrayIndex] = coordinateCode;
         dotPositionArrayIndex++;
    }

    function createRandomPosition()
    {
            tempZ = Math.floor((Math.random() * maxZCoordinate) + 1);
            if( NegativeSwitcher ) { NegativeSwticher = false; tempZ = tempZ * -1; }
            else { NegativeSwitcher = true; }
            tempX = Math.floor((Math.random() * maxXCoordinate) + 1);
            tempY = Math.floor((Math.random() * maxYCoordinate) + 1);
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