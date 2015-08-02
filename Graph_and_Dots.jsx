{
    #include RandomizePosition.jsx
    #include FileIO.jsx
    
//~     Global Variables from RandomizePosition.jsx:
//~     1) numberOfGraphs 2) maxXCoordinate 3) maxYCoordinate 4) maxZCoordinate 5) NegativeSwitcher 6) dotPositionArray 7) dotPositionArrayIndex 8) tempZ
//~     9) tempY 10) tempX
    
function GraphDots(thisObj){
        alert("Starting");

        var CompositionToSearch = findComp(prompt("Please enter the Composition that contains \n the layer to duplicate. This project uses \"Line Test.\""),app.project);
        var layerToCopy = findLayer(prompt("Please enter the Layer to duplicate. \"This project uses Dot.\""),CompositionToSearch);
        createAllDots(layerToCopy);
        
        alert("Done");
        return;
 }

GraphDots(this);
}
    
    

 