const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    logo: 'images/js-logo.png',
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
        ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex( // <-checks sections
          (section) => section.sectionNum == sectionNum
        );//if sectionNum matches number picked, find its index & store in sectionIndex
        if (sectionIndex >= 0) { //checks to make sure user put in valid #
          this.sections[sectionIndex].enrolled++;//adds 1 to selected class
          renderSections(this.sections);//adjusts it to show in HTML/webpage
        }    
    }  
  };
//comma between everything, sections is an array, 
// enrollStudent is property with function as value; methods


console.log(aCourse.code); //CSE121b appears in console
console.log(aCourse.name); //Javascript Language appears in console

document.querySelector('#courseName').textContent=aCourse.name;//adds Javescript Language to h1
document.querySelector('#courseCode').textContent=aCourse.code;//adds CSE121b to h2

document.querySelector('img').setAttribute('src', aCourse.logo);//adds logo to empty <img>
document.querySelector('img').setAttribute('alt', aCourse.name);//adds alt to logo
document.querySelector('img').style.width= '100px'; //changes style of logo

//aCourse.sections[1] selects sectionNum 2, [0] would select sectionNum 1
console.log(aCourse.sections[1]);

//logs instructor from 0 index sections
console.log(aCourse.sections[0].instructor);
console.log(aCourse.sections[1].roomNum);

//methods always need ()s, with or w/out parameter
//code changed, prev code below     
//enrollStudent: function () {
        //console.log('student enrolled');
      //}
//aCourse.enrollStudent();


function sectionTemplate(section) {//adds array & organize in order below
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join(""); 
}//cuts commas from array; formats array ^^^^

renderSections(aCourse.sections);//adds array of sections to HTML/web

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);//method is called
});