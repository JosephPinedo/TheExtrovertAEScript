    #include ArrayCreator.jsx
    #include SphereCreator.jsx

function RandomizePosition()
{   
    this.radius = 600;
    this.xOrigin = 2413;
    this.yOrigin = 1080;
    this.zOrigin = 0;
    this.numberOfDotsNeeded = 1000;
    this.compStartTime = 10;
    this.compEndTime = 1000;
   
     this.createAllDots = function(layerToCopy)
    {           
            var unitCircleBorderPoints = 16;
            
            var arrayGenerator = new ArrayCreator();
            
//~             xArray is arranged like so: (y,z,x)
            var xArray = arrayGenerator.createArray(unitCircleBorderPoints,3);
            
//~             yArray is arranged like so: (z,x,y)
            var yArray = arrayGenerator.createArray(unitCircleBorderPoints,3);
            
//~             zArray is arranged like so: (x,y,z)
            var zArray = arrayGenerator.createArray(unitCircleBorderPoints,3);
            
            var sphere = new SphereCreator(this.radius ,this.xOrigin,this.yOrigin,this.zOrigin);
            
            sphere.createSphere(xArray, yArray, zArray);
            
            for( var index = 0; index < unitCircleBorderPoints; index++)
            {
                this.duplicateLayer( layerToCopy, xArray[index][2] , xArray[index][0] , xArray[index][1] );
                
                this.duplicateLayer( layerToCopy, yArray[index][1] , yArray[index][2] , yArray[index][0] );
                
                this.duplicateLayer( layerToCopy, zArray[index][0] , zArray[index][1] , zArray[index][2] );
            }
        
        var arrayofMiniSpherePositions = sphere.fillSphere(this.numberOfDotsNeeded);
        
        var timeCalculator = new Time(this.compStartTime,this.compEndTime,this.numberOfDotsNeeded);
        
        var arrayOfCompTime = timeCalculator.calculateNeededCompTimes();
        
        for (var index = 0; index < arrayofMiniSpherePositions.length; index++ )
        {
                var duplicatedLayer = this.duplicateLayer(layerToCopy, arrayofMiniSpherePositions[index][0], 
                                                          arrayofMiniSpherePositions[index][1], 
                                                          arrayofMiniSpherePositions[index][2] );
                this.setStartTime(duplicatedLayer,arrayOfCompTime[index]);
         }
    }

    this.duplicateLayer = function(layerToDuplicate, xPosition, yPosition, zPosition)
    {
            var duplicatedLayer = layerToDuplicate.duplicate();
            duplicatedLayer.property("position").setValue( [xPosition , yPosition , zPosition] );
            return duplicatedLayer;
    }

     this.setStartTime = function(duplicatedLayer,newCompStartTime)
     {
         duplicatedLayer.startTime.setValue(newCompStartTime);
     }

}