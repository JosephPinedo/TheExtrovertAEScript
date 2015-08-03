{
     var radius = 4;
     var origin = 
     { 
        x: 0,
        y: 0,
        z: 0
     };
    
    function arrangeDots(xArray, yArray, zArray)
    {
        UnitCircle(xArray, origin.y, origin.z, origin.x);
        UnitCircle(yArray, origin.z, origin.x, origin.y);
        UnitCircle(zArray, origin.x, origin.y, origin.z);
    }

//~      Have to add the origin to the first and second coordinate
    function UnitCircle(array, firstCoordinateStartingPoint, secondCoordinateStartingPoint, plane)
    {
        for(int index = 0; index < 16; index++)
        {  
               array[index][2] = plane;
               array[index][0] = firstCoordinateStartingPoint;
               array[index][1] = secondCoordinateStartingPoint;
        }
    
        var SQRTthreeByHalf = (radius * Math.sqrt(3) * 0.5);
        var SQRTtwoByHalf = (radius * Math.sqrt(2) * 0.5);
    
//~         0 degrees
      array[0][0] += radius;
      
//~       30 degrees
       array[1][0] += SQRTthreeByHalf;
       array[1][1] += (radius * 0.5);
       
//~        45 degrees
        array[2][0] += SQRTtwoByHalf;
        array[2][1] += SQRTtwoByHalf;
        
//~         60 degrees
        array[3][0] += (radius * 0.5);
        array[3][1] += SQRTthreeByHalf;
        
//~         90 degrees
        array[4][1] += radius;
        
//~         120 degrees
        array[5][0] += -(radius * 0.5);
        array[5][1] += SQRTthreeByHalf;
        
//~         135 degrees
        array[6][0] += -SQRTtwoByHalf;
        
    }  
 }