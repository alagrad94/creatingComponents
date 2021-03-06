const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const htmlElement = (element, style, title) => {

    return `<${element} class = "${style}">${title}</${element}>`
}
// const h1 = (title, style) => {
//     return `<h1 class="${style}">${title}</h1>`
// }

// const section = (title, style) => {
//     return `<section class="bordered dashed ${style}">${title}</section>`
// }

// const aside = (title, style) => {
//     return `<aside class="${style}">${title}</aside>`
// }

const student = (name, className, info, grade) => `
    <div id="student">
        ${htmlElement("h1", "xx-large " + grade, name)}
        ${htmlElement("section", "bordered dashed section--padded", className)}
        ${htmlElement("aside", "pushRight", info)}
    </div>`
    
const container = document.querySelector("#container")

for (s of students) {
    let studentComponent = ""
    if (s.score >= 60) {
        studentComponent = student(s.name, s.class, s.info, "passing")
    } else {
        studentComponent = student(s.name, s.class, s.info, "failing")
    }
    container.innerHTML += studentComponent
    console.log(studentComponent)
}

