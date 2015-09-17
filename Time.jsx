    #include ArrayCreator.jsx

function Time(compStartTime, compEndTime, numberOfNeededTimes)
{
    this.compStartTime = compStartTime;
    
    this.compTotalTime = compEndTime - compStartTime;
    
    this.compEndTime = compEndTime;
    
    this.numberOfNeededTimes = numberOfNeededTimes;
    
    this.calculateNeededCompTimes = function()
    {
            if( this.compTotalTime % numberOfNeededTimes == 0 )
            {
                var timeIncrement = this.compTotalTime / numberOfNeededTimes;
            }else
            {
                var timeIncrement = Math.floor(this.compTotalTime / numberOfNeededTimes);
            }
            
            var arrayGenerator = new ArrayCreator(numberOfNeededTimes);
            
            for( var index = 0; index < arrayGenerator.length; index++)
            {
                arrayGenerator[index] = startTime + timeIncrement;
            }
        
            return arrayGenerator;
    }
    
}