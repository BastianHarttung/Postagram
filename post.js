
let posts = [
    {
        'logo': 'img/logo-basti.jpg',
        'author': 'Hartt_aber_Herzlich',
        'image': 'img/basti-da.jpg',
        'headline': 'Mit Hilfe der Developer Akademie mache ich super Fortschritte auf dem Weg ein guter und gefragter Web-Developer zu werden.',
        'location': 'Hilpoltstein',
        'comments': [],
    },
    {
        'logo': 'img/logo-drohne.jpg',
        'author': 'Drohnen Fotos',
        'image': 'img/drohne.jpg',
        'headline': 'Impressionen vom Rothsee',
        'location': 'Rothsee',
        'comments': [],
    },
    {
        'logo': 'img/logo-mexiko.jpg',
        'author': 'Fotografie',
        'image': 'img/fotografie.jpg',
        'headline': 'Wunderschöne Aufnahmen aus der Welt der Fotografie',
        'location': 'Stadtpark',
        'comments': [],
    },
    {
        'logo': 'img/logo-familie.jpg',
        'author': 'Familie und ich',
        'image': 'img/familie.jpg',
        'headline': 'Familie ist total wichtig',
        'location': 'Rothsee',
        'comments': [],
    },
    {
        'logo': 'img/logo-rothsee.jpg',
        'author': 'Fränkisches Seenland',
        'image': 'img/rothsee.jpg',
        'headline': 'Der Rothsee. Einer der beliebtesten Auslflugsziele in der Region.',
        'location': 'Rothsee',
        'comments': [],
    },
    {
        'logo': 'img/logo-wettbewerb.png',
        'author': 'Fotowettbewerbe',
        'image': 'img/fotowettbewerb.png',
        'headline': 'In Hilpoltstein läuft derzeit ein Fotowettbewerb zum Thema Lieblingsplatz.',
        'location': 'Hilpoltstein',
        'comments': [],
    },
    {
        'logo': 'img/logo-auto.jpg',
        'author': 'Autofotografie',
        'image': 'img/auto.jpg',
        'headline': 'Autos sind ästhetisch ein ansprechendes Motiv für Fotografen und ein beliebtes Motiv bei Bildbearbeitern.',
        'location': 'Nürnberg',
        'comments': [],
    },
    {
        'logo': 'img/logo-iris.jpg',
        'author': 'Irisfotografie',
        'image': 'img/iris.jpg',
        'headline': 'Fotos von der Iris faszinieren und sind ein besonderes Geschenk für die Familie.',
        'location': '',
        'comments': [],
    },
    {
        'logo': 'img/logo-tiergarten.jpg',
        'author': 'Tiergarten Nürnberg',
        'image': 'img/tiergarten.jpg',
        'headline': 'Ein Ausflug in den Tiergarten ist immer ein Highlight für die ganze Familie.',
        'location': 'Nürnberg',
        'comments': [],
    },
];


function showPosts(){
    
    document.getElementById('Posts').innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        
        if(posts['image'] == ''){
            document.getElementById('Post-image'+i).classList.add('d-none');
        }

        document.getElementById('Posts').innerHTML += generatePost(post,i);
        
    }
}


/* if(posts['logo']== ''){
    posts['logo'] = 'img/profile.png';

}

if(posts['image'] == ''){
    document.getElementById('Post-image'+i).classList.add('d-none');
} */

/* HTML generate */

function generatePost(post,i){

    return  `

    <div id="Post${i}" class="post">

        <div class = "post-head flex-row">
            <div class="post-head-logo-container">
                <img class= "post-head-logo" src="${post['logo']}">
            </div>

            <div class="post-head-author-location">
                <div><b>${post['author']}</b></div>
                <div> ${post['location']}</div>
            </div>

        </div>

        <img id ="Post-image${i}" class= "post-image" src="${post['image']}">

        <div class ="symbols-post">

            <div class="symbols-post-left">                    
                <i class="far fa-heart"></i>
                <i class="far fa-comment" onclick="openComments(${i})"></i>
                <i class="far fa-paper-plane"></i>
            </div>

            <i class="far fa-bookmark"></i>

        </div>

        <div class="post-text flex-row">
            <div class="post-author"><b>${post['author']}:</b></div>
            <div class="post-headline">${post['headline']}</div>
        </div>

        <div id="Comment-btn${i}" class="comment-btn" onclick="openComments(${i})">Kommentare...</div>                

        <div id="Comment-input${i}" class="comment-input d-none">
            <input id="Name${i}" class="name" type="text" placeholder="Dein Name">
            <input id="Comment${i}" class="comment" type="text" placeholder="Dein Kommentar">
            <button onclick="addComment(${i})">Posten</button>
        </div>

        <div id="Comments${i}" class="d-none"> </div>

    </div>
    
    `   
}

/* -----New Post + ---------*/

function newPost(){
    document.getElementById('Newpost-container').classList.remove('d-none');
}

function closeNewPost(){
    document.getElementById('Newpost-container').classList.add('d-none');
}

function addPost(){
    
    let name = document.getElementById('Newpost-name').value;
    let location = document.getElementById('Newpost-location').value;
    let message = document.getElementById('Newpost-message').value;

    posts.push({'author': name,'location':location,'headline':message,'logo':'img/profile.png','image':''});    

    closeNewPost();
    showPosts();

    let position = posts.length-1;

    document.getElementById('Post'+position).scrollIntoView();

}


/* --------Comments ----------*/

function openComments(i){   
    document.getElementById('Name'+i).value = '';
    document.getElementById('Comment'+i).value = '';
    document.getElementById('Comment-input'+i).classList.remove('d-none');
    document.getElementById('Comment-btn'+i).classList.add('d-none');
       
}

function closeComments(i){
    document.getElementById("Comment-input"+i).classList.add("d-none"); 
    document.getElementById("Comment-btn"+i).innerHTML = 'Neuer Kommentar...'; 
    document.getElementById("Comment-btn"+i).classList.remove("d-none"); 
}


function addComment(i){
    
    document.getElementById('Comments'+i).classList.remove('d-none');

    let name = document.getElementById('Name'+i).value;
    let comment = document.getElementById('Comment'+i).value;

    posts[i]['comments'].push({'name': name, 'message':comment}); 

    document.getElementById('Comments'+i).innerHTML += `
        <div class = "comment-field">
            <div><b>${name}:</b></div>
            <div>${comment}</div>
        </div>
    `

    closeComments(i);
}


/*--------- Suchfunktion ----------*/

let open = false;

function showSearchBar(){
        
    if(open == false && window.innerWidth>650){
        document.getElementById('Search-bar').classList.remove('d-none');
        open = true;
    } else{
        document.getElementById('Search-bar').classList.add('d-none');
        open = false;
    }
}


function showSearchPosts(){

    let search = document.getElementById('Search').value;
    search = search.toLowerCase();
        
    let results = posts.filter(post => post['author'].toLowerCase().includes(search));

    if(results.length == 0){
        document.getElementById('Posts').innerHTML = `
        <div class="no-search">Kein Suchergebnis</div>
        `;

    }if(results.length > 0){

        document.getElementById('Posts').innerHTML = '';

        for (let i = 0; i < results.length; i++) {
            let post = results[i];
            document.getElementById('Posts').innerHTML += generatePost(post,i);     
        }
    } else{
        let results = posts.filter(post => post['location'].toLowerCase().includes(search));

    if(results.length > 0){

        document.getElementById('Posts').innerHTML = '';

        for (let i = 0; i < results.length; i++) {
            let post = results[i];
            document.getElementById('Posts').innerHTML += generatePost(post,i);      
        }
    }

    }

}