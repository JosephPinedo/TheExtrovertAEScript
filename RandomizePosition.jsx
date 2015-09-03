    #include ArrayCreator.jsx
    #include SphereCreator.jsx

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
    this.radius = 200;
    this.xOrigin = 2413;
    this.yOrigin = 1080;
    this.zOrigin = 0;
    this.numberOfDotsNeeded = 1000;
   
     this.createAllDots = function(layerToCopy)
    {           
            var unitCircleBorderPoints = 16;
            
            var arrayGenerator = new ArrayCreator();
            
//~             xArray is arranged like so: (y,z,x)
            var xArray = arrayGenerator.createArray(numberOfPoints,3);
            
//~             yArray is arranged like so: (z,x,y)
            var yArray = arrayGenerator.createArray(numberOfPoints,3);
            
//~             zArray is arranged like so: (x,y,z)
            var zArray = arrayGenerator.createArray(numberOfPoints,3);
            
            var sphere = new SphereCreator(this.radius ,this.xOrigin,this.yOrigin,this.zOrigin);
            
            sphere.createSphere(xArray, yArray, zArray);
            
            for( var index = 0; index < unitCircleBorderPoints; index++)
            {
                this.duplicateLayer( layerToCopy, xArray[index][2] , xArray[index][0] , xArray[index][1] );
                
                this.duplicateLayer( layerToCopy, yArray[index][1] , yArray[index][2] , yArray[index][0] );
                
                this.duplicateLayer( layerToCopy, zArray[index][0] , zArray[index][1] , zArray[index][2] );
            }
        
            var arrayOfInteriorSpherePoints = sphere.fillSphere(  arrayGenerator.createArray(this.numberOfDotsNeeded,3) )
            
            for( var index = 0; index < this.numberOfDotsNeeded ; index++)
            {
                
            }
    }

    this.duplicateLayer = function(layerToDuplicate, xPosition, yPosition, zPosition)
    {
            var duplicatedLayer = layerToDuplicate.duplicate();
            duplicatedLayer.property("position").setValue( [xPosition , yPosition , zPosition] );
    }

}