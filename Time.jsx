    #include ArrayCreator.jsx

function Time(compStartTime, numberOfNeededTimes)
{
    this.compStartTime = compStartTime;
    
    this.numberOfNeededTimes = numberOfNeededTimes;
    
    this.calculateNeededCompTimes = function()
    {
//~         Can manipulate these values --> startTime = the time that the comp will first be seen. stretch = the percentage duration of the compTime in which the layer will be visible
//~               project.layer.startTime = 1;
//~              project.layer.stretch = 90;
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