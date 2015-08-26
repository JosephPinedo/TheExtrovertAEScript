{
    #include RandomizePosition.jsx
    #include FileIO.jsx
    
//~     Global Variables from RandomizePosition.jsx:
//~     1) numberOfGraphs 2) maxXCoordinate 3) maxYCoordinate 4) maxZCoordinate 5) NegativeSwitcher 6) dotPositionArray 7) dotPositionArrayIndex 8) tempZ
//~     9) tempY 10) tempX
    
function GraphDots(thisObj){
        alert("Hold on! We're starting the script.");
        
        var project = new FileIO(app.project,
                                               prompt("Please enter the name of the Composition that we're going to work with.\n This project uses \"Line Test.\""),
                                               prompt("Please enter the name of the Layer we're going to duplicate.\n This project uses \"Dot\".") );

        if( project.findComp() == null ){  alert("The Composition wasn't found. Going to have to stop working. Leaving the building..."); return; }
        
         if( project.findLayer() == null ){  alert("The Layer wasn't found. Going to have to stop working. Leaving the building..."); return; }
        
        var dotCreator = new RandomizePosition();
        dotCreator.createAllDots(project.layer);
        
        alert("All Done! Finished successfully.");
        return;
 }

GraphDots(this);
}
    
    

 