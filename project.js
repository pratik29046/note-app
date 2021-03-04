
shownotes();

//if  add a note localstorage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {

    let addtxt = document.getElementById("addtxt");
    let addtitle = document.getElementById("addtitle");
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);

    }

    let myobj = {
        title: addtitle.value,
        text: addtxt.value
    }

    notesobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    addtitle.value = "";
    //console.log(notesobj);
    alert("Your note is save")
    shownotes();
});




//function to show element of localstorage
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
        
    }
    else {
        notesobj = JSON.parse(notes);
    }
    
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class=" notecard my-2 mx-2 card"  style="width: 100rem;">
        <div class="card-body">
        
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.text}</p>
        <button id="${index}"onclick="deletenote(this.id)" class="btn btn-primary">Delete A Note</button>
        </div>
        </div>`;
        
        
    });

    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = "  USE FOR ADD NOTE!  ";

    }
}

// function of delete a notes

function deletenote(index) {
    //console.log('i am deleting', index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
    confirm("Do you want to delete a note click ok!")
}

//search  

let search = document.getElementById("searchtxt");
search.addEventListener('input', function () {
    let inputval = search.value.toLowerCase();
    //console.log("input event fire",inputval );

    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        //console.log(cardtxt);

        if (cardtxt.includes(inputval)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = "none";
        }
    })
});


