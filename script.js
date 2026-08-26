// =====================================================
// ELEMENTS
// =====================================================

const birthdaySong =
    document.querySelector("#birthdaySong");

const loveSong =
    document.querySelector("#loveSong");

const introText =
    document.querySelector("#introText");

const enterButton =
    document.querySelector("#enterButton");

const curiousLine =
    document.querySelector("#curious");

const heading =
    document.querySelector("#heading");

const next =
    document.querySelector("#next");

const atmosphere =
    document.querySelector("#atmosphere");

const cinematicTransition =
    document.querySelector("#cinematicTransition");

const birthdayStart =
    document.querySelector("#birthdayStart");

const birthdayReveal =
    document.querySelector("#birthdayReveal");

const gamePhase =
    document.querySelector("#gamePhase");

const gameStars =
    document.querySelector("#gameStars");

const gameAtmosphere =
    document.querySelector("#gameAtmosphere");


// =====================================================
// ATMOSPHERE THEMES
// =====================================================

const atmosphereThemes = {

    chapterOne: [
        "✦", "✧", "·", "✨", "·",
        "✦", "·", "✧", "⋆", "·"
    ],

    chapterTwo: [
        "🌸", "✦", "💗", "·", "🌷",
        "✧", "·", "💞", "✦", "🌸"
    ],

    chapterThree: [
        "🌙", "✦", "💫", "·", "🦋",
        "✧", "·", "🌙", "⋆", "💫"
    ],

    chapterFour: [
        "🌌", "✨", "🌙", "·", "💜",
        "✦", "·", "🌙", "✧", "💫"
    ],

    birthday: [
        "🎈", "✨", "🎂", "💖", "🎉",
        "🌸", "💗", "✨", "🎀", "🥳",
        "💕", "🎈", "🌷", "💫", "🎉"
    ]
};


// =====================================================
// CHAPTER NOTES
// =====================================================

const chapterNotes = {

    chapterOne: [
        "just a little something...",
        "keep going 👀",
        "maybe there is more",
        "hmm...",
        "don't rush ✨",
        "something feels different",
        "stay curious",
        "one little step",
        "you found this...",
        "shhh... 🤍"
    ],

    chapterTwo: [
        "you actually clicked it 👀",
        "okay... interesting",
        "I knew you'd press it",
        "still curious?",
        "there's more 🌙",
        "don't stop now",
        "just keep going...",
        "you didn't think that was it, did you?",
        "hmm... maybe one more",
        "you're getting closer ✨"
    ],

    chapterThree: [
        "hehee... 👀",
        "you're really doing this",
        "I see that curiosity",
        "almost there...",
        "don't look away 🌙",
        "there's something waiting",
        "just a little further",
        "you came this far",
        "keep going ✨",
        "I wonder if you'll guess"
    ],

    chapterFour: [
        "okay... now it's getting interesting",
        "one last little thing...",
        "you've come this far 🌙",
        "don't give up now",
        "something is waiting",
        "almost...",
        "just one question",
        "think carefully 👀",
        "you might like this",
        "ready?"
    ],

    birthday: [
        "today is special ✨",
        "a little celebration",
        "this day is yours 💖",
        "smiles only",
        "make a wish 🎂",
        "you deserve happiness",
        "another year, another story",
        "keep shining ✨",
        "lots of love",
        "today is all about you 🤍"
    ]
};


// =====================================================
// CREATE ATMOSPHERE
// =====================================================

function createAtmosphere(theme) {

    if (!atmosphere) return;

    atmosphere.innerHTML = "";

    const items =
        atmosphereThemes[theme] || [];

    items.forEach((symbol) => {

        const item =
            document.createElement("span");

        item.className =
            "atmosphere-item";

        item.textContent =
            symbol;

        item.style.left =
            `${4 + Math.random() * 92}%`;

        item.style.top =
            `${8 + Math.random() * 82}%`;

        item.style.fontSize =
            `${13 + Math.random() * 13}px`;

        item.style.setProperty(
            "--duration",
            `${5 + Math.random() * 5}s`
        );

        item.style.setProperty(
            "--delay",
            `${Math.random() * -6}s`
        );

        item.style.setProperty(
            "--move",
            `${-30 + Math.random() * 60}px`
        );

        item.style.setProperty(
            "--opacity",
            `${0.25 + Math.random() * 0.35}`
        );

        atmosphere.appendChild(item);

    });

    createChapterNotes(theme);
}


// =====================================================
// CREATE CHAPTER NOTES
// =====================================================

function createChapterNotes(theme) {

    if (!atmosphere) return;

    const notes =
        chapterNotes[theme] || [];

    notes.forEach((text, index) => {

        const note =
            document.createElement("span");

        note.className =
            "chapter-note";

        note.textContent =
            text;

        note.style.position =
            "absolute";

        note.style.left =
            `${6 + Math.random() * 82}%`;

        note.style.top =
            `${8 + Math.random() * 78}%`;

        note.style.fontSize =
            `${12 + Math.random() * 5}px`;

        note.style.color =
            "rgba(95, 70, 80, 0.42)";

        note.style.fontFamily =
            "Georgia, serif";

        note.style.fontStyle =
            "italic";

        note.style.letterSpacing =
            "0.4px";

        note.style.whiteSpace =
            "nowrap";

        note.style.pointerEvents =
            "none";

        note.style.userSelect =
            "none";

        note.style.zIndex =
            "1";

        const rotation =
            -8 + Math.random() * 16;

        note.style.transform =
            `rotate(${rotation}deg)`;

        const duration =
            7 + Math.random() * 6;

        const delay =
            Math.random() * -8;

        const moveX =
            -18 + Math.random() * 36;

        note.style.animation =
            `chapterNoteFloat ${duration}s ease-in-out infinite`;

        note.style.animationDelay =
            `${delay}s`;

        note.style.setProperty(
            "--note-move",
            `${moveX}px`
        );

        if (index % 3 === 0) {

            note.style.color =
                "rgba(105, 75, 90, 0.34)";
        }

        if (index % 4 === 0) {

            note.style.opacity =
                "0.75";
        }

        atmosphere.appendChild(note);

    });


    if (!document.querySelector("#chapterNoteAnimation")) {

        const style =
            document.createElement("style");

        style.id =
            "chapterNoteAnimation";

        style.textContent = `

            @keyframes chapterNoteFloat {

                0% {
                    opacity: 0;

                    transform:
                        translateY(18px)
                        translateX(0)
                        rotate(-5deg);
                }

                18% {
                    opacity: 0.7;
                }

                50% {
                    opacity: 0.9;

                    transform:
                        translateY(-12px)
                        translateX(var(--note-move))
                        rotate(4deg);
                }

                82% {
                    opacity: 0.65;
                }

                100% {
                    opacity: 0;

                    transform:
                        translateY(-32px)
                        translateX(0)
                        rotate(-5deg);
                }

            }

        `;

        document.head.appendChild(style);
    }
}


// =====================================================
// CHANGE CHAPTER
// =====================================================

