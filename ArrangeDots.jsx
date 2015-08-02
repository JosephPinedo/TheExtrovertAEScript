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
        
        
    }

    function ZeroDegrees(radius, coordinates)
    {
        coordinates.first = radius * 1;
        coordinates.second = 0;
     }
 }