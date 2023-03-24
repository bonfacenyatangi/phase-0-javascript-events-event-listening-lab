function addingEventListener() {
    // document.getElementById("input").addEventListener('click', function(){
    //     alert("I got clicked");
    // })

    let input = document.getElementById("input");

    input.addEventListener('mouseover', function() {
        alert("The cursor got on me");
    })
}