function changeBackground(chapter) {

    document.body.classList.remove(
        "chapter-one",
        "chapter-two",
        "chapter-three",
        "chapter-four",
        "chapter-birthday"
    );

    document.body.classList.add(chapter);

    switch (chapter) {

        case "chapter-one":

            createAtmosphere("chapterOne");

            break;

        case "chapter-two":

            createAtmosphere("chapterTwo");

            break;

        case "chapter-three":

            createAtmosphere("chapterThree");

            break;

        case "chapter-four":

            createAtmosphere("chapterFour");

            break;

        case "chapter-birthday":

            createAtmosphere("birthday");

            break;
    }
}


// =====================================================
// INITIAL
// =====================================================

changeBackground("chapter-one");




// =====================================================
// CHAPTER NAVIGATION
// =====================================================

if (enterButton) {

    enterButton.addEventListener(
        "click",
        function firstClick() {

            changeBackground("chapter-two");

            heading.textContent =
                "Oh... you clicked it 👀";

            curiousLine.style.display =
                "none";

            introText.style.display =
                "none";

            enterButton.textContent =
                "Continue →";

            next.innerHTML = `
                <p>
                    There is more... but you'll have to find it. 🌙
                </p>
            `;

            enterButton.onclick =
                function secondClick() {

                    changeBackground(
                        "chapter-three"
                    );

                    heading.textContent =
                        "He hee heee... you're really curious 👀";

                    enterButton.style.display =
                        "none";

                    next.innerHTML = `
                        <p>
                            Then maybe you're ready for the next part... ✨
                        </p>

                        <button id="nextBtn">
                            Go on →
                        </button>
                    `;

                    const nextBtn =
                        document.querySelector("#nextBtn");

                    if (!nextBtn) return;

                    nextBtn.onclick =
                        function () {

                            changeBackground(
                                "chapter-four"
                            );

                            heading.textContent =
                                "Okay... let's see 👀";

                            next.innerHTML = `
                                <p>
                                    You made it this far... 🌙
                                </p>

                                <p>
                                    But I still have one question for you...
                                </p>

                                <button id="questionBtn">
                                    I'm ready 👀
                                </button>
                            `;

                            const questionBtn =
                                document.querySelector(
                                    "#questionBtn"
                                );

                            if (!questionBtn) return;

                            questionBtn.onclick =
                                function () {

                                    changeBackground(
                                        "chapter-birthday"
                                    );

                                    heading.style.display =
                                        "none";

                                    next.style.display =
                                        "none";

                                    birthdayReveal.style.display =
                                        "block";

                                    birthdayReveal.style.opacity =
                                        "1";

                                    birthdaySong.volume =
                                        1;

                                    const playPromise =
                                        birthdaySong.play();

                                    if (playPromise) {

                                        playPromise.catch(
                                            function () {

                                                console.log(
                                                    "Birthday song requires user interaction."
                                                );

                                            }
                                        );
                                    }
                                };
                        };
                };
        }
    );
}


// =====================================================
// AUDIO FADE
// =====================================================

function fadeAudio(
    audio,
    targetVolume,
    duration
) {

    if (!audio) return;

    const startVolume =
        audio.volume;

    const difference =
        targetVolume - startVolume;

    const steps =
        40;

    const intervalTime =
        duration / steps;

    let step =
        0;

    const fade =
        setInterval(
            function () {

                step++;

                audio.volume =
                    Math.max(
                        0,
                        Math.min(
                            1,
                            startVolume +
                            difference *
                            (step / steps)
                        )
                    );

                if (step >= steps) {

                    clearInterval(fade);

                    audio.volume =
                        targetVolume;
                }

            },
            intervalTime
        );
}


// =====================================================
// GAME STARS
// =====================================================

function createGameStars() {

    if (!gameStars) return;

    gameStars.innerHTML =
        "";

    const symbols = [
        "✦",
        "✧",
        "⋆",
        "·",
        "✦",
        "·",
        "✧",
        "⋆",
        "💫",
        "✦",
        "·",
        "✧",
        "🌙",
        "✦",
        "·",
        "⋆"
    ];

    symbols.forEach(
        function (symbol) {

            const star =
                document.createElement("span");

            star.className =
                "game-star";

            star.textContent =
                symbol;

            star.style.left =
                `${3 + Math.random() * 94}%`;

            star.style.top =
                `${5 + Math.random() * 90}%`;

            star.style.fontSize =
                `${10 + Math.random() * 14}px`;

            star.style.setProperty(
                "--game-duration",
                `${5 + Math.random() * 5}s`
            );

            star.style.setProperty(
                "--game-delay",
                `${Math.random() * -7}s`
            );

            star.style.setProperty(
                "--game-move",
                `${-35 + Math.random() * 70}px`
            );

            gameStars.appendChild(star);

        }
    );
}


// =====================================================
// GAME ATMOSPHERE
// =====================================================

function createGameAtmosphere() {

    if (!gameAtmosphere) return;

    gameAtmosphere.innerHTML =
        "";

    const symbols = [
        "🌙",
        "✦",
        "💫",
        "🦋",
        "✧",
        "·",
        "🌌",
        "💜",
        "⋆",
        "✨",
        "🌙",
        "✦"
    ];

    symbols.forEach(
        function (symbol) {

            const item =
                document.createElement("span");

            item.className =
                "game-atmosphere-item";

            item.textContent =
                symbol;

            item.style.left =
                `${3 + Math.random() * 94}%`;

            item.style.top =
                `${5 + Math.random() * 90}%`;

            item.style.fontSize =
                `${12 + Math.random() * 14}px`;

            item.style.setProperty(
                "--emoji-duration",
                `${6 + Math.random() * 5}s`
            );

            item.style.setProperty(
                "--emoji-delay",
                `${Math.random() * -8}s`
            );

            item.style.setProperty(
                "--emoji-move",
                `${-35 + Math.random() * 70}px`
            );

            gameAtmosphere.appendChild(item);

        }
    );
}


// =====================================================
// START CINEMATIC TRANSITION
// =====================================================

if (birthdayStart) {

    birthdayStart.addEventListener(
        "click",
        function () {

            birthdayStart.disabled =
                true;

            createGameStars();

            createGameAtmosphere();

            fadeAudio(
                birthdaySong,
                0,
                2500
            );

            loveSong.volume =
                0;

            loveSong.currentTime =
                0;

            cinematicTransition.classList.remove(
                "gameReveal"
            );

            cinematicTransition.classList.add(
                "active"
            );

            const lovePromise =
                loveSong.play();

            if (lovePromise) {

                lovePromise
                    .then(
                        function () {

                            fadeAudio(
                                loveSong,
                                1,
                                3500
                            );

                        }
                    )
                    .catch(
                        function () {

                            console.log(
                                "Love song could not autoplay."
                            );

                        }
                    );
            }

            birthdayReveal.style.display =
                "none";

            birthdayReveal.style.opacity =
                "0";

            gamePhase.classList.remove(
                "active"
            );

            setTimeout(
                function () {

                    gamePhase.classList.add(
                        "active"
                    );

                    requestAnimationFrame(
                        function () {

                            cinematicTransition.classList.add(
                                "gameReveal"
                            );

                            setTimeout(
                                function () {

                                    cinematicTransition.classList.remove(
                                        "active"
                                    );

                                    cinematicTransition.classList.remove(
                                        "gameReveal"
                                    );

                                },
                                900
                            );

                        }
                    );

                },
                3800
            );

        }
    );
}


