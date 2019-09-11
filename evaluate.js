let model = {
    current: {
        ind: 0,
        name: "",
    },
    reload: {
        Coding: 0,
        Sport: 0,
        Space: 0,
        Movie: 0,
    },
    home: [
        {
            cname: "left",
            id: "movieLink",
            src: "https://t.ly/e9YAN",
            alt: "Movies quiz image",
            name: "Movie",
            ind: 0,
        },
        {
            cname: "right",
            id: "sportLink",
            src: "https://t.ly/YDy95",
            alt: "sports quiz image",
            name: "Sport",
            ind: 0,
        },
        {
            cname: "left",
            id: "codingLink",
            src: "https://t.ly/jDzqP",
            alt: "Coding quiz image",
            name: "Coding",
            ind: 0,
        },
        {
            cname: "right",
            id: "spaceLink",
            src: "photo.jpg",
            alt: "space quiz image",
            name: "Space",
            ind: 0,
        },
    ],
    Coding: [{
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
        ans: ["Angular", 2],
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
    ],
    Movie: [{
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
        ans: ["Avengers", 2],
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
    ],
    Space: [{
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
        ans: ["Aeroworks", 2],
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
    ],
    Sport: [{
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
        ans: ["Ranbir", 2],
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
    ],
}

let controller = {
    back() {
        let ind = model.current.ind;
        let name = model.current.name;
        if (ind !== 0) model.reload[name]--;
        else return;
        view.build(name)
    },
    next() {
        let ind = model.current.ind;
        let name = model.current.name;
        if (ind !== model[name].length - 1) model.reload[name]++;
        else return;
        view.build(name);
    },
    deleteChild(select) {
        let e = document.querySelector(select);
        let child = e.lastElementChild;
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    },
    updateAnswer() {
        let ans = model[model.current.name][model.current.ind].answer;
        if (this.type === "checkbox") {
            let ind = ans.indexOf(this.value);
            if (ind !== -1) ans.splice(ind, 1);
            else ans.push(this.value);
        }
        else ans[0] = this.value;
    },
    evaluation() {
        let marks = 0;
        let ans = model[model.current.name];
        let pos = model[model.current.name][model.current.ind];
        if (pos.type === "textarea") {
            pos.answer[0] = document.getElementsByName(pos.name)[0].value;
        }
        ans.forEach(obj => {
            if (obj.type === "textarea") (obj.answer[0].length > obj.ans[0]) ? marks++ : marks;
            else if (obj.type === "checkbox")
                (obj.answer.indexOf(obj.ans[0]) === -1 && obj.answer.length === obj.ans[1]) ? marks++ : marks;
            else (obj.answer[0] === obj.ans[0]) ? marks++ : marks;
        });

        let overlay = document.createElement("div");
        overlay.setAttribute("class", "overlay-box");
        document.getElementsByClassName("container")[0].style.opacity = 0.1;
        var nodes = document.getElementsByClassName("container")[0].getElementsByTagName('*');
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].disabled = true;
        }
        document.getElementsByTagName("body")[0].appendChild(overlay);

        let scoreValue = document.createElement("p");
        scoreValue.innerHTML = `YOUR SCORE : ${marks}`;
        document.getElementsByClassName("overlay-box")[0].appendChild(scoreValue);
        for (let key = 5; key > 0; key--) {
            if (localStorage.getItem(key) === undefined) continue;
            let temp = localStorage.getItem(key);
            localStorage.setItem(key + 1, temp);
        }
        localStorage.setItem(1, `${model.current.name} : ${marks}`);

        let home = document.createElement("input");
        home.setAttribute("type", "button");
        home.setAttribute("value", "Home");
        home.setAttribute("class", "overlay-home");
        home.addEventListener("click", function () {
            let e = document.querySelector(".overlay-box");
            e.remove();
            var nodes = document.getElementsByClassName("container")[0].getElementsByTagName('*');
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].disabled = false;
            }
            document.getElementsByClassName("container")[0].style.opacity = 1;
            view.home();
        });
        document.getElementsByClassName("overlay-box")[0].appendChild(home);

        let oldScore = document.createElement("input");
        oldScore.setAttribute("type", "button");
        oldScore.setAttribute("value", "Scores");
        oldScore.setAttribute("id", "overlay-score");
        oldScore.addEventListener("click", function () {
            controller.deleteChild(".overlay-box");
            for (let key = 1; key < 6; key++) {
                if (localStorage.getItem(key) === undefined) break;
                let scoreValue = document.createElement("div");
                scoreValue.setAttribute("class", "score");
                scoreValue.innerHTML = localStorage.getItem(key);
                document.getElementsByClassName("overlay-box")[0].appendChild(scoreValue);
            }
            let home = document.createElement("input");
            home.setAttribute("type", "button");
            home.setAttribute("value", "Home");
            home.setAttribute("class", "overlay-home in");
            home.addEventListener("click", function () {
                let e = document.querySelector(".overlay-box");
                e.remove();
                var nodes = document.getElementsByClassName("container")[0].getElementsByTagName('*');
                for (var i = 0; i < nodes.length; i++) {
                    nodes[i].disabled = false;
                }
                document.getElementsByClassName("container")[0].style.opacity = 1;
                view.home();
            });
            document.getElementsByClassName("overlay-box")[0].appendChild(home);
        });
        document.getElementsByClassName("overlay-box")[0].appendChild(oldScore);
    }
}

