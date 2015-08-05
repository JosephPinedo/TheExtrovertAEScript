{
     var radius = 200;
     var origin = 
     { 
        x: 2413,
        y: 1080,
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
        var SQRTthreeByHalf = (radius * Math.sqrt(3) * 0.5);
        var SQRTtwoByHalf = (radius * Math.sqrt(2) * 0.5);
        var DIVIDEbyHalf = (radius * 0.5);
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
 }