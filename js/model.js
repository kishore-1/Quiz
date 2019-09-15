let model = (function () {
    let home = [
        {
            cname: "left",
            id: "movieLink",
            src: "images/movie.jpg",
            alt: "Movies quiz image",
            name: "Movie",
            ind: 0,
        },
        {
            cname: "right",
            id: "sportLink",
            src: "images/sport.jpg",
            alt: "sports quiz image",
            name: "Sport",
            ind: 0,
        },
        {
            cname: "left",
            id: "codingLink",
            src: "images/coding.jpg",
            alt: "Coding quiz image",
            name: "Coding",
            ind: 0,
        },
        {
            cname: "right",
            id: "spaceLink",
            src: "images/space.jpg",
            alt: "space quiz image",
            name: "Space",
            ind: 0,
        },
    ];

    let Coding = [{
        question: "1. HTML is a programing language?",
        type: "radio",
        name: "codingq1",
        option: {
            option1: "Yes",
            option2: "No",
        },
        answer: [],
        ans: ["No"],
    },
    {
        question: "2. Who is the developers of ReactJs?",
        type: "radio",
        name: "codingq2",
        option: {
            option1: "Google",
            option2: "Amazon",
            option3: "FaceBook",
        },
        answer: [],
        ans: ["FaceBook"],
    },
    {
        question: "3. Name the java frameworks below?",
        type: "checkbox",
        name: "codingq3",
        option: {
            option1: "Angular",
            option2: "JSF",
            option3: "Spring",
        },
        answer: [],
        ans: ["JSF", "Spring"],
    },
    {
        question: "4. WordPress is built using?",
        type: "select",
        name: "codingq4",
        option: {
            option1: "Python",
            option2: "JAVA",
            option3: "PHP",
        },
        answer: ["Python"],
        ans: ["PHP"],
    },
    {
        question: "5. Write  about your favoutite Coding language?",
        type: "textarea",
        name: "codingq5",
        option: {
            placeHolder: "Write here",
        },
        answer: [""],
        ans: [10]
    }
    ];
    let Movie = [{
        question: "1. Who is the hero of comali?",
        type: "radio",
        name: "movieq1",
        option: {
            option1: "J.Ravi",
            option2: "Vijay",
            option3: "Suriya",
        },
        answer: [],
        ans: ["J.Ravi"],
    },
    {
        question: "2. Who is the director of 2.0?",
        type: "radio",
        name: "movieq2",
        option: {
            option1: "Shankar",
            option2: "Atlee",
            option3: "Dhanush",
        },
        answer: [],
        ans: ["Shankar"],
    },
    {
        question: "3. 50th movie of actor vijay?",
        type: "select",
        name: "movieq4",
        option: {
            option1: "Kathi",
            option2: "Thupaki",
            option3: "Sura",
        },
        answer: ["Kathi"],
        ans: ["Sura"],
    },
    {
        question: "4. Select the movies linked with each other?",
        type: "checkbox",
        name: "movieq3",
        option: {
            option1: "Avatar",
            option2: "Avengers",
            option3: "Titanic",
        },
        answer: [],
        ans: ["Avatar", "Titanic"],
    },
    {
        question: "5. Write about your favoutite Kollywood personality?",
        type: "textarea",
        name: "movieq5",
        option: {
            placeHolder: "Write here",
        },
        answer: [""],
        ans: [10]
    }
    ];
    let Space = [{
        question: "1. First person to land on Moon?",
        type: "radio",
        name: "spaceq1",
        option: {
            option1: "Buzz Aldrin",
            option2: "Elon Musk",
            option3: "Armstrong"
        },
        answer: [],
        ans: ["Armstrong"],
    },
    {
        question: "2. NASA is a Government agency of?",
        type: "radio",
        name: "spaceq2",
        option: {
            option1: "USA",
            option2: "World",
            option3: "Russia",
        },
        answer: [],
        ans: ["USA"],
    },
    {
        question: "3. Name the Aerospace companies?",
        type: "checkbox",
        name: "spaceq3",
        option: {
            option1: "SpaceX",
            option2: "Blue Origin",
            option3: "Aeroworks",
        },
        answer: [],
        ans: ["SpaceX", "Blue Origin"],
    },
    {
        question: "4. ISRO is a Indian agency?",
        type: "select",
        name: "spaceq4",
        option: {
            option1: "Yes",
            option2: "No",
        },
        answer: ["Yes"],
        ans: ["Yes"],
    },
    {
        question: "5. Write about your favoutite Space Agency?",
        type: "textarea",
        name: "spaceq5",
        option: {
            placeHolder: "Write here",
        },
        answer: [""],
        ans: [10]
    }
    ];
    let Sport = [{
        question: "1. Who is the captain of Indian cricket team?",
        type: "radio",
        name: "sportq1",
        option: {
            option1: "Dhoni",
            option2: "Rohit",
            option3: "Kholi"
        },
        answer: [],
        ans: ["Kholi"],
    },
    {
        question: "2. Who is the WC 2019 Winners?",
        type: "radio",
        name: "sportq2",
        option: {
            option1: "England",
            option2: "New Zealand",
            option3: "India",
        },
        answer: [],
        ans: ["England"],
    },
    {
        question: "3. Name the Sports Persons below?",
        type: "checkbox",
        name: "sportq3",
        option: {
            option1: "Dhoni",
            option2: "chhetri",
            option3: "Ranbir",
        },
        answer: [],
        ans: ["Dhoni", "chhetri"],
    },
    {
        question: "4. Ronaldo plays for which club?",
        type: "select",
        name: "sportq4",
        option: {
            option1: "chelsea",
            option2: "Juventus",
            option3: "Real Madrid",
        },
        answer: ["chelsea"],
        ans: ["Juventus"],
    },
    {
        question: "5. Write about your favoutite sports personality?",
        type: "textarea",
        name: "sportq5",
        option: {
            placeHolder: "Write here",
        },
        answer: [""],
        ans: [10]
    }
    ];

    return function () {
        return {
            home,
            Coding,
            Movie,
            Sport,
            Space,
        }
    }

})()();