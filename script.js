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

const memoryVideo =
    document.querySelector("#memoryVideo");


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
                "Ohhoo... bau utaval... 😂";

            curiousLine.style.display =
                "none";

            introText.style.display =
                "none";

            enterButton.textContent =
                "Continue →";

            next.innerHTML = `
                <p>
                    Haji to bau 6 betuuu... but you'll have to find it...🧐😝
                </p>
            `;

            enterButton.onclick =
                function secondClick() {

                    changeBackground(
                        "chapter-three"
                    );

                    heading.textContent =
                        "He hee heee... Ni Revatu ne...😍😉";

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
                                    One last click......
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

            if (loveSong) {

                loveSong.volume =
                    0;

                loveSong.currentTime =
                    0;
            }

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

const level3Button = document.querySelector("#level3Button");
const level3Intro = document.querySelector("#level3Intro");

const level3Password = document.querySelector("#level3Password");
const level3UnlockButton = document.querySelector("#level3UnlockButton");
const level3PasswordMessage = document.querySelector("#level3PasswordMessage");
const level3Surprise = document.querySelector("#level3Surprise");
const level3SurpriseButton =
    document.querySelector("#level3SurpriseButton");

    if (level3SurpriseButton) {

    level3SurpriseButton.addEventListener(
        "click",
        function () {

            level3Surprise.style.display = "none";

            level3VideoScreen.style.display = "flex";
            level3VideoScreen.style.opacity = "1";
            level3VideoScreen.style.visibility = "visible";

            level3MemoryVideo.play();

        }
    );
}

const level3VideoScreen =
    document.querySelector("#level3VideoScreen");

const level3MemoryVideo =
    document.querySelector("#level3MemoryVideo");

const level3VideoNext =
    document.querySelector("#level3VideoNext");

   if (level3MemoryVideo && loveSong) {

    level3MemoryVideo.addEventListener(
        "play",
        function () {
            loveSong.pause();
        }
    );

    level3MemoryVideo.addEventListener(
        "pause",
        function () {
            loveSong.play();
        }
    );

    level3MemoryVideo.addEventListener(
        "ended",
        function () {
            loveSong.play();

            level3VideoNext.style.display = "block";
        }
    );
}

const level3Letter =
    document.querySelector("#level3Letter");

const level3LetterNext =
    document.querySelector("#level3LetterNext");

const level3Promise =
    document.querySelector("#level3Promise");

const level3PromiseInput =
    document.querySelector("#level3PromiseInput");

const level3PromiseButton =
    document.querySelector("#level3PromiseButton");

level3PromiseButton.disabled = true;

level3PromiseInput.addEventListener("input", function () {
    level3PromiseButton.disabled = level3PromiseInput.value.trim() === "";
});

const level3Ending =
    document.querySelector("#level3Ending");

const goToLevel3Button =
    document.querySelector("#goToLevel3Button");

    if (goToLevel3Button) {

    goToLevel3Button.addEventListener(
        "click",
        function () {

            level2Intro.style.display = "none";
level2Q1Card.style.display = "none";
level2Q2Card.style.display = "none";
level2Q3Card.style.display = "none";
level2Q4Card.style.display = "none";
level2Q5Card.style.display = "none";

            if (levelSelect) {
                levelSelect.style.display = "none";
            }

            level3Intro.style.display = "flex";
            level3Intro.style.opacity = "1";
            level3Intro.style.visibility = "visible";

        }
    );
}

    if (level3PromiseButton) {
    level3PromiseButton.addEventListener(
        "click",
        function () {

            const promiseText =
                level3PromiseInput.value.trim();

                if (promiseText === "") {
    return;
}

           savedAnswers.promise = promiseText;

sendAnswersToGoogleSheet(savedAnswers);

            level3Promise.style.display = "none";
            level3Ending.style.display = "flex";
            level3Ending.style.opacity = "1";
            level3Ending.style.visibility = "visible";
        }
    );
}
    if (level3LetterNext) {

    level3LetterNext.addEventListener(
        "click",
        function () {

            level3Letter.style.display = "none";

            level3Promise.style.display = "flex";
            level3Promise.style.opacity = "1";
            level3Promise.style.visibility = "visible";

        }
    );
}

    if (level3VideoNext) {

    level3VideoNext.addEventListener(
        "click",
        function () {

            level3VideoScreen.style.display = "none";

            level3Letter.style.display = "flex";
            level3Letter.style.opacity = "1";
            level3Letter.style.visibility = "visible";

        }
    );
}

const LEVEL3_SECRET_PASSWORD = "Mishu2427";

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
// LEVEL 2 ELEMENTS
// =====================================================

// Q1

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


// Q2

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


// Q3

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


// Q4

const level2Q4Card =
    document.querySelector("#level2Q4Card");

const q4Answer =
    document.querySelector("#level2Q4Answer");

const q4CharacterCount =
    document.querySelector("#q4CharCount");

const q4Submit =
    document.querySelector("#level2Q4Submit");

const level2Q4Reaction =
    document.querySelector("#level2Q4Reaction");

const level2Q4ReactionText =
    document.querySelector("#level2Q4ReactionText");

const level2Q4Next =
    document.querySelector("#level2Q4Next");


// Q5

const level2Q5Card =
    document.querySelector("#level2Q5Card");

const q5MeButton =
    document.querySelector("#q5MeButton");

const q5GobarButton =
    document.querySelector("#q5GobarButton");

const q5WrongReaction =
    document.querySelector("#q5WrongReaction");

const q5SecondQuestion =
    document.querySelector("#q5SecondQuestion");

const q5YesButton =
    document.querySelector("#q5YesButton");

const q5NoButton =
    document.querySelector("#q5NoButton");

const q5YesNoArea =
    document.querySelector("#q5YesNoArea");

const q5FinalSurprise =
    document.querySelector("#q5FinalSurprise");


// =====================================================
// Q1 VARIABLES
// =====================================================

let q1Timer =
    null;

let q1TimeLeft =
    20;

let q1Answered =
    false;

let q1SelectedAnswer =
    null;

let currentQuestion =
    1;

let score =
    0;

// =====================================================
// SAVE ALL ANSWERS
// =====================================================

let savedAnswers = {
    l1q1: "",
    l1q2: "",
    l1q3: "",
    l1q4: "",
    l1q5: "",

    l2q1: "",
    l2q2: "",
    l2q3: "",
    l2q4: "",
    l2q5: "",

    finalScore: "",
    promise:"",
    passwordAttempts: ""
};


// =====================================================
// LEVEL 2 Q1 VARIABLES
// =====================================================

let calendarYear =
    2026;

let calendarMonthIndex =
    7;

let selectedDate =
    null;

const correctMeetYear =
    2024;

const correctMeetMonth =
    11;

const correctMeetDate =
    2;


// =====================================================
// LEVEL 2 Q2 VARIABLES
// =====================================================

let calendarQ2Year =
    2026;

let calendarQ2MonthIndex =
    7;

let selectedQ2Date =
    null;

const correctKissYear =
    2025;

const correctKissMonth =
    1;

const correctKissDate =
    23;


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
                document.querySelector(".gameCard");

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

            currentQuestion =
                1;

            score =
                0;

                savedAnswers = {
    l1q1: "",
    l1q2: "",
    l1q3: "",
    l1q4: "",
    l1q5: "",
    l2q1: "",
    l2q2: "",
    l2q3: "",
    l2q4: "",
    l2q5: ""
};
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

            if (optionsGrid) {

                optionsGrid.style.display =
                    "";
            }

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
        20;

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

            savedAnswers["l1q" + currentQuestion] =
                q1SelectedAnswer.dataset.answer;

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


    if (level1Card) {

        level1Card.style.display =
            "none";
    }


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


    answerReaction.style.display =
        "block";

    answerReaction.style.visibility =
        "visible";

    answerReaction.style.opacity =
        "1";

    answerReaction.className =
        "reactionActive";


    if (nextQuestionBtn) {

        nextQuestionBtn.style.display =
            "none";
    }


    if (reactionText) {

        reactionText.innerHTML = `

            <div class="judgingDots">
                Judging your answer...
            </div>

        `;
    }


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
// CORRECT REACTION
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
                    😛 Aaye Haaye—
                </h3>

                <p>
                    Olkhey mne M ne..!!🥹
                </p>

                <p>
                    +10 point for you 😌✨
                </p>

            </div>

        `;
    }
}


// =====================================================
// WRONG REACTION
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
                schi piyu me aa choose kris eevu lagyu..?!😑
                </p>

                <p>
                    You need to know me better, mister. 🙄
                </p>

            </div>

        `;
    }
}


