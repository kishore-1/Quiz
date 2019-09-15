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
    function back() {
        let ind = controller.current.ind;
        let name = controller.current.name;

        if (ind !== 0) {
            controller.reload[name]--;
        } else {
            return;
        }

        view.build(name)
    }
    function next() {
        let ind = controller.current.ind;
        let name = controller.current.name;

        if (ind !== model[name].length - 1) {
            controller.reload[name]++;
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
        let ans = model[controller.current.name][controller.current.ind].answer;

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
        let quizData = model[controller.current.name];

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
        var nodes = document.getElementsByClassName("container")[0].getElementsByTagName('*');

        for (let i = 0; i < nodes.length; i++) {
            nodes[i].disabled = true;
        }

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

        localStorage.setItem(1, `${controller.current.name} : ${marks}`);

        let home = document.createElement("input");
        home.setAttribute("type", "button");
        home.setAttribute("value", "Home");
        home.setAttribute("class", "overlay-home");
        home.addEventListener("click", function () {
            let e = document.querySelector(".overlay-trans");
            e.remove();
            document.getElementsByClassName("container")[0].style.opacity = 1;
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
                view.home();
            });
            overlay.appendChild(home);
        });
        overlay.appendChild(oldScore);
        transOverlay.appendChild(overlay);
        document.getElementsByTagName("body")[0].appendChild(transOverlay);
    }

    return function () {
        return {
            current,
            reload,
            back,
            next,
            deleteChild,
            updateAnswer,
            evaluation
        }
    }

})()();