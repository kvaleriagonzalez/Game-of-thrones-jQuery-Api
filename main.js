// https://thronesapi.com/swagger/index.html?urls.primaryName=Game%20of%20Thrones%20API%20v2

const app = {};

app.getCharacters = (id, paragraph) => { 
    // console.log(id);
    $.ajax({
      url: 'https://proxy.hackeryou.com',
      dataType: 'json',
      method:'GET',
      data: {
        reqUrl: `https://thronesapi.com/api/v2/Characters`,
        method: `GET`,
        dataType: `JSON`
    }
}).then(result => {
    // console.log(result[id]);
    // console.log(result[app.charactersId]);
    app.getActors(result[id], paragraph);
});
};

app.getActors = function(data, text) {
    // data.forEach( function() {
        // create an HTML output
        const addHtml = `
            <div class="actors">
                <p class="fullName"> I'm ${data.fullName}.</p>
                <p class="title"><em>Known as</em> ${data.title}.</p>
                <p> 
            </div>
        `
        // append it to the page
        $(text).append(addHtml);
        // console.log(data);
    // })
}

app.init = function() {
    // // when user click over
    $('button').on('click', function(event) {
    app.charactersId = event.target.id;
    const text = event.target.nextElementSibling;
    app.getCharacters(app.charactersId, text);
    $( "p" ).empty();
    
//    console.log(event.target.nextElementSibling);
    });
    
}

$(function() {
    app.init();
});