// =====================================================
// MISSED REACTION
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
                    Aree Aatli vaar lagey choose krta piyu..😑
                </p>

            </div>

        `;
    }
}


// =====================================================
// NEXT QUESTION — LEVEL 1
// =====================================================

if (nextQuestionBtn) {

    nextQuestionBtn.addEventListener(
        "click",
        function () {

            if (currentQuestion === 5) {

                showFinalResult();

                return;
            }


            if (answerReaction) {

                answerReaction.style.display =
                    "none";

                answerReaction.style.opacity =
                    "0";

                answerReaction.style.visibility =
                    "hidden";
            }


            if (level1Card) {

                level1Card.style.display =
                    "block";
            }


            currentQuestion++;


            const questions = {

                2: {
                    text:
                        "Konsi chij muje jaldi khush karegi...?",

                    images: [
                        "q2-chocolate.jpg",
                        "q2-hug.jpg",
                        "q2-music.jpg",
                        "q2-reading.jpg"
                    ]
                },

                3: {
                    text:
                        "Me Mall me jakar sabse pehle kya kharidugi...?",

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
                        "Which Mausam do I like most?",

                    images: [
                        "q5-rain.jpg",
                        "q5-snow.jpg",
                        "q5-sunny.jpg",
                        "q5-cloudy.jpg"
                    ]
                }

            };


            const question =
                questions[currentQuestion];

            if (!question) return;


            const questionNumber =
                document.querySelector(
                    "#currentQuestion"
                );

            if (questionNumber) {

                questionNumber.textContent =
                    currentQuestion;
            }


            const questionText =
                document.querySelector(
                    "#level1Card .questionText"
                );

            if (questionText) {

                questionText.textContent =
                    question.text;
            }


            q1Options.forEach(
                function (option, index) {

                    const image =
                        option.querySelector("img");

                    if (image) {

                        image.src =
                            question.images[index];
                    }

                }
            );


            q1Options[0].dataset.answer =
                "A";

            q1Options[1].dataset.answer =
                "B";

            q1Options[2].dataset.answer =
                "C";

            q1Options[3].dataset.answer =
                "D";


            q1Answered =
                false;

            q1SelectedAnswer =
                null;

            clearInterval(
                q1Timer
            );


            q1TimeLeft =
                20;

            if (timerCount) {

                timerCount.textContent =
                    "20";
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

                submitAnswer.style.display =
                    "none";

                submitAnswer.disabled =
                    true;
            }


            if (optionsGrid) {

                optionsGrid.style.display =
                    "none";
            }


            if (showOptions) {

                showOptions.style.display =
                    "inline-block";
            }


            nextQuestionBtn.style.display =
                "none";


            level1Card.classList.remove(
                "options-visible"
            );

        }
    );
}


// =====================================================
// SHOW FINAL RESULT
// =====================================================

function showFinalResult() {

    if (!resultCard) return;


    if (answerReaction) {

        answerReaction.style.display =
            "none";

        answerReaction.style.opacity =
            "0";

        answerReaction.style.visibility =
            "hidden";
    }


    if (level1Card) {

        level1Card.style.display =
            "none";
    }


    resultCard.style.display =
        "block";


    if (finalScore) {

        finalScore.textContent =
            score;
    }


    let percentage =
        Math.round(
            (score / 50) * 100
        );


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


    if (score >= 40) {

        resultTitle.textContent =
            "Aaye haaye haaye haaye...💖";

        resultMessage.textContent =
            "Tu aatlu bdhu Olkhey mne...schii baauj baauj baauj saaru laagyu piyu...😭✨";

    }

    else if (score >= 25) {

        resultTitle.textContent =
            "Brbr...olkhey mane M ne..🥹";

        resultMessage.textContent =
            "Chalo thik 6...Me Vicharelu eni krta to vadhar olkhey Mane...😁";

    }

    else if (score >= 10) {

        resultTitle.textContent =
            "Bau ochha Marks ha piyuu...😏";

        resultMessage.textContent =
            "Seriously aatlu jode raine B tane ni khbr mari psnd na psnd...☹️";

    }

    else if (score >= 0) {

        resultTitle.textContent =
            "piyu..tu olkhe B 6 mane..? 😭";

        resultMessage.textContent =
            " Bauuj Bauuj ochha maarks kevay ha piyu...sav aatla pan😑..aanthi vadhar to koi random b lai dese 😭";

    }

    else {

        resultTitle.textContent =
            "piyu..tu olkhe B 6 mane..? 😭";

        resultMessage.textContent =
            " Bauuj Bauuj ochha maarks kevay ha piyu...sav aatla pan😑..aanthi vadhar to koi random b lai dese 😭";

    }
sendAnswersToGoogleSheet({
    ...savedAnswers,
    finalScore: score
});
}



// =====================================================
// RESULT → LEVEL 2
// =====================================================

if (nextLevelBtn) {

    nextLevelBtn.addEventListener(
        "click",
        function () {

            if (resultCard) {

                resultCard.style.display =
                    "none";
            }


            if (answerReaction) {

                answerReaction.style.display =
                    "none";

                answerReaction.style.opacity =
                    "0";

                answerReaction.style.visibility =
                    "hidden";
            }


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

if (level3Button && level3Intro) {

    level3Button.addEventListener(
        "click",
        function () {

            if (levelSelect) {
                levelSelect.style.display = "none";
            }

            level3Intro.style.display = "flex";
            level3Intro.style.opacity = "1";
            level3Intro.style.visibility = "visible";

        }
    );
}

if (level3UnlockButton) {

    level3UnlockButton.addEventListener(
        "click",
        function () {

            const enteredPassword = level3Password.value;

savedAnswers.passwordAttempts +=
    (savedAnswers.passwordAttempts ? " | " : "") +
    enteredPassword;

            if (level3Password.value === LEVEL3_SECRET_PASSWORD) {

                level3PasswordMessage.textContent =
    "Unlocked ✨";

    const floatingMemories =
    document.querySelector("#level3FloatingMemories");

if (floatingMemories) {
    floatingMemories.style.display = "block";
}

level3Intro.style.display = "none";

level3Surprise.style.display = "flex";
level3Surprise.style.opacity = "1";
level3Surprise.style.visibility = "visible";

const heartFireworks =
    document.querySelector("#heartFireworks");

if (heartFireworks) {

    function createHeartBurst() {

        heartFireworks.innerHTML = "";

        for (let i = 0; i < 160; i++) {

            const particle =
                document.createElement("span");

            particle.className = "heartSpark";

            const t =
                (Math.PI * 2 * i) / 160;

            const x =
                16 * Math.pow(Math.sin(t), 3);

            const y =
                -(13 * Math.cos(t)
                - 5 * Math.cos(2 * t)
                - 2 * Math.cos(3 * t)
                - Math.cos(4 * t));

            const size = 16;

            particle.style.setProperty(
                "--x",
                `${x * size}px`
            );

            particle.style.setProperty(
                "--y",
                `${y * size}px`
            );

            heartFireworks.appendChild(particle);
        }
    }

    createHeartBurst();

    const fireworkInterval =
        setInterval(function () {
            createHeartBurst();
        }, 900);
    }
    

            } else {

                level3PasswordMessage.textContent =
                    "That's not the secret password... 💭";

                level3Password.value = "";
            }

        }
    );
}


// =====================================================
// ENTER LEVEL 2 → QUESTION 1
// =====================================================

if (enterLevel2) {

    enterLevel2.addEventListener(
        "click",
        function () {

            if (level2Intro) {

                level2Intro.style.display =
                    "none";
            }


            if (level2Q1Card) {

                level2Q1Card.style.display =
                    "block";
            }


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


            calendarYear =
                2026;

            calendarMonthIndex =
                7;


            createMeetCalendar();

        }
    );

}


// =====================================================
// CREATE Q1 CALENDAR
// =====================================================

function createMeetCalendar() {

    if (!calendarDays) return;


    calendarDays.innerHTML =
        "";


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
// SELECT Q1 DATE
// =====================================================

function selectCalendarDate(day) {

    selectedDate = {

        day:
            day,

        month:
            calendarMonthIndex,

        year:
            calendarYear

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
// Q1 PREVIOUS MONTH
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
// Q1 NEXT MONTH
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
// Q1 CONFIRM DATE
// =====================================================

if (calendarSubmit) {

    calendarSubmit.addEventListener(
        "click",
        function () {

            if (!selectedDate) return;


            const attemptedDate =
            new Date(
                selectedDate.year,
                selectedDate.month,
                selectedDate.day
            ).toLocaleDateString(
                "en-IN",
                {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
           );

            if (savedAnswers.l2q1 === "") {
                savedAnswers.l2q1 = attemptedDate;
            } else {
                savedAnswers.l2q1 += " | " + attemptedDate;
            }

            const isCorrect =

                selectedDate.day ===
                    correctMeetDate &&

                selectedDate.month ===
                    correctMeetMonth &&

                selectedDate.year ===
                    correctMeetYear;


            calendarSubmit.disabled =
                true;


            document
                .querySelectorAll(
                    "#calendarDays .calendarDay"
                )
                .forEach(
                    function (button) {

                        button.disabled =
                            true;

                        button.style.pointerEvents =
                            "none";

                    }
                );


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
// Q1 CORRECT
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
// Q1 WRONG
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
                    Ann... nai betuuu!! 🐷🌿
                </h3>

                <p>
                    Y to galat Answer h...🥹🤍
                </p>

                <p>
                    But don't worry,
                    tum ek or try kr sktey ho..😀 ya fir next question krke next par chala ja..🤌🥹
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
// Q1 TRY AGAIN
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

                calendarSubmit.disabled =
                    true;
            }


            document
                .querySelectorAll(
                    "#calendarDays .calendarDay"
                )
                .forEach(
                    function (button) {

                        button.disabled =
                            false;

                        button.style.pointerEvents =
                            "auto";

                        button.classList.remove(
                            "selected"
                        );

                    }
                );


            createMeetCalendar();

        }
    );

}


// =====================================================
// Q1 → Q2
// =====================================================

if (level2Q1Next) {

    level2Q1Next.addEventListener(
        "click",
        function () {

            if (level2Q1Card) {

                level2Q1Card.style.display =
                    "none";
            }


            if (level2Q1Reaction) {

                level2Q1Reaction.style.display =
                    "none";
            }


            if (level2Q2Card) {

                level2Q2Card.style.display =
                    "block";
            }


            if (level2Q2Reaction) {

                level2Q2Reaction.style.display =
                    "none";
            }


            if (level2Q2TryAgain) {

                level2Q2TryAgain.style.display =
                    "none";
            }


            if (level2Q2Next) {

                level2Q2Next.style.display =
                    "none";
            }


            document.body.classList.add(
                "level2-jungle"
            );


            selectedQ2Date =
                null;


            if (calendarQ2Selected) {

                calendarQ2Selected.textContent =
                    "Select a date 📅";
            }


            if (calendarQ2Submit) {

                calendarQ2Submit.disabled =
                    true;
            }


            calendarQ2Year =
                2026;

            calendarQ2MonthIndex =
                7;


            createFirstKissCalendar();

        }
    );

}


// =====================================================
// Q2 CREATE CALENDAR
// =====================================================

function createFirstKissCalendar() {

    if (!calendarQ2Days) return;


    calendarQ2Days.innerHTML =
        "";


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
// Q2 SELECT DATE
// =====================================================

function selectQ2Date(day) {

    selectedQ2Date = {

        day:
            day,

        month:
            calendarQ2MonthIndex,

        year:
            calendarQ2Year

    };


    document
        .querySelectorAll(
            "#calendarQ2Days .calendarDay"
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
            "#calendarQ2Days .calendarDay"
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


    if (calendarQ2Submit) {

        calendarQ2Submit.disabled =
            false;
    }

}


// =====================================================
// Q2 PREVIOUS MONTH
// =====================================================

if (calendarQ2Prev) {

    calendarQ2Prev.addEventListener(
        "click",
        function () {

            calendarQ2MonthIndex--;


            if (calendarQ2MonthIndex < 0) {

                calendarQ2MonthIndex =
                    11;

                calendarQ2Year--;
            }


            selectedQ2Date =
                null;


            if (calendarQ2Submit) {

                calendarQ2Submit.disabled =
                    true;
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
// Q2 NEXT MONTH
// =====================================================

if (calendarQ2Next) {

    calendarQ2Next.addEventListener(
        "click",
        function () {

            calendarQ2MonthIndex++;


            if (calendarQ2MonthIndex > 11) {

                calendarQ2MonthIndex =
                    0;

                calendarQ2Year++;
            }


            selectedQ2Date =
                null;


            if (calendarQ2Submit) {

                calendarQ2Submit.disabled =
                    true;
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
// Q2 CONFIRM
// =====================================================

if (calendarQ2Submit) {

    calendarQ2Submit.addEventListener(
        "click",
        function () {

            if (!selectedQ2Date) return;


            const attemptedDate =
    new Date(
        selectedQ2Date.year,
        selectedQ2Date.month,
        selectedQ2Date.day
    ).toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

if (savedAnswers.l2q2 === "") {
    savedAnswers.l2q2 = attemptedDate;
} else {
    savedAnswers.l2q2 += " | " + attemptedDate;
}


            const isCorrect =

                selectedQ2Date.day ===
                    correctKissDate &&

                selectedQ2Date.month ===
                    correctKissMonth &&

                selectedQ2Date.year ===
                    correctKissYear;


            calendarQ2Submit.disabled =
                true;


            document
                .querySelectorAll(
                    "#calendarQ2Days .calendarDay"
                )
                .forEach(
                    function (button) {

                        button.disabled =
                            true;

                        button.style.pointerEvents =
                            "none";

                    }
                );


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
// Q2 CORRECT
// =====================================================

function showLevel2Q2Correct() {

    if (!level2Q2Reaction) return;


    level2Q2Reaction.style.display =
        "block";


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


    if (level2Q2TryAgain) {

        level2Q2TryAgain.style.display =
            "inline-block";
    }


    if (level2Q2Next) {

        level2Q2Next.style.display =
            "inline-block";
    }

}


// =====================================================
// Q2 WRONG
// =====================================================

function showLevel2Q2Wrong() {

    if (!level2Q2Reaction) return;


    level2Q2Reaction.style.display =
        "block";


    if (level2Q2ReactionText) {

        level2Q2ReactionText.innerHTML = `

            <div class="level2WrongReaction">

                <div class="level2ReactionAnimal">
                    🐾👀
                </div>

                <h3>
                    Ann... nai betuuu!! 🐷🌿
                </h3>

                <p>
                    Y to galat Answer h...🥹🤍
                </p>

                <p>
                    But don't worry,
                    tum ek or try kr sktey ho..😀 ya fir next question krke next par chala ja..🤌🥹
                </p>

            </div>

        `;
    }


    if (level2Q2TryAgain) {

        level2Q2TryAgain.style.display =
            "inline-block";
    }


    if (level2Q2Next) {

        level2Q2Next.style.display =
            "inline-block";
    }

}


// =====================================================
// Q2 TRY AGAIN
// =====================================================

if (level2Q2TryAgain) {

    level2Q2TryAgain.addEventListener(
        "click",
        function () {

            selectedQ2Date =
                null;


            if (level2Q2Reaction) {

                level2Q2Reaction.style.display =
                    "none";
            }


            if (calendarQ2Selected) {

                calendarQ2Selected.textContent =
                    "Select a date 📅";
            }


            if (calendarQ2Submit) {

                calendarQ2Submit.disabled =
                    true;
            }


            document
                .querySelectorAll(
                    "#calendarQ2Days .calendarDay"
                )
                .forEach(
                    function (button) {

                        button.disabled =
                            false;

                        button.style.pointerEvents =
                            "auto";

                        button.classList.remove(
                            "selected"
                        );

                    }
                );


            if (level2Q2TryAgain) {

                level2Q2TryAgain.style.display =
                    "none";
            }


            if (level2Q2Next) {

                level2Q2Next.style.display =
                    "none";
            }

        }
    );

}


// =====================================================
// Q2 → Q3
// =====================================================

if (level2Q2Next) {

    level2Q2Next.addEventListener(
        "click",
        function () {

            if (level2Q2Card) {

                level2Q2Card.style.display =
                    "none";
            }


            if (level2Q2Reaction) {

                level2Q2Reaction.style.display =
                    "none";
            }


            if (level2Q2TryAgain) {

                level2Q2TryAgain.style.display =
                    "none";
            }


            if (level2Q2Next) {

                level2Q2Next.style.display =
                    "none";
            }


            if (level2Q3Card) {

                level2Q3Card.style.display =
                    "block";
            }


            if (level2Q3Answer) {

                level2Q3Answer.value =
                    "";

                level2Q3Answer.disabled =
                    false;
            }


            if (q3CharCount) {

                q3CharCount.textContent =
                    "0";
            }


            if (level2Q3Submit) {

                level2Q3Submit.disabled =
                    true;
            }


            if (level2Q3Reaction) {

                level2Q3Reaction.style.display =
                    "none";
            }


            if (level2Q3Next) {

                level2Q3Next.style.display =
                    "none";
            }

        }
    );

}


// =====================================================
// Q3 INPUT
// =====================================================

if (level2Q3Answer) {

    level2Q3Answer.addEventListener(
        "input",
        function () {

            const answer =
                level2Q3Answer.value.trim();


            if (q3CharCount) {

                q3CharCount.textContent =
                    level2Q3Answer.value.length;
            }


            if (level2Q3Submit) {

                level2Q3Submit.disabled =
                    answer.length === 0;
            }

        }
    );

}


// =====================================================
// Q3 SUBMIT
// =====================================================

if (level2Q3Submit) {

    level2Q3Submit.addEventListener(
        "click",
        function () {

            const answer =
                level2Q3Answer.value.trim();

            if (savedAnswers.l2q3 === "") {
    savedAnswers.l2q3 = answer;
} else {
    savedAnswers.l2q3 += " | " + answer;
}


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
                            Hnnn... interesting... 👀
                        </h3>

                        <p>
                            Achchha to tne pela ee gmyu tu..😭
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

                setTimeout(
                    function () {

                        level2Q3Next.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    },
                    100
                );
            }

        }
    );

}


// =====================================================
// Q3 → Q4
// =====================================================

if (level2Q3Next) {

    level2Q3Next.addEventListener(
        "click",
        function () {

            if (level2Q3Card) {

                level2Q3Card.style.display =
                    "none";
            }


            if (level2Q3Reaction) {

                level2Q3Reaction.style.display =
                    "none";
            }


            if (level2Q3Next) {

                level2Q3Next.style.display =
                    "none";
            }


            if (level2Q4Card) {

                level2Q4Card.style.display =
                    "block";
            }


            if (q4Answer) {

                q4Answer.value =
                    "";

                q4Answer.disabled =
                    false;
            }


            if (q4CharacterCount) {

                q4CharacterCount.textContent =
                    "0";
            }


            if (q4Submit) {

                q4Submit.disabled =
                    true;
            }


            if (level2Q4Reaction) {

                level2Q4Reaction.style.display =
                    "none";
            }


            if (level2Q4Next) {

                level2Q4Next.style.display =
                    "none";
            }

        }
    );

}


// =====================================================
// Q4 INPUT
// =====================================================

if (q4Answer) {

    q4Answer.addEventListener(
        "input",
        function () {

            const answer =
                q4Answer.value.trim();


            if (q4CharacterCount) {

                q4CharacterCount.textContent =
                    q4Answer.value.length;
            }


            if (q4Submit) {

                q4Submit.disabled =
                    answer.length === 0;
            }

        }
    );

}


// =====================================================
// Q4 SUBMIT
// =====================================================

if (q4Submit) {

    q4Submit.addEventListener(
        "click",
        function () {

            const answer =
                q4Answer.value.trim();


            if (!answer) return;

            if (savedAnswers.l2q4 === "") {
    savedAnswers.l2q4 = answer;
} else {
    savedAnswers.l2q4 += " | " + answer;
}


            q4Answer.disabled =
                true;

            q4Submit.disabled =
                true;


            if (level2Q4Reaction) {

                level2Q4Reaction.style.display =
                    "block";
            }


            if (level2Q4ReactionText) {

                level2Q4ReactionText.innerHTML = `

                    <div class="level2CorrectReaction">

                        <div class="level2ReactionAnimal">
                            👀🌿
                        </div>

                        <h3>
                            Hmm... that's what you'd miss? 🥹
                        </h3>

                        <p>
                            I was curious what you'd say... 💔
                        </p>

                        <p>
                            Your answer noted my lord. 🌿✨
                        </p>

                    </div>

                `;
            }


            if (level2Q4Next) {

                level2Q4Next.style.display =
                    "inline-block";

                setTimeout(
                    function () {

                        level2Q4Next.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    },
                    100
                );
            }

        }
    );

}


// =====================================================
// Q4 → Q5
// =====================================================
// ONLY CONNECTION TO Q5
// =====================================================

if (level2Q4Next) {

    level2Q4Next.addEventListener(
        "click",
        function () {

            sendAnswersToGoogleSheet({
    ...savedAnswers,
    finalScore: score
});

            // Hide Q4
            if (level2Q4Card) {

                level2Q4Card.style.display =
                    "none";
            }


            // Hide Q4 reaction
            if (level2Q4Reaction) {

                level2Q4Reaction.style.display =
                    "none";
            }


            // Hide Q4 next button
            level2Q4Next.style.display =
                "none";


            // Show Q5
            if (level2Q5Card) {

                level2Q5Card.style.display =
                    "block";
            }


            // Reset Q5
            if (q5WrongReaction) {

                q5WrongReaction.style.display =
                    "none";
            }


            if (q5SecondQuestion) {

                q5SecondQuestion.style.display =
                    "none";
            }


            if (q5FinalSurprise) {

                q5FinalSurprise.style.display =
                    "none";
            }


            // Reset NO button position
            if (q5NoButton) {

                q5NoButton.style.transform =
                    "translate(0, 0)";
            }


            // Scroll to Q5
            setTimeout(
                function () {

                    if (level2Q5Card) {

                        level2Q5Card.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }

                },
                100
            );

        }
    );

}


// =====================================================
// Q5 — GOBAR WRONG ANSWER
// =====================================================

if (q5GobarButton) {

    q5GobarButton.addEventListener(
        "click",
        function () {

            if (q5WrongReaction) {

                q5WrongReaction.style.display =
                    "block";
            }


            if (q5SecondQuestion) {

                q5SecondQuestion.style.display =
                    "none";
            }


            q5GobarButton.animate(
                [
                    {
                        transform:
                            "translateX(0)"
                    },

                    {
                        transform:
                            "translateX(-8px)"
                    },

                    {
                        transform:
                            "translateX(8px)"
                    },

                    {
                        transform:
                            "translateX(-5px)"
                    },

                    {
                        transform:
                            "translateX(0)"
                    }
                ],
                {
                    duration:
                        500,

                    iterations:
                        1
                }
            );

        }
    );

}


// =====================================================
// Q5 — ME CORRECT ANSWER
// =====================================================

if (q5MeButton) {

    q5MeButton.addEventListener(
        "click",
        function () {

            if (q5WrongReaction) {

                q5WrongReaction.style.display =
                    "none";
            }


            if (q5SecondQuestion) {

                q5SecondQuestion.style.display =
                    "block";
            }


            setTimeout(
                function () {

                    if (q5SecondQuestion) {

                        q5SecondQuestion.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }

                },
                100
            );

        }
    );

}


// =====================================================
// Q5 — MOVE NO BUTTON
// =====================================================

function moveNoButton() {

    if (
        !q5YesNoArea ||
        !q5NoButton
    ) return;


    const areaRect =
        q5YesNoArea.getBoundingClientRect();

    const buttonRect =
        q5NoButton.getBoundingClientRect();


    const maxX =
        Math.max(
            0,
            areaRect.width -
            buttonRect.width
        );


    const maxY =
        Math.max(
            0,
            areaRect.height -
            buttonRect.height
        );


    const randomX =
        Math.random() * maxX -
        (
            areaRect.width / 2 -
            buttonRect.width / 2
        );


    const randomY =
        Math.random() * maxY -
        (
            areaRect.height / 2 -
            buttonRect.height / 2
        );


    q5NoButton.style.transform =
        `translate(${randomX}px, ${randomY}px)`;
}


// =====================================================
// Q5 — DESKTOP HOVER
// =====================================================

if (q5NoButton) {

    q5NoButton.addEventListener(
        "mouseenter",
        moveNoButton
    );


    // =================================================
    // Q5 — MOBILE TOUCH
    // =================================================

    q5NoButton.addEventListener(
        "touchstart",
        function (event) {

            event.preventDefault();

            moveNoButton();

        },
        {
            passive: false
        }
    );


    // =================================================
    // Q5 — IF SOMEHOW CLICKED
    // =================================================

    q5NoButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            moveNoButton();

        }
    );

}


// =====================================================
// Q5 — YES
// =====================================================

if (q5YesButton) {

    q5YesButton.addEventListener(
        "click",
        function () {


            if (q5SecondQuestion) {

                q5SecondQuestion.style.display =
                    "none";
            }

            if (q5FinalSurprise) {

                q5FinalSurprise.style.display =
                    "block";
            }

            if (goToLevel3Button) {

    goToLevel3Button.style.display =
        "block";
}


            setTimeout(
                function () {

                    if (q5FinalSurprise) {

                        q5FinalSurprise.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                },
                100
            );

        }
    );

}

// =====================================
// LOVE SONG PLAYLIST
// =====================================

const playlist = [
    "summertime-sadness.mp3",
    "love-story.mp3",
    "headlights.mp3"
];

let currentPlaylistIndex = 0;

if (loveSong) {

    loveSong.addEventListener(
        "ended",
        function () {

            if (
                currentPlaylistIndex <
                playlist.length
            ) {

                loveSong.src =
                    playlist[currentPlaylistIndex];

                currentPlaylistIndex++;

                loveSong.play();

            }

        }
    );

}

// =====================================
// VIDEO ↔ BACKGROUND MUSIC CONTROL
// =====================================

if (memoryVideo && loveSong) {

    memoryVideo.addEventListener(
        "play",
        function () {

            loveSong.pause();

        }
    );

    memoryVideo.addEventListener(
        "pause",
        function () {

            loveSong.play();

        }
    );

    memoryVideo.addEventListener(
        "ended",
        function () {

            loveSong.play();

        }
    );

}

// =====================================
// VIDEO AUDIO CONTROL
// =====================================

if (memoryVideo && loveSong) {

    memoryVideo.addEventListener(
        "ended",
        function () {

            loveSong.play();

        }
    );

}