// =====================================================
// GAME / LEVEL ELEMENTS
// =====================================================


const level1Card =
    document.querySelector("#level1Card");

const level2Intro =
    document.querySelector("#level2Intro");

const level2Button =
    document.querySelector("#level2Button");

const nextLevelBtn =
    document.querySelector("#nextLevelButton");

const enterLevel2 =
    document.querySelector("#enterLevel2");

const resultCard =
    document.querySelector("#resultCard");

const finalScore =
    document.querySelector("#finalScore");

const resultTitle =
    document.querySelector("#resultTitle");

const resultMessage =
    document.querySelector("#resultMessage");

const resultBarFill =
    document.querySelector("#resultBarFill");

const resultPercentage =
    document.querySelector("#resultPercentage");

const levelSelect =
    document.querySelector("#levelSelect");

const level1Button =
    document.querySelector("#level1Button");

const q1Options =
    document.querySelectorAll(
        "#level1Card .option"
    );

const showOptions =
    document.querySelector("#showOptions");

const submitAnswer =
    document.querySelector("#submitAnswer");

const answerReaction =
    document.querySelector("#answerReaction");

const reactionVisual =
    document.querySelector("#reactionVisual");

const reactionText =
    document.querySelector("#reactionText");

const nextQuestionBtn =
    document.querySelector("#nextQuestionBtn");

const optionsGrid =
    document.querySelector(
        "#level1Card .optionsGrid"
    );

const timerCount =
    document.querySelector("#timerCount");


// =====================================================
// Q1 VARIABLES
// =====================================================

let q1Timer =
    null;

let q1TimeLeft =
    10;

let q1Answered =
    false;

let q1SelectedAnswer =
    null;

let currentQuestion =
    1;

let score =
    0;


// =====================================================
// GAME START → LEVEL SELECTION
// =====================================================

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target &&
            event.target.id === "gameStart"
        ) {

            const gameCard =
                document.querySelector(
                    ".gameCard"
                );

            if (gameCard) {

                gameCard.style.display =
                    "none";
            }

            if (levelSelect) {

                levelSelect.style.display =
                    "block";
            }
        }
    }
);


// =====================================================
// LEVEL 1 → QUESTION 1
// =====================================================

if (level1Button) {

    level1Button.addEventListener(
        "click",
        function () {

            if (levelSelect) {

                levelSelect.style.display =
                    "none";
            }

            if (level1Card) {

                level1Card.style.display =
                    "block";

                level1Card.classList.remove(
                    "options-visible"
                );

                level1Card.classList.remove(
                    "answer-selected"
                );
            }

            if (showOptions) {

                showOptions.style.display =
                    "inline-block";
            }

            if (submitAnswer) {

                submitAnswer.style.display =
                    "none";

                submitAnswer.disabled =
                    true;
            }

            resetReaction();

        }
    );
}

// =====================================================
// LEVEL 2 → JUNGLE ENTRANCE
// =====================================================




// =====================================================
// ENTER LEVEL 2
// =====================================================

if (enterLevel2) {

    enterLevel2.addEventListener(
        "click",
        function () {

            console.log(
                "Level 2 started"
            );

            // We will put Level 2 Question 1 here later.

        }
    );

}

// =====================================================
// RESET REACTION
// =====================================================

function resetReaction() {

    if (answerReaction) {

        answerReaction.style.display =
            "none";

        answerReaction.style.opacity =
            "0";

        answerReaction.style.visibility =
            "hidden";

        answerReaction.className =
            "";
    }

    if (reactionVisual) {

        reactionVisual.innerHTML =
            "";
    }

    if (reactionText) {

        reactionText.innerHTML =
            "";
    }

    if (nextQuestionBtn) {

        nextQuestionBtn.style.display =
            "none";
    }
}


// =====================================================
// SHOW OPTIONS
// =====================================================

if (showOptions) {

    showOptions.addEventListener(
        "click",
        function () {

            if (level1Card) {

                level1Card.classList.add(
                    "options-visible"
                );
            }

            optionsGrid.style.display = "";

            showOptions.style.display =
                "none";

            if (submitAnswer) {

                submitAnswer.style.display =
                    "block";

                submitAnswer.disabled =
                    true;
            }

            startQ1Timer();

        }
    );
}


// =====================================================
// Q1 OPTION SELECTION
// =====================================================

q1Options.forEach(
    function (option) {

        option.addEventListener(
            "click",
            function () {

                if (q1Answered) return;

                q1Options.forEach(
                    function (item) {

                        item.classList.remove(
                            "selected"
                        );
                    }
                );

                option.classList.add(
                    "selected"
                );

                q1SelectedAnswer =
                    option;

                if (submitAnswer) {

                    submitAnswer.disabled =
                        false;
                }

            }
        );

    }
);


// =====================================================
// START Q1 TIMER
// =====================================================

function startQ1Timer() {

    clearInterval(q1Timer);

    q1TimeLeft =
        10;

    q1Answered =
        false;

    q1SelectedAnswer =
        null;

    resetReaction();


    if (timerCount) {

        timerCount.textContent =
            q1TimeLeft;
    }

   

    q1Options.forEach(
        function (option) {

            option.classList.remove(
                "selected",
                "correct",
                "wrong"
            );

            option.style.pointerEvents =
                "auto";
        }
    );


    if (submitAnswer) {

        submitAnswer.disabled =
            true;
    }


    q1Timer =
        setInterval(
            function () {

                q1TimeLeft--;

                if (timerCount) {

                    timerCount.textContent =
                        q1TimeLeft;
                }


                if (q1TimeLeft <= 0) {

                    clearInterval(
                        q1Timer
                    );

                    if (!q1Answered) {

                        q1Answered =
                            true;

                        q1Options.forEach(
                            function (option) {

                                option.style.pointerEvents =
                                    "none";
                            }
                        );

                        if (submitAnswer) {

                            submitAnswer.disabled =
                                true;

                            submitAnswer.style.display =
                                "none";
                        }

                        showReaction(
                            "missed"
                        );

                    }
                }

            },
            1000
        );
}


// =====================================================
// SUBMIT Q1 ANSWER
// =====================================================

if (submitAnswer) {

    submitAnswer.addEventListener(
        "click",
        function () {

            if (
                !q1SelectedAnswer ||
                q1Answered
            ) return;


            q1Answered =
                true;

            clearInterval(
                q1Timer
            );


            submitAnswer.disabled =
                true;


            q1Options.forEach(
                function (option) {

                    option.style.pointerEvents =
                        "none";
                }
            );


           const correctAnswers = {
    1: "A",
    2: "B",
    3: "C",
    4: "B",
    5: "A"
};

if (
    q1SelectedAnswer.dataset.answer ===
    correctAnswers[currentQuestion]
) {

                score += 10;

                q1SelectedAnswer.classList.add(
                    "correct"
                );

                showReaction(
                    "correct"
                );

            }

            else {

                score -= 5;

                q1SelectedAnswer.classList.add(
                    "wrong"
                );

                showReaction(
                    "wrong"
                );

            }

        }
    );
}


// =====================================================
// SHOW REACTION
// =====================================================

function showReaction(type) {

    if (!answerReaction) return;

 // Hide question card during reaction

if (level1Card) {

    level1Card.style.display =
        "none";
}
    // Hide question options

    if (optionsGrid) {

        optionsGrid.style.display =
            "none";
    }


    if (showOptions) {

        showOptions.style.display =
            "none";
    }


    if (submitAnswer) {

        submitAnswer.style.display =
            "none";
    }


    // Show reaction container

    answerReaction.style.display =
        "block";

    answerReaction.style.visibility =
        "visible";

    answerReaction.style.opacity =
        "1";

    answerReaction.className =
        "reactionActive";

        // Make sure Next button is hidden
// until the reaction is finished

if (nextQuestionBtn) {

    nextQuestionBtn.style.display =
        "none";
}


    // First judging phase

    if (reactionText) {

        reactionText.innerHTML = `

            <div class="judgingDots">
                Judging your answer...
            </div>

        `;
    }


    // Reveal final reaction

    setTimeout(
        function () {

            if (type === "correct") {

                showCorrectReaction();
            }

            else if (type === "wrong") {

                showWrongReaction();
            }

            else {

                showMissedReaction();
            }


            if (nextQuestionBtn) {

                nextQuestionBtn.style.display =
                    "inline-block";
            }

        },
        900
    );
}


// =====================================================
// CORRECT REACTION — JUGNU
// =====================================================

function showCorrectReaction() {

    if (reactionVisual) {

        reactionVisual.innerHTML =
            "";


        for (
            let i = 0;
            i < 12;
            i++
        ) {

            const jugnu =
                document.createElement("div");

            jugnu.className =
                "jugnu";

            jugnu.style.left =
                `${5 + Math.random() * 90}%`;

            jugnu.style.top =
                `${10 + Math.random() * 75}%`;

            jugnu.style.setProperty(
                "--duration",
                `${2 + Math.random() * 3}s`
            );

            reactionVisual.appendChild(
                jugnu
            );
        }
    }


    if (reactionText) {

        reactionText.innerHTML = `

            <div class="reactionMessage correctMessage">

                <h3>
                    😛 WAITTT—
                </h3>

                <p>
                    You actually know me that well?!
                </p>

                <p>
                    +10 point for you 😌✨
                </p>

            </div>

        `;
    }
}


// =====================================================
// WRONG REACTION — OWL
// =====================================================

function showWrongReaction() {

    if (reactionVisual) {

        reactionVisual.innerHTML = `

            <div class="owl">

                <div class="owlWing left"></div>

                <div class="owlWing right"></div>

                <div class="owlBody"></div>

                <div class="owlHead">

                    <div class="owlEye left"></div>

                    <div class="owlEye right"></div>

                    <div class="owlBeak"></div>

                </div>

            </div>

        `;
    }


    if (reactionText) {

        reactionText.innerHTML = `

            <div class="reactionMessage wrongMessage">

                <h3>
                    🚨 WRONG ANSWER DETECTED 🚨
                </h3>

                <p>
                    You seriously thought I would choose THAT?!
                </p>

                <p>
                    You need to know me better, mister. 🙄
                </p>

            </div>

        `;
    }
}


// =====================================================
// MISSED REACTION — SAD MOON
// =====================================================

function showMissedReaction() {

    if (reactionVisual) {

        reactionVisual.innerHTML = `

            <div class="sadMoon">

                <div class="moonCrater crater1"></div>

                <div class="moonCrater crater2"></div>

                <div class="moonCrater crater3"></div>

                <div class="moonBrow left"></div>

                <div class="moonBrow right"></div>

                <div class="moonEye left"></div>

                <div class="moonEye right"></div>

                <div class="moonMouth"></div>

                <div class="moonTear"></div>

            </div>

        `;
    }


    if (reactionText) {

        reactionText.innerHTML = `

            <div class="reactionMessage missedMessage">

                <h3>
                    ⏰ TIME'S UP!
                </h3>

                <p>
                    I guess knowing me is harder than
                    you thought. 😌
                </p>

            </div>

        `;
    }
}

// =====================================================
// SHOW FINAL RESULT
// =====================================================

function showFinalResult() {

    if (!resultCard) return;

    // Hide reaction card
    if (answerReaction) {

        answerReaction.style.display =
            "none";

        answerReaction.style.opacity =
            "0";

        answerReaction.style.visibility =
            "hidden";
    }


    // Hide question card
    if (level1Card) {

        level1Card.style.display =
            "none";
    }


    // Show result card
    resultCard.style.display =
        "block";


    // Show score
    if (finalScore) {

        finalScore.textContent =
            score;
    }


    // Calculate percentage
    // Maximum possible score = 50

    let percentage =
        Math.round(
            (score / 50) * 100
        );

    // Don't allow the visual percentage
    // to go below 0

    percentage =
        Math.max(
            0,
            percentage
        );


    if (resultPercentage) {

        resultPercentage.textContent =
            percentage + "%";
    }


    if (resultBarFill) {

        setTimeout(
            function () {

                resultBarFill.style.width =
                    percentage + "%";

            },
            100
        );
    }


    // Result messages

    if (score >= 40) {

        resultTitle.textContent =
            "You REALLY know me! 💖";

        resultMessage.textContent =
            "Okay wow... you actually know me ridiculously well. I’m impressed. 😭✨";

    }

    else if (score >= 25) {

        resultTitle.textContent =
            "You know me pretty well 🥰";

        resultMessage.textContent =
            "Not bad at all... you definitely pay attention to me. There are still a few things to discover though. 👀";

    }

    else if (score >= 10) {

        resultTitle.textContent =
            "Hmm... we need to talk 👀";

        resultMessage.textContent =
            "You know some things about me... but clearly I still have a few secrets left. 🌙";

    }

    else if (score >= 0) {

        resultTitle.textContent =
            "Do you even know me? 😭";

        resultMessage.textContent =
            "I gave you chances... and somehow we ended up here. You definitely need to know me better. 😂";

    }

    else {

        resultTitle.textContent =
            "WE NEED TO TALK. 💀";

        resultMessage.textContent =
            "How did you manage to get a negative score?! I think you need a crash course on me. 😭";

    }

}


// =====================================================
// RESULT → LEVEL 2
// =====================================================

if (nextLevelBtn) {

    nextLevelBtn.addEventListener(
        "click",
        function () {

            // Hide result card
            if (resultCard) {

                resultCard.style.display =
                    "none";
            }

            // Hide reaction card
            if (answerReaction) {

                answerReaction.style.display =
                    "none";

                answerReaction.style.opacity =
                    "0";

                answerReaction.style.visibility =
                    "hidden";
            }

            // Show Level 2 jungle entrance
            if (level2Intro) {

                level2Intro.style.display =
                    "flex";

                level2Intro.style.opacity =
                    "1";

                level2Intro.style.visibility =
                    "visible";
            }

        }
    );
}

// =====================================================
// ENTER LEVEL 2
// =====================================================

// =====================================================
// ENTER LEVEL 2 → QUESTION 1
// =====================================================

if (enterLevel2) {

    enterLevel2.addEventListener(
        "click",
        function () {

            // Hide Level 2 jungle entrance
            if (level2Intro) {

                level2Intro.style.display =
                    "none";
            }


            // Show Level 2 Question 1
            if (level2Q1Card) {

                level2Q1Card.style.display =
                    "block";
            }


            // Reset calendar
            selectedDate =
                null;


            if (calendarSelected) {

                calendarSelected.textContent =
                    "Select a date 📅";

            }


            if (calendarSubmit) {

                calendarSubmit.disabled =
                    true;

            }


           // Start Level 2 Q1 from August 2026
calendarYear = 2026;
calendarMonthIndex = 7;

createMeetCalendar();

        }
    );

}

/// =====================================================
// NEXT QUESTION
// =====================================================

if (nextQuestionBtn) {

    nextQuestionBtn.addEventListener(
        "click",
        function () {

            // =========================================
            // IF QUESTION 5 IS FINISHED → SHOW RESULT
            // =========================================

            if (currentQuestion === 5) {

                showFinalResult();

                return;
            }


            // =========================================
            // HIDE REACTION SCREEN
            // =========================================

            answerReaction.style.display =
                "none";

            answerReaction.style.opacity =
                "0";

            answerReaction.style.visibility =
                "hidden";


            // =========================================
            // SHOW QUESTION CARD
            // =========================================

            level1Card.style.display =
                "block";


            // =========================================
            // MOVE TO NEXT QUESTION
            // =========================================

            currentQuestion++;


            // =========================================
            // QUESTION DATA
            // =========================================

            const questions = {

                2: {
                    text:
                        "What can make me happy quickly?",

                    images: [
                        "q2-chocolate.jpg",
                        "q2-hug.jpg",
                        "q2-music.jpg",
                        "q2-reading.jpg"
                    ]
                },

                3: {
                    text:
                        "I enter a shop with no plan. Where will I go?",

                    images: [
                        "q3-clothes.jpg",
                        "q3-accessories.jpg",
                        "q3-snacks.jpg",
                        "q3-books.jpg"
                    ]
                },

                4: {
                    text:
                        "Which room style will I choose?",

                    images: [
                        "q4-pink.jpg",
                        "q4-darkroom.jpg",
                        "q4-nature.jpg",
                        "q4-fairylights.jpg"
                    ]
                },

                5: {
                    text:
                        "Which weather do I like most?",

                    images: [
                        "q5-rain.jpg",
                        "q5-snow.jpg",
                        "q5-sunny.jpg",
                        "q5-cloudy.jpg"
                    ]
                }

            };


            // =========================================
            // GET CURRENT QUESTION
            // =========================================

            const question =
                questions[currentQuestion];


            if (!question) {

                return;

            }


            // =========================================
            // CHANGE QUESTION NUMBER
            // =========================================

            document.querySelector(
                "#currentQuestion"
            ).textContent =
                currentQuestion;


            // =========================================
            // CHANGE QUESTION TEXT
            // =========================================

            document.querySelector(
                "#level1Card .questionText"
            ).textContent =
                question.text;


            // =========================================
            // CHANGE OPTION IMAGES
            // =========================================

            q1Options.forEach(
                function (option, index) {

                    option.querySelector("img").src =
                        question.images[index];

                }
            );


            // =========================================
            // RESET OPTION LETTERS
            // =========================================

            q1Options[0].dataset.answer =
                "A";

            q1Options[1].dataset.answer =
                "B";

            q1Options[2].dataset.answer =
                "C";

            q1Options[3].dataset.answer =
                "D";


            // =========================================
            // RESET QUESTION STATE
            // =========================================

            q1Answered =
                false;

            q1SelectedAnswer =
                null;

            clearInterval(
                q1Timer
            );


            // =========================================
            // RESET TIMER
            // =========================================

            q1TimeLeft =
                10;

            timerCount.textContent =
                "10";


            // =========================================
            // RESET OPTIONS
            // =========================================

            q1Options.forEach(
                function (option) {

                    option.classList.remove(
                        "selected",
                        "correct",
                        "wrong"
                    );

                    option.style.pointerEvents =
                        "auto";

                }
            );


            // =========================================
            // RESET SUBMIT BUTTON
            // =========================================

            submitAnswer.style.display =
                "none";

            submitAnswer.disabled =
                true;


            // =========================================
            // HIDE OPTIONS INITIALLY
            // =========================================

            optionsGrid.style.display =
                "none";


            // =========================================
            // SHOW CHOOSE ANSWER BUTTON
            // =========================================

            showOptions.style.display =
                "inline-block";


            // =========================================
            // HIDE NEXT BUTTON
            // =========================================

            nextQuestionBtn.style.display =
                "none";


            // =========================================
            // REMOVE OPTION VISIBLE STATE
            // =========================================

            level1Card.classList.remove(
                "options-visible"
            );


            // =========================================
            // TIMER DOES NOT START YET
            // =========================================

            clearInterval(
                q1Timer
            );

        }
    );
}

// =====================================================
// LEVEL 2 — QUESTION 1
// FIRST MEET — CALENDAR
// =====================================================

const level2Q1Card =
    document.querySelector("#level2Q1Card");

const calendarDays =
    document.querySelector("#calendarDays");

const calendarMonth =
    document.querySelector("#calendarMonth");

const calendarSelected =
    document.querySelector("#calendarSelected");

const calendarSubmit =
    document.querySelector("#calendarSubmit");

const calendarPrev =
    document.querySelector("#calendarPrev");

const calendarNext =
    document.querySelector("#calendarNext");

const level2Q1Reaction =
    document.querySelector("#level2Q1Reaction");

const level2Q1ReactionText =
    document.querySelector("#level2Q1ReactionText");

const level2Q1TryAgain =
    document.querySelector("#level2Q1TryAgain");

const level2Q1Next =
    document.querySelector("#level2Q1Next");

// =====================================================
// LEVEL 2 — QUESTION 2
// FIRST KISS — CALENDAR
// =====================================================

const level2Q2Card =
    document.querySelector("#level2Q2Card");

const calendarQ2Days =
    document.querySelector("#calendarQ2Days");

const calendarQ2Month =
    document.querySelector("#calendarQ2Month");

const calendarQ2Selected =
    document.querySelector("#calendarQ2Selected");

const calendarQ2Submit =
    document.querySelector("#calendarQ2Submit");

const calendarQ2Prev =
    document.querySelector("#calendarQ2Prev");

const calendarQ2Next =
    document.querySelector("#calendarQ2Next");

const level2Q2Reaction =
    document.querySelector("#level2Q2Reaction");

const level2Q2ReactionText =
    document.querySelector("#level2Q2ReactionText");

const level2Q2TryAgain =
    document.querySelector("#level2Q2TryAgain");

const level2Q2Next =
    document.querySelector("#level2Q2Next");

// =====================================================
// Q2 CALENDAR VARIABLES
// =====================================================

let calendarQ2Year = 2026;

let calendarQ2MonthIndex = 7;
// 7 = August

let selectedQ2Date = null;


// Correct answer — First Kiss
const correctKissYear = 2025;
const correctKissMonth = 1;
// 1 = February

const correctKissDate = 23;

// =====================================================
// CALENDAR VARIABLES
// =====================================================

let calendarYear = 2026;

let calendarMonthIndex = 7;
// 7 = August

let selectedDate = null;


// Correct answer
const correctMeetYear = 2024;
const correctMeetMonth = 11;
const correctMeetDate = 2;


// =====================================================
// CREATE CALENDAR
// =====================================================

function createMeetCalendar() {

    if (!calendarDays) return;


    calendarDays.innerHTML = "";


    const firstDay =
        new Date(
            calendarYear,
            calendarMonthIndex,
            1
        ).getDay();


    const daysInMonth =
        new Date(
            calendarYear,
            calendarMonthIndex + 1,
            0
        ).getDate();


    const monthName =
        new Date(
            calendarYear,
            calendarMonthIndex
        ).toLocaleString(
            "default",
            {
                month: "long"
            }
        );


    if (calendarMonth) {

        calendarMonth.textContent =
            `${monthName} ${calendarYear}`;

    }


    // Empty spaces before first day

    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const empty =
            document.createElement("span");

        empty.className =
            "calendarEmpty";

        calendarDays.appendChild(
            empty
        );

    }


    // Create days

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const button =
            document.createElement("button");

        button.type =
            "button";

        button.className =
            "calendarDay";

        button.textContent =
            day;


        button.addEventListener(
            "click",
            function () {

                selectCalendarDate(
                    day
                );

            }
        );


        calendarDays.appendChild(
            button
        );

    }

}


// =====================================================
// SELECT DATE
// =====================================================

function selectCalendarDate(day) {

    selectedDate = {

        day: day,

        month: calendarMonthIndex,

        year: calendarYear

    };


    document
        .querySelectorAll(
            "#calendarDays .calendarDay"
        )
        .forEach(
            function (button) {

                button.classList.remove(
                    "selected"
                );

            }
        );


    const allDays =
        document.querySelectorAll(
            "#calendarDays .calendarDay"
        );


    allDays.forEach(
        function (button) {

            if (
                Number(button.textContent) ===
                day
            ) {

                button.classList.add(
                    "selected"
                );

            }

        }
    );


    if (calendarSelected) {

        const date =
            new Date(
                calendarYear,
                calendarMonthIndex,
                day
            );


        calendarSelected.textContent =
            `You selected: ${date.toLocaleDateString(
                "en-IN",
                {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            )}`;

    }


    if (calendarSubmit) {

        calendarSubmit.disabled =
            false;

    }

}


// =====================================================
// PREVIOUS MONTH
// =====================================================

if (calendarPrev) {

    calendarPrev.addEventListener(
        "click",
        function () {

            calendarMonthIndex--;

            if (calendarMonthIndex < 0) {

                calendarMonthIndex =
                    11;

                calendarYear--;

            }

            selectedDate =
                null;

            if (calendarSubmit) {

                calendarSubmit.disabled =
                    true;

            }

            if (calendarSelected) {

                calendarSelected.textContent =
                    "Select a date 📅";

            }

            createMeetCalendar();

        }
    );

}


// =====================================================
// NEXT MONTH
// =====================================================

if (calendarNext) {

    calendarNext.addEventListener(
        "click",
        function () {

            calendarMonthIndex++;

            if (calendarMonthIndex > 11) {

                calendarMonthIndex =
                    0;

                calendarYear++;

            }

            selectedDate =
                null;

            if (calendarSubmit) {

                calendarSubmit.disabled =
                    true;

            }

            if (calendarSelected) {

                calendarSelected.textContent =
                    "Select a date 📅";

            }

            createMeetCalendar();

        }
    );

}


// =====================================================
// CONFIRM DATE
// =====================================================

if (calendarSubmit) {

    calendarSubmit.addEventListener(
        "click",
        function () {

            if (!selectedDate) return;


            const isCorrect =

                selectedDate.day ===
                    correctMeetDate &&

                selectedDate.month ===
                    correctMeetMonth &&

                selectedDate.year ===
                    correctMeetYear;


            calendarSubmit.disabled =
                true;


            // Disable all calendar dates after confirmation
document
    .querySelectorAll("#calendarDays .calendarDay")
    .forEach(function (button) {

        button.disabled = true;
        button.style.pointerEvents = "none";

    });



            if (isCorrect) {

                showLevel2Q1Correct();

            }

            else {

                showLevel2Q1Wrong();

            }

        }
    );

}


// =====================================================
// CORRECT ANSWER
// =====================================================

function showLevel2Q1Correct() {

    if (!level2Q1Reaction) return;


    level2Q1Reaction.style.display =
        "block";


    if (level2Q1ReactionText) {

        level2Q1ReactionText.innerHTML = `

            <div class="level2CorrectReaction">

                <div class="level2ReactionAnimal">
                    🐒🌿
                </div>

                <h3>
                    You remembered! 🥹🩶
                </h3>

                <p>
                    2nd December 2024...
                    the day we first met in Ahmedabad. 📅✨
                </p>

            </div>

        `;

    }


    if (level2Q1TryAgain) {

        level2Q1TryAgain.style.display =
            "none";

    }


    if (level2Q1Next) {

        level2Q1Next.style.display =
            "inline-block";

    }

}


// =====================================================
// WRONG ANSWER
// =====================================================

function showLevel2Q1Wrong() {

    if (!level2Q1Reaction) return;


    level2Q1Reaction.style.display =
        "block";


    if (level2Q1ReactionText) {

        level2Q1ReactionText.innerHTML = `

            <div class="level2WrongReaction">

                <div class="level2ReactionAnimal">
                    🐾👀
                </div>

                <h3>
                    Hmm... not quite! 🌿
                </h3>

                <p>
                    That's not the date I'm looking for...
                </p>

                <p>
                    But don't worry,
                    you can try again or move on. 🦋
                </p>

            </div>

        `;

    }


    if (level2Q1TryAgain) {

        level2Q1TryAgain.style.display =
            "inline-block";

    }


    if (level2Q1Next) {

        level2Q1Next.style.display =
            "inline-block";

    }

}


// =====================================================
// TRY AGAIN
// =====================================================

if (level2Q1TryAgain) {

    level2Q1TryAgain.addEventListener(
        "click",
        function () {

            selectedDate =
                null;


            if (level2Q1Reaction) {

                level2Q1Reaction.style.display =
                    "none";

            }


            if (calendarSelected) {

                calendarSelected.textContent =
                    "Select a date 📅";

            }


            if (calendarSubmit) {

    calendarSubmit.disabled = true;

}

document
    .querySelectorAll("#calendarDays .calendarDay")
    .forEach(function (button) {

        button.disabled = false;
        button.style.pointerEvents = "auto";

    });


            createMeetCalendar();

        }
    );

}


// =====================================================
// LEVEL 2 Q1 → Q2
// =====================================================

if (level2Q1Next) {

    level2Q1Next.addEventListener(
        "click",
        function () {

            // Hide Question 1
            if (level2Q1Card) {
                level2Q1Card.style.display = "none";
            }

            // Show Question 2
            if (level2Q2Card) {
                level2Q2Card.style.display = "block";
            }

            // Reset Q2 reaction area
if (level2Q2Reaction) {
    level2Q2Reaction.style.display = "none";
}



if (level2Q2Next) {
    level2Q2Next.style.display = "none";
}

            // Apply Level 2 jungle theme
document.body.classList.add("level2-jungle");

            // Reset Q2 calendar
            selectedQ2Date = null;

            if (calendarQ2Selected) {
                calendarQ2Selected.textContent =
                    "Select a date 📅";
            }

            if (calendarQ2Submit) {
                calendarQ2Submit.disabled = true;
            }

            // Start Q2 at August 2026
            calendarQ2Year = 2026;
            calendarQ2MonthIndex = 7;

            createFirstKissCalendar();

        }
    );

}

// =====================================================
// INITIALIZE CALENDAR
// =====================================================

// Calendar will start when Level 2 Question 1 opens.

// =====================================================
// RESULT CARD → LEVEL 2
// =====================================================

const nextLevelButton =
    document.querySelector("#nextLevelButton");

if (nextLevelButton) {

    nextLevelButton.addEventListener(
        "click",
        function () {

            // Hide result
            if (resultCard) {
                resultCard.style.display = "none";
            }

            // Show Level 2 entrance
            if (level2Intro) {
                level2Intro.style.display = "flex";
                level2Intro.style.opacity = "1";
                level2Intro.style.visibility = "visible";
            }

        }
    );

}

// =====================================================
// LEVEL 2 — QUESTION 2 CALENDAR
// FIRST KISS
// =====================================================

function createFirstKissCalendar() {

    if (!calendarQ2Days) return;

    calendarQ2Days.innerHTML = "";

    const firstDay =
        new Date(
            calendarQ2Year,
            calendarQ2MonthIndex,
            1
        ).getDay();

    const daysInMonth =
        new Date(
            calendarQ2Year,
            calendarQ2MonthIndex + 1,
            0
        ).getDate();

    const monthName =
        new Date(
            calendarQ2Year,
            calendarQ2MonthIndex
        ).toLocaleString(
            "default",
            {
                month: "long"
            }
        );

    if (calendarQ2Month) {

        calendarQ2Month.textContent =
            `${monthName} ${calendarQ2Year}`;

    }


    // Empty spaces before first day

    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const empty =
            document.createElement("span");

        empty.className =
            "calendarEmpty";

        calendarQ2Days.appendChild(
            empty
        );

    }


    // Create dates

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const button =
            document.createElement("button");

        button.type =
            "button";

        button.className =
            "calendarDay";

        button.textContent =
            day;


        button.addEventListener(
            "click",
            function () {

                selectQ2Date(day);

            }
        );


        calendarQ2Days.appendChild(
            button
        );

    }

}

// =====================================================
// Q2 — SELECT DATE
// =====================================================

function selectQ2Date(day) {

    selectedQ2Date = {
        day: day,
        month: calendarQ2MonthIndex,
        year: calendarQ2Year
    };


    // Remove previous selection

    document
        .querySelectorAll("#calendarQ2Days .calendarDay")
        .forEach(function (button) {

            button.classList.remove("selected");

        });


    // Highlight selected date

    const allDays =
        document.querySelectorAll(
            "#calendarQ2Days .calendarDay"
        );

    allDays.forEach(function (button) {

        if (
            Number(button.textContent) === day
        ) {

            button.classList.add("selected");

        }

    });


    // Show selected date

    if (calendarQ2Selected) {

        const date =
            new Date(
                calendarQ2Year,
                calendarQ2MonthIndex,
                day
            );

        calendarQ2Selected.textContent =
            `You selected: ${date.toLocaleDateString(
                "en-IN",
                {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            )}`;

    }


    // Enable Confirm Date

    if (calendarQ2Submit) {

        calendarQ2Submit.disabled =
            false;

    }

}

// =====================================================
// Q2 — PREVIOUS MONTH
// =====================================================

if (calendarQ2Prev) {

    calendarQ2Prev.addEventListener(
        "click",
        function () {

            calendarQ2MonthIndex--;

            if (calendarQ2MonthIndex < 0) {

                calendarQ2MonthIndex = 11;
                calendarQ2Year--;

            }

            selectedQ2Date = null;

            if (calendarQ2Submit) {
                calendarQ2Submit.disabled = true;
            }

            if (calendarQ2Selected) {
                calendarQ2Selected.textContent =
                    "Select a date 📅";
            }

            createFirstKissCalendar();

        }
    );

}


// =====================================================
// Q2 — NEXT MONTH
// =====================================================

if (calendarQ2Next) {

    calendarQ2Next.addEventListener(
        "click",
        function () {

            calendarQ2MonthIndex++;

            if (calendarQ2MonthIndex > 11) {

                calendarQ2MonthIndex = 0;
                calendarQ2Year++;

            }

            selectedQ2Date = null;

            if (calendarQ2Submit) {
                calendarQ2Submit.disabled = true;
            }

            if (calendarQ2Selected) {
                calendarQ2Selected.textContent =
                    "Select a date 📅";
            }

            createFirstKissCalendar();

        }
    );

}

// =====================================================
// Q2 — CONFIRM DATE
// =====================================================

if (calendarQ2Submit) {

    calendarQ2Submit.addEventListener(
        "click",
        function () {

            if (!selectedQ2Date) return;


            const isCorrect =
                selectedQ2Date.day === correctKissDate &&
                selectedQ2Date.month === correctKissMonth &&
                selectedQ2Date.year === correctKissYear;


            // Disable confirm button

            calendarQ2Submit.disabled = true;


            // Disable all dates after confirmation

            document
                .querySelectorAll(
                    "#calendarQ2Days .calendarDay"
                )
                .forEach(function (button) {

                    button.disabled = true;
                    button.style.pointerEvents = "none";

                });


            if (isCorrect) {

                showLevel2Q2Correct();

            }

            else {

                showLevel2Q2Wrong();

            }

        }
    );

}

// =====================================================
// Q2 — CORRECT ANSWER
// =====================================================

function showLevel2Q2Correct() {

    if (!level2Q2Reaction) return;

    level2Q2Reaction.style.display = "block";

    if (level2Q2ReactionText) {
        level2Q2ReactionText.innerHTML = `
            <div class="level2CorrectReaction">

                <div class="level2ReactionAnimal">
                    🐒🌿
                </div>

                <h3>
                    YOU REMEMBERED! 😭💋
                </h3>

                <p>
                    23rd February 2025...
                    the day of our first kiss. 🥹✨
                </p>

            </div>
        `;
    }

    /* SHOW BOTH BUTTONS */

    if (level2Q2TryAgain) {
        level2Q2TryAgain.style.display = "inline-block";
    }

    if (level2Q2Next) {
        level2Q2Next.style.display = "inline-block";
    }

}

// =====================================================
// Q2 — WRONG ANSWER
// =====================================================

function showLevel2Q2Wrong() {

    if (!level2Q2Reaction) return;

    level2Q2Reaction.style.display = "block";

    if (level2Q2ReactionText) {
        level2Q2ReactionText.innerHTML = `
            <div class="level2WrongReaction">

                <div class="level2ReactionAnimal">
                    🐾👀
                </div>

                <h3>
                    Hmm... NOT QUITE! 🌿
                </h3>

                <p>
                    That's not the date I'm looking for...
                </p>

                <p>
                    Think again... you might remember it. 💋
                </p>

            </div>
        `;
    }

    /* SHOW BOTH BUTTONS */

    if (level2Q2TryAgain) {
        level2Q2TryAgain.style.display = "inline-block";
    }

    if (level2Q2Next) {
        level2Q2Next.style.display = "inline-block";
    }

}

// =====================================================
// Q2 — TRY AGAIN
// =====================================================

if (level2Q2TryAgain) {

    level2Q2TryAgain.addEventListener(
        "click",
        function () {

            selectedQ2Date = null;

            // Hide reaction
            if (level2Q2Reaction) {
                level2Q2Reaction.style.display = "none";
            }

            // Reset selected date text
            if (calendarQ2Selected) {
                calendarQ2Selected.textContent =
                    "Select a date 📅";
            }

            // Disable confirm until a new date is selected
            if (calendarQ2Submit) {
                calendarQ2Submit.disabled = true;
            }

            // Re-enable all calendar dates
            document
                .querySelectorAll(
                    "#calendarQ2Days .calendarDay"
                )
                .forEach(function (button) {

                    button.disabled = false;
                    button.style.pointerEvents = "auto";
                    button.classList.remove("selected");

                });

            // Hide buttons again
            level2Q2TryAgain.style.display = "none";

            if (level2Q2Next) {
                level2Q2Next.style.display = "none";
            }

        }
    );

}

// =====================================================
// LEVEL 2 Q2 → Q3
// =====================================================

if (level2Q2Next) {

    level2Q2Next.addEventListener(
        "click",
        function () {

            // Hide Q2
            if (level2Q2Card) {
                level2Q2Card.style.display = "none";
            }

            // Hide Q2 reaction
            if (level2Q2Reaction) {
                level2Q2Reaction.style.display = "none";
            }

            // Hide Q2 buttons
            if (level2Q2TryAgain) {
                level2Q2TryAgain.style.display = "none";
            }

            if (level2Q2Next) {
                level2Q2Next.style.display = "none";
            }

            // Show Q3
            if (level2Q3Card) {
                level2Q3Card.style.display = "block";
            }

            // Reset Q3
            if (level2Q3Answer) {
                level2Q3Answer.value = "";
            }

            if (q3CharCount) {
                q3CharCount.textContent = "0";
            }

            if (level2Q3Submit) {
                level2Q3Submit.disabled = true;
            }

            if (level2Q3Reaction) {
                level2Q3Reaction.style.display = "none";
            }

            if (level2Q3Next) {
                level2Q3Next.style.display = "none";
            }

        }
    );

}


// =====================================================
// LEVEL 2 Q3 — TEXTBOX INPUT
// =====================================================

if (level2Q3Answer) {

    level2Q3Answer.addEventListener(
        "input",
        function () {

            const answer =
                level2Q3Answer.value.trim();

            // Update character count
            if (q3CharCount) {

                q3CharCount.textContent =
                    level2Q3Answer.value.length;

            }

            // Enable submit with even ONE character
            if (level2Q3Submit) {

                level2Q3Submit.disabled =
                    answer.length === 0;

            }

        }
    );

}

// =====================================================
// LEVEL 2 Q3 — SUBMIT ANSWER
// =====================================================

if (level2Q3Submit) {

    level2Q3Submit.addEventListener(
        "click",
        function () {

            const answer =
                level2Q3Answer.value.trim();

            if (!answer) return;

            level2Q3Answer.disabled =
                true;

            level2Q3Submit.disabled =
                true;

            if (level2Q3Reaction) {

                level2Q3Reaction.style.display =
                    "block";

            }

            if (level2Q3ReactionText) {

                level2Q3ReactionText.innerHTML = `

                    <div class="level2CorrectReaction">

                        <div class="level2ReactionAnimal">
                            👀🌿
                        </div>

                        <h3>
                            Hmm... interesting... 👀
                        </h3>

                        <p>
                            So THAT'S what you noticed about me first? 😭
                        </p>

                        <p>
                            I wasn't expecting that answer... 🌿✨
                        </p>

                    </div>

                `;

            }

            if (level2Q3Next) {

                level2Q3Next.style.display =
                    "inline-block";

            }

        }
    );

}

/* =====================================================
   FORCE FIX — LEVEL 2 QUESTION 2 BUTTONS
   ===================================================== */

document.addEventListener("click", function (e) {

    if (e.target && e.target.id === "calendarQ2Submit") {

        setTimeout(function () {

            const reaction =
                document.getElementById("level2Q2Reaction");

            const tryAgain =
                document.getElementById("level2Q2TryAgain");

            const next =
                document.getElementById("level2Q2Next");

            if (reaction) {
                reaction.style.display = "block";
                reaction.style.visibility = "visible";
                reaction.style.opacity = "1";
            }

            if (tryAgain) {
                tryAgain.style.display = "inline-block";
                tryAgain.style.visibility = "visible";
                tryAgain.style.opacity = "1";
            }

            if (next) {
                next.style.display = "inline-block";
                next.style.visibility = "visible";
                next.style.opacity = "1";
            }

        }, 100);

    }

});

// =====================================================
// LEVEL 2 — QUESTION 3
// FIRST IMPRESSION — TEXT ANSWER
// =====================================================

const level2Q3Card =
    document.querySelector("#level2Q3Card");

const level2Q3Answer =
    document.querySelector("#level2Q3Answer");

const q3CharCount =
    document.querySelector("#q3CharCount");

const level2Q3Submit =
    document.querySelector("#level2Q3Submit");

const level2Q3Reaction =
    document.querySelector("#level2Q3Reaction");

const level2Q3ReactionText =
    document.querySelector("#level2Q3ReactionText");

const level2Q3Next =
    document.querySelector("#level2Q3Next");

// =====================================================
// LEVEL 2 — QUESTION 4
// WHAT WOULD YOU MISS MOST?
// =====================================================

const level2Q4Card =
    document.querySelector("#level2Q4Card");

const q4Answer =
    document.querySelector("#q4Answer");

const q4CharacterCount =
    document.querySelector("#q4CharacterCount");

const q4Submit =
    document.querySelector("#q4Submit");