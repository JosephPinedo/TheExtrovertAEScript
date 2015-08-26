    #include ArrayCreator.jsx
    #include ArrangeDots.jsx

function RandomizePosition()
{   
   
    this.numberOfGraphs = 1000;
    this.maxXCoordinate = 4096;
    this.maxYCoordinate = 2160;
    this.maxZCoordinate = 1000;
    this.NegativeSwitcher = true;
    this.dotPositionArray = new Array(this.numberOfGraphs);
    this.dotPositionArrayIndex = 0;
    this.tempZ = 0;
    this.tempY = 0;
    this.tempX = 0;
   
     this.createAllDots = function(layerToCopy)
    {
//~         for( var index = 0; index < numberOfGraphs; index++)
//~         {
//~                 var copiedLayer = layerToCopy.duplicate();
//~                 RandomizeLayerPosition();
//~                 copiedLayer.property("position").setValue([tempX,tempY,tempZ]);
//~         }
            
            var numberOfPoints = 16;
            
            var arrayGenerator = new ArrayCreator();
//~             xArray is arranged like so: (y,z,x)
            var xArray = arrayGenerator.createArray(numberOfPoints,3);
            
//~             yArray is arranged like so: (z,x,y)
            var yArray = arrayGenerator.createArray(numberOfPoints,3);
            
//~             zArray is arranged like so: (x,y,z)
            var zArray = arrayGenerator.createArray(numberOfPoints,3);
            
            arrangeDots(xArray, yArray, zArray);
            
            for( var index = 0; index < numberOfPoints; index++)
            {
                var xCopiedLayer = layerToCopy.duplicate();
                xCopiedLayer.property("position").setValue( [ xArray[index][2] , xArray[index][0] , xArray[index][1]] );
                
                var yCopiedLayer = layerToCopy.duplicate();
                yCopiedLayer.property("position").setValue( [yArray[index][1] , yArray[index][2] , yArray[index][0]] );
                
                var zCopiedLayer = layerToCopy.duplicate();
                zCopiedLayer.property("position").setValue( [zArray[index][0] , zArray[index][1] , zArray[index][2]] );
            }
    }

    this.RandomizeLayerPosition = function()
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

    this.createRandomPosition = function()
    {
            tempZ = Math.floor((Math.random() * maxZCoordinate) + 1);
            if( NegativeSwitcher ) { NegativeSwticher = false; tempZ = tempZ * -1; }
            else { NegativeSwitcher = true; }
            tempX = Math.floor((Math.random() * maxXCoordinate) + 1);
            tempY = Math.floor((Math.random() * maxYCoordinate) + 1);
    }

}