let view = {
    init(name) {
        document.getElementsByClassName("header")[0].addEventListener("click", function () {
            if (model.current.name) {
                let pos = model[model.current.name][model.current.ind];
                if (pos.type === "textarea") {
                    pos.answer[0] = document.getElementsByName(pos.name)[0].value;
                }
            }
            let e = document.querySelector(".overlay-box");
            if (e) e.remove();
            document.getElementsByClassName("container")[0].style.opacity = 1;
            view.home();
        });
        document.addEventListener("keydown", event => {
            let pos = model[model.current.name][model.current.ind];
            if (event.isComposing || event.keyCode === 37) {
                if (pos.type === "textarea") {
                    pos.answer[0] = document.getElementsByName(pos.name)[0].value;
                }
                controller.back(model.current.ind, model.current.name);
            }
            if (event.isComposing || event.keyCode === 39) {
                if (pos.type === "textarea") {
                    pos.answer[0] = document.getElementsByName(pos.name)[0].value;
                }
                controller.next(model.current.ind, model.current.name);
            }
        });
    },
    home() {
        controller.deleteChild("#questions");
        model.home.forEach(element => {
            let div = document.createElement("div");
            div.setAttribute("class", element.cname);
            div.setAttribute("id", element.id);
            document.getElementById("questions").appendChild(div);
            let img = document.createElement("img");
            img.setAttribute("src", element.src);
            img.setAttribute("alt", element.alt);
            img.addEventListener("click", function () {
                view.build(element.name, element.ind);
            });
            document.getElementById(element.id).appendChild(img);
            let text = document.createElement("text");
            text.setAttribute("class", "link");
            text.innerHTML = element.name;
            text.addEventListener("click", function () {
                view.build(element.name, element.ind);
            });
            document.getElementById(element.id).appendChild(text);
        })
    },
    build(name) {
        let ind = model.reload[name]
        model.current.ind = ind;
        model.current.name = name;
        controller.deleteChild("#questions");
        let head = document.createElement("div");
        head.setAttribute("class", "head");
        document.getElementById("questions").appendChild(head);

        let headText = document.createElement("text");
        headText.innerHTML = name;
        document.getElementsByClassName("head")[0].appendChild(headText);

        let homeDiv = document.createElement("div");
        homeDiv.setAttribute("class", "evaluate");
        document.getElementsByClassName("head")[0].appendChild(homeDiv);

        let home = document.createElement("input");
        home.setAttribute("type", "button")
        home.setAttribute("id", "evaluate");
        home.setAttribute("value", "Home");
        home.addEventListener("click", function () {
            view.home();
        });
        document.getElementsByClassName("evaluate")[0].appendChild(home);

        let question = document.createElement("question");
        let q = model[name][ind];
        question.innerHTML = q.question;
        document.getElementById("questions").appendChild(question);
        if (q.type === "textarea") {
            let option = document.createElement(q.type);
            option.setAttribute("placeholder", q.option.placeHolder);
            option.setAttribute("rows", "6");
            option.setAttribute("name", q.name);
            document.getElementById("questions").appendChild(option);
            if (q.answer.length !== 0) document.getElementsByName(q.name)[0].value = q.answer[0];
        }
        else if (q.type === "select") {
            let select = document.createElement(q.type);
            select.setAttribute("name", q.name);
            select.addEventListener("change", function () {
                controller.updateAnswer.call(this);
            });
            document.getElementById("questions").appendChild(select)
            Object.values(q.option).forEach(value => {
                let option = document.createElement("option");
                option.setAttribute("value", value);
                option.innerHTML = value;
                if (value === q.answer[0]) option.setAttribute("selected", "selected");
                document.getElementsByName(q.name)[0].appendChild(option);
            });

        }
        else {
            Object.entries(q.option).forEach((key) => {
                let label = document.createElement("label");
                label.setAttribute("id", key[0]);
                // label.innerHTML = key[1];
                document.getElementById("questions").appendChild(label);
                let option = document.createElement("input");
                option.setAttribute("type", q.type);
                option.setAttribute("value", key[1]);
                option.setAttribute("name", q.name);
                option.addEventListener("change", function () {
                    controller.updateAnswer.call(this);
                });
                if (q.answer.indexOf(key[1]) !== -1) option.checked = true;
                document.getElementById(key[0]).appendChild(option);
                document.getElementById(key[0]).append(key[1]);
            });
        }
        let previous = document.createElement("div");
        previous.setAttribute("id", "previous");
        document.getElementById("questions").appendChild(previous);

        let back = document.createElement("input");
        back.setAttribute("type", "button");
        back.setAttribute("id", "back");
        if (ind === 0) {
            back.setAttribute("class", "hide");
        }
        back.setAttribute("value", "Previous");
        back.addEventListener("click", function () {
            let pos = model[model.current.name][model.current.ind];
            if (pos.type === "textarea") {
                pos.answer[0] = document.getElementsByName(pos.name)[0].value;
            }
            controller.back(model.current.ind, model.current.name);
        });
        document.getElementById("previous").appendChild(back);

        let next = document.createElement("input");
        next.setAttribute("type", "button");
        if (ind === model[name].length - 1) {
            next.setAttribute("id", "result")
            next.setAttribute("value", "Evaluate");
            next.addEventListener("click", function () {
                controller.evaluation();
            });
        }
        else {
            next.setAttribute("id", "next");
            next.setAttribute("value", "Next");
            next.addEventListener("click", function () {
                let pos = model[model.current.name][model.current.ind];
                if (pos.type === "textarea") {
                    pos.answer[0] = document.getElementsByName(pos.name)[0].value;
                }
                controller.next(model.current.ind, model.current.name);
            });
        }
        document.getElementById("previous").appendChild(next);
    }
}
view.init();
view.home();