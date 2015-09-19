    #include ArrayCreator.jsx

function Time(totalCompTime, numberOfNeededTimes)
{ 
    // Total Time of the AE Composition
    this.totalCompTime = totalCompTime;
    
    // Total number of computed Layer time segments needed
    this.numberOfNeededTimes = numberOfNeededTimes;
    
    this.calculateNeededCompTimes = function()
    {
/*           Can manipulate these values within a Layer --> 
              startTime = the time that the comp will first be seen
              stretch = the percentage duration of the compTime in which the layer will be visible
              
              This is in too much detail. All we need to do is have 
*/
            var timeIncrement = this.totalCompTime / this.numberOfNeededTimes;
            var currentLayerStartTime = timeIncrement;
            var arrayCreator = new ArrayCreator();
            var arrayOfTimeInformation = arrayCreator.createArray(numberOfNeededTimes,2);
            
            for(index = 0; index < arrayOfTimeInformation.length; index++)
            {
                arrayOfTimeInformation[index][0] = currentLayerStartTime;
                arrayOfTimeInformation[index][1] = 100 - ((currentLayerStartTime/this.totalCompTime) * 100);
                currentLayerStartTime += timeIncrement;
            }        
            return arrayOfTimeInformation;
    }
    
}