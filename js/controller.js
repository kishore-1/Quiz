let controller = (function () {
    let current = {
        ind: 0,
        name: "",
    };
    let reload = {
        Coding: 0,
        Sport: 0,
        Space: 0,
        Movie: 0,
    };

    function getReloadName(name) {
        return reload[name];
    }

    function getCurrentInd() {
        return current.ind;
    }

    function getCurrentName() {
        return current.name;
    }

    function setCurrentInd(ind) {
        current.ind = ind;
    }

    function setCurrentName(name) {
        current.name = name;
    }

    function setReloadValue(name, value) {
        reload[name] = value;
    }

    function back() {
        let ind = current.ind;
        let name = current.name;

        if (ind !== 0) {
            reload[name]--;
        } else {
            return;
        }

        view.build(name)
    }

    function next() {
        let ind = current.ind;
        let name = current.name;

        if (ind !== model[name].length - 1) {

            if (!model[name][ind].mandatory || model[name][ind].mandatory && model[name][ind].answer.length !== 0) {
                reload[name]++;
            } else {
                window.alert("Mandatory Question");
            }

        } else {
            return;
        }

        view.build(name);
    }

    function deleteChild(select) {
        let e = document.querySelector(select);
        let child = e.lastElementChild;

        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }

    }

    function updateAnswer() {
        let ans = model[current.name][current.ind].answer;

        if (this.type === "checkbox") {
            let ind = ans.indexOf(this.value);

            if (ind !== -1) {
                ans.splice(ind, 1);
            } else {
                ans.push(this.value);
            }

        } else {
            ans[0] = this.value;
        }

    }

    function evaluation() {
        let marks = 0;
        let quizData = model[current.name];

        quizData.forEach(obj => {

            if (obj.type === "textarea") {
                (obj.answer[0].length > obj.ans[0]) ? marks++ : marks;
            } else {
                (obj.ans.every(val => obj.answer.some(answer => val === answer))) ?
                    marks++ : marks;
            }

        });

        let transOverlay = document.createElement("div");
        transOverlay.setAttribute("class", "overlay-trans");

        let overlay = document.createElement("div");
        overlay.setAttribute("class", "overlay-box");
        document.getElementsByClassName("container")[0].style.opacity = 0.1;
        document.getElementsByClassName("header")[0].style.opacity = 0.1;

        let scoreValue = document.createElement("p");
        scoreValue.innerHTML = `YOUR SCORE : ${marks}`;
        overlay.appendChild(scoreValue);

        for (let key = 5; key > 0; key--) {

            if (localStorage.getItem(key) === undefined) {
                continue;
            }

            let temp = localStorage.getItem(key);
            localStorage.setItem(key + 1, temp);
        }

        localStorage.setItem(1, `${current.name} : ${marks}`);

        let home = document.createElement("input");
        home.setAttribute("type", "button");
        home.setAttribute("value", "Home");
        home.setAttribute("class", "overlay-home");
        home.addEventListener("click", function () {
            let e = document.querySelector(".overlay-trans");
            e.remove();
            document.getElementsByClassName("container")[0].style.opacity = 1;
            document.getElementsByClassName("header")[0].style.opacity = 1;
            view.home();
        });
        overlay.appendChild(home);

        let oldScore = document.createElement("input");
        oldScore.setAttribute("type", "button");
        oldScore.setAttribute("value", "Scores");
        oldScore.setAttribute("id", "overlay-score");
        oldScore.addEventListener("click", function () {
            controller.deleteChild(".overlay-box");

            for (let key = 1; key < 6; key++) {

                if (localStorage.getItem(key) === undefined) {
                    break;
                }

                let scoreValue = document.createElement("div");
                scoreValue.setAttribute("class", "score");
                scoreValue.innerHTML = localStorage.getItem(key);
                overlay.appendChild(scoreValue);
            }

            let home = document.createElement("input");
            home.setAttribute("type", "button");
            home.setAttribute("value", "Home");
            home.setAttribute("class", "overlay-home in");
            home.addEventListener("click", function () {
                let e = document.querySelector(".overlay-trans");
                e.remove();
                document.getElementsByClassName("container")[0].style.opacity = 1;
                document.getElementsByClassName("header")[0].style.opacity = 1;
                view.home();
            });
            overlay.appendChild(home);
        });
        overlay.appendChild(oldScore);
        transOverlay.appendChild(overlay);
        document.getElementsByTagName("body")[0].appendChild(transOverlay);
    }

    return {
        back,
        next,
        deleteChild,
        updateAnswer,
        evaluation,
        getReloadName,
        getCurrentInd,
        getCurrentName,
        setCurrentInd,
        setCurrentName,
        setReloadValue,
    }
})();