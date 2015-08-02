{   
    #include ArrayCreator.jsx
    #include ArrangeDots.jsx
    
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
   
     function createAllDots(layerToCopy)
    {
//~         for( var index = 0; index < numberOfGraphs; index++)
//~         {
//~                 var copiedLayer = layerToCopy.duplicate();
//~                 RandomizeLayerPosition();
//~                 copiedLayer.property("position").setValue([tempX,tempY,tempZ]);
//~         }
            
            var numberOfPoints = 16;
            var xArray = createArray(numberOfPoints,3);
            var yArray = createArray(numberOfPoints,3);
            var zArray = createArray(numberOfPoints,3);
            
            arrangeDots(xArray, yArray, xArray);
            
            for( var index; index < numberOfPoints; index++)
            {
                var xCopiedLayer = layerToCopy.duplicate();
                xCopiedLayer.property("position").setValue([xArray[index][0],[xArray[index][1],[xArray[index][2]]);
                
                var yCopiedLayer = layerToCopy.duplicate();
                yCopiedLayer.property("position").setValue([yArray[index][0],[yArray[index][1],[yArray[index][2]]);
                
                var zCopiedLayer = layerToCopy.duplicate();
                zCopiedLayer.property("position").setValue([zArray[index][0],[zArray[index][1],[zArray[index][2]]);
            }
    }

    function RandomizeLayerPosition()
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
         return;
    }

    function createRandomPosition()
    {
            tempZ = Math.floor((Math.random() * maxZCoordinate) + 1);
            if( NegativeSwitcher ) { NegativeSwticher = false; tempZ = tempZ * -1; }
            else { NegativeSwitcher = true; }
            tempX = Math.floor((Math.random() * maxXCoordinate) + 1);
            tempY = Math.floor((Math.random() * maxYCoordinate) + 1);
    }

}