

/*create projectArray[] that will act as the database for all our projects
having to only add to this single array will free us from having to list
each and every project we do by hand on our portfolio page. the array we declare here
will be used little later in a for loop to iterate through each element in the projectsArray.
As you grow and add more projects simply return to this file and add your projects photo and details
to the array keeping with the same format
*/

var projectsArray=[
    ["images/image1.jpg","a description of your project/prodcut"],
    ["images/image2.jpg","a description of your project/prodcut"],
    ["images/image3.jpg","a description of your project/prodcut"],
    ["images/image4.jpg","a description of your project/prodcut"]

]


/* the showProjects function is triggered by the portfolio page once it loads*/

function showProjects(){

    console.log('start');
    var projectsString = " ";


    /* a for loop iterates through each element in the projectsArray and stores it's data in a string*/

    for(var i = 0; i < projectsArray.length-1; i++){

     projectsString += '<div class="card effect" style="width:30em\;margin-top:7%\;margin-bottom:7%\;"><img class="card-img-top" src='+ projectsArray[i][0] +' alt="Card image cap"><div class="card-body"><p class="card-text"> '+ projectsArray[i][1] +' </p></div></div>';

       console.log(projectsString);
    }

    /* once the for loop completes the number of iterrations the string is assigned to the div elemnet projectx*/
    document.getElementById('projectx').innerHTML = projectsString;
}
