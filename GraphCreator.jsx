{
    #include RandomizePosition.jsx
    #include FileIO.jsx
    
function GraphCreator(thisObj){
        alert("Hold on! We're starting the script.");
        
         var LayerCompChoiceIsNeeded = false;
         
         if( LayerCompChoiceIsNeeded )
         {
                var project = new FileIO(app.project,
                                                       prompt("Please enter the name of the Composition that we're going to work with.\n This project uses \"Line Test.\""),
                                                       prompt("Please enter the name of the Layer we're going to duplicate.\n This project uses \"Dot\".") );
          }else
          {
                var project = new FileIO(app.project, "Line Test", "Dot");
           }

        if( project.findComp() == null ){  alert("The Composition wasn't found. Going to have to stop working. Leaving the building..."); return; }
        
         if( project.findLayer() == null ){  alert("The Layer wasn't found. Going to have to stop working. Leaving the building..."); return; }
        
        var dotCreator = new RandomizePosition();
        dotCreator.createAllDots(project.layer);
        
        alert("All Done! Finished successfully.");
        return;
 }

GraphCreator(this);
}
    
    

 