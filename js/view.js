let view = (function () {
    function init() {
        document.getElementsByClassName("header")[0].addEventListener("click", function () {
            let e = document.querySelector(".overlay-box");

            if (e) {
                e.remove();
            }

            document.getElementsByClassName("container")[0].style.opacity = 1;
            view.home();
        });

        document.addEventListener("keydown", event => {

            if (event.isComposing || event.keyCode === 37) {
                controller.back();
            }

            if (event.isComposing || event.keyCode === 39) {
                controller.next();
            }

        });
    }
    function home() {
        controller.deleteChild("#questions");
        model.home.forEach(element => {
            let div = document.createElement("div");
            div.setAttribute("class", element.cname);
            div.setAttribute("id", element.id);

            let img = document.createElement("img");
            img.setAttribute("src", element.src);
            img.setAttribute("alt", element.alt);
            img.addEventListener("click", function () {
                view.build(element.name, element.ind);
            });
            div.appendChild(img);

            let text = document.createElement("div");
            text.setAttribute("class", "link");
            text.innerHTML = element.name;
            text.addEventListener("click", function () {
                view.build(element.name, element.ind);
            });
            div.appendChild(text);
            document.getElementById("questions").appendChild(div);
        });

    }
    function build(name) {
        let ind = controller.reload[name]
        controller.current.ind = ind;
        controller.current.name = name;
        controller.deleteChild("#questions");

        let root = document.createElement("div");
        root.setAttribute("id", "questionContainer");
        let head = document.createElement("div");
        head.setAttribute("class", "head");

        let headText = document.createElement("div");
        headText.setAttribute("class", "text");
        headText.innerHTML = name;
        head.appendChild(headText);

        let homeDiv = document.createElement("div");
        homeDiv.setAttribute("class", "homeDiv");

        let home = document.createElement("input");
        home.setAttribute("type", "button")
        home.setAttribute("id", "homeButton");
        home.setAttribute("value", "Home");
        home.addEventListener("click", function () {
            view.home();
        });
        homeDiv.appendChild(home);
        head.appendChild(homeDiv);
        root.appendChild(head);

        let question = document.createElement("div");
        question.setAttribute("class", "ques");
        let q = model[name][ind];
        question.innerHTML = q.question;
        root.appendChild(question);

        if (q.type === "textarea") {
            let option = document.createElement(q.type);
            option.setAttribute("placeholder", q.option.placeHolder);
            option.setAttribute("rows", "6");
            option.setAttribute("name", q.name);

            let debounce = (func, delay) => {
                let inDebounce;
                return function () {
                    const context = this;
                    clearTimeout(inDebounce);
                    inDebounce = setTimeout(() => func.apply(context), delay);
                }
            }

            option.addEventListener("input", debounce(function () {
                let pos = model[controller.current.name][controller.current.ind];
                pos.answer[0] = document.getElementsByName(pos.name)[0].value;
            }, 1000));
            root.appendChild(option);

            if (q.answer.length !== 0) {
                option.value = q.answer[0];
            }

        } else if (q.type === "select") {
            let select = document.createElement(q.type);
            select.setAttribute("name", q.name);
            select.addEventListener("change", function () {
                controller.updateAnswer.call(this);
            });

            Object.values(q.option).forEach(value => {
                let option = document.createElement("option");
                option.setAttribute("value", value);
                option.innerHTML = value;
                if (value === q.answer[0]) option.setAttribute("selected", "selected");
                select.appendChild(option);
            });

            root.appendChild(select);
        } else {

            Object.entries(q.option).forEach((key) => {
                let label = document.createElement("label");
                label.setAttribute("id", key[0]);

                let option = document.createElement("input");
                option.setAttribute("type", q.type);
                option.setAttribute("value", key[1]);
                option.setAttribute("name", q.name);
                option.addEventListener("change", function () {
                    controller.updateAnswer.call(this);
                });

                if (q.answer.indexOf(key[1]) !== -1) {
                    option.checked = true;
                }

                label.appendChild(option);
                label.append(key[1]);
                root.appendChild(label);
            });
        }

        let previous = document.createElement("div");
        previous.setAttribute("id", "previous");

        let back = document.createElement("input");
        back.setAttribute("type", "button");
        back.setAttribute("id", "back");

        if (ind === 0) {
            back.setAttribute("class", "hide");
        }

        back.setAttribute("value", "Previous");
        back.addEventListener("click", function () {
            controller.back();
        });
        previous.appendChild(back);

        let next = document.createElement("input");
        next.setAttribute("type", "button");

        if (ind === model[name].length - 1) {
            next.setAttribute("id", "result")
            next.setAttribute("value", "Evaluate");
            next.addEventListener("click", function () {
                controller.reload[name] = 0;
                controller.evaluation();
            });
        } else {
            next.setAttribute("id", "next");
            next.setAttribute("value", "Next");
            next.addEventListener("click", function () {
                controller.next();
            });
        }

        previous.appendChild(next);
        root.appendChild(previous);
        document.getElementById("questions").appendChild(root);
    }

    return function () {
        return {
            init: init,
            home: home,
            build,
        }
    }

})()();
view.init();
view.home();