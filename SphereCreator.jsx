    #include ArrayCreator.jsx
    #include Time.jsx

function SphereCreator(radius, x, y, z)
{
     this.radius = radius;
        
     this.origin = 
     { 
          x: x,
          y: y,
          z: z
     };
      this.oppositeOctantIndicator = 0;
      this.FirstOctant = 0;
      this.SecondOctant = 1;
      this.ThirdOctant = 2;
      this.FourthOctant = 3;
      this.FifthOctant = 4;
      this.SixthOctant = 5;
      this.SeventhOctant = 6;
      this.EigthOctant = 7;
    
    this.createSphere = function(xArray, yArray, zArray)
    {
        this.UnitCircle(xArray, this.origin.y, this.origin.z, this.origin.x);
        this.UnitCircle(yArray, this.origin.z, this.origin.x, this.origin.y);
        this.UnitCircle(zArray, this.origin.x, this.origin.y, this.origin.z);
    }

//~      Have to add the origin to the first and second coordinate
    this.UnitCircle = function(array, firstCoordinateStartingPoint, secondCoordinateStartingPoint, plane)
    {
        var SQRTthreeByHalf = (this.radius * Math.sqrt(3) * 0.5);
        var SQRTtwoByHalf = (this.radius * Math.sqrt(2) * 0.5);
        var DIVIDEbyHalf = (this.radius * 0.5);
        var firstCoordinateMultiplier = 1;
        var secondCoordinateMultiplier = 1;
        
        for(var index = 0; index < 16; index++)
        {  
               array[index][2] = plane;
               array[index][0] = firstCoordinateStartingPoint;
               array[index][1] = secondCoordinateStartingPoint;
        }
    
//~         0 degrees
      array[0][0] += radius;
      
//~       30 degrees
       array[1][0] += SQRTthreeByHalf;
       array[1][1] += DIVIDEbyHalf;
       
//~        45 degrees
        array[2][0] += SQRTtwoByHalf;
        array[2][1] += SQRTtwoByHalf;
        
//~         60 degrees
        array[3][0] += DIVIDEbyHalf;
        array[3][1] += SQRTthreeByHalf;
        
//~         90 degrees
        array[4][1] += radius;
        
//~         120 degrees
        array[5][0] += -DIVIDEbyHalf;
        array[5][1] += SQRTthreeByHalf;
        
//~         135 degrees
        array[6][0] += -SQRTtwoByHalf;
        array[6][1] += SQRTtwoByHalf;
        
//~         150 degrees
        array[7][0] += -SQRTthreeByHalf;
        array[7][1] += DIVIDEbyHalf;
        
//~          180 degrees
        array[8][0] += -radius;
        
//~         210 degrees
        array[9][0] += -SQRTthreeByHalf;
        array[9][1] += -DIVIDEbyHalf;
        
//~         225 degrees
        array[10][0] += -SQRTtwoByHalf;
        array[10][1] += -SQRTtwoByHalf;
        
//~         240 degrees
        array[11][0] += -DIVIDEbyHalf;
        array[11][1] += -SQRTthreeByHalf;
        
//~         270 degrees
        array[12][1] += -radius;
        
//~         300 degrees
        array[13][0] += DIVIDEbyHalf;
        array[13][1] += -SQRTthreeByHalf;
        
//~         315 degrees
        array[14][0] += SQRTtwoByHalf;
        array[14][1] += -SQRTtwoByHalf;
        
//~         330 degrees
        array[15][0] += SQRTthreeByHalf;
        array[15][1] += -DIVIDEbyHalf;
        
    }  

    this.fillSphere = function(numberOfDotsNeeded)
    {
            var arrayOfInteriorSpherePoints = (new ArrayCreator()).createArray(numberOfDotsNeeded,3);
            
            for( var index = 0; index < numberOfDotsNeeded ; index++)
            {
                this.randomizeLayerPosition(arrayOfInteriorSpherePoints, index);
            }
        
        return arrayOfInteriorSpherePoints;
    }

     this.randomizeLayerPosition = function(arrayOfInteriorSpherePoints, currentDataLength)
    {
            var done;
            var coordinates = { x: 0, y: 0, z:0 };
            var currentLength = currentDataLength;
            do{
                done = true;
                this.createRandomPosition(coordinates);
                for(var index = 0; index < currentLength ; index++)
                {
                        if( arrayOfInteriorSpherePoints[index][0] == coordinates.x &&
                             arrayOfInteriorSpherePoints[index][1] == coordinates.y &&
                             arrayOfInteriorSpherePoints[index][2] == coordinates.z )
                        {
                            done = false;
                            break;
                         }
                 }
             }while(!done)
         arrayOfInteriorSpherePoints[currentLength][0] = coordinates.x;
         arrayOfInteriorSpherePoints[currentLength][1] = coordinates.y;
         arrayOfInteriorSpherePoints[currentLength][2] = coordinates.z;
         return;
    }

    this.createRandomPosition = function(coordinates)
    {
             var oppositeXOctantFactor = 1;
             var oppositeYOctantFactor = 1;
             var oppositeZOctantFactor = 1;
             var randomX = Math.random();
             var randomY = Math.random();
             var randomZ = Math.random();
             switch (this.oppositeOctantIndicator % 8 )
             {
                 // +++
                 case(this.FirstOctant):
                    break;
                 // -++
                 case(this.SecondOctant):
                    oppositeXOctantFactor = -1;
                    break;
                 // --+
                 case(this.ThirdOctant):
                    oppositeXOctantFactor = -1;
                    oppositeYOctantFactor = -1;
                    break;
                 // +-+
                 case(this.FourthOctant):
                    oppositeYOctantFactor = -1;
                    break;
                 // ++-
                 case(this.FifthOctant):
                    oppositeZOctantFactor = -1;
                    break;
                 // -+-
                 case(this.SixthOctant):
                    oppositeXOctantFactor = -1;
                    oppositeZOctantFactor = -1;
                    break;
                 // ---
                 case(this.SeventhOctant):
                    oppositeXOctantFactor = -1;
                    oppositeYOctantFactor = -1;
                    oppositeZOctantFactor = -1;
                    break;
                 // +--
                 case(this.EigthOctant):
                    oppositeYOctantFactor = -1;
                    oppositeZOctantFactor = -1;
                    break;
                 default: break;
                 }
             this.oppositeOctantIndicator++;
             while(randomZ > 0.5 ){
                 randomZ = Math.random();
             }
              while( randomX > 0.5 ){
                 randomX = Math.random();
             }
              while( randomY > 0.5  ){
                 randomY = Math.random();
             }
            coordinates.z = this.origin.z + (randomZ * oppositeZOctantFactor * this.radius);
            coordinates.x = this.origin.x + (randomX * oppositeXOctantFactor * this.radius);
            coordinates.y = this.origin.y + (randomY * oppositeYOctantFactor * this.radius);
    }
 }