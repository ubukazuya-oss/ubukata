// クイズのデータ（漢字をキーに、答えとなる都道府県名と解説を格納）
const quizzes = [
    {
        hint: "山",
        answer: "山形県, 山梨県, 富山県, 岡山県, 和歌山県, 山口県",
        explanation: "「山」がつく都道府県は6つあります。山形（やまがた）、山梨（やまなし）、富山（とやま）、岡山（おかやま）、和歌山（わかやま）、山口（やまぐち）です。",
    },
    {
        hint: "川",
        answer: "神奈川県, 石川県, 香川県",
        explanation: "「川」がつく都道府県は3つです。神奈川（かながわ）、石川（いしかわ）、香川（かがわ）です。ちなみに、地名には「川」がつく場所はたくさんありますね。",
    },
    {
        hint: "島",
        answer: "福島県, 広島県, 徳島県, 島根県, 鹿児島県",
        explanation: "「島」がつく都道府県は5つあります。福島（ふくしま）、広島（ひろしま）、徳島（とくしま）、島根（しまね）、鹿児島（かごしま）です。日本の地形の特徴が表れていますね。",
    },
    {
        hint: "口",
        answer: "山口県",
        explanation: "「口」がつく都道府県は山口県（やまぐち）のみです。場所は本州の西端に位置します。",
    },
    {
        hint: "賀",
        answer: "滋賀県, 佐賀県",
        explanation: "「賀」がつく都道府県は滋賀県（しが）と佐賀県（さが）の2つです。琵琶湖を持つ滋賀と、有田焼で有名な佐賀と、遠く離れた2県です。",
    }
];

let currentQuizIndex = 0; // 現在の問題番号
let isAnswerShown = false; // 答えが表示されたかどうか

// 画面の要素を取得
const quizArea = document.getElementById('quiz-area');
const nextButton = document.getElementById('next-button');
const resultArea = document.getElementById('result-area');
const answerText = document.getElementById('answer-text');
const explanationText = document.getElementById('explanation-text');

// 最初のクイズを表示する関数
function displayQuiz(index) {
    const quiz = quizzes[index];
    
    // HTMLの内容を書き換えて、問題を表示
    quizArea.innerHTML = `
        <p>共通する漢字は？</p>
        <div id="question-text">${quiz.hint}</div>
    `;

    // 答えと解説エリアを非表示に戻し、ボタンを「答えを見る」にする
    resultArea.classList.add('hidden');
    nextButton.textContent = '答えを見る';
    isAnswerShown = false;
}

// 答えを表示する関数
function showAnswer() {
    const quiz = quizzes[currentQuizIndex];
    
    answerText.textContent = `正解: ${quiz.answer}`;
    explanationText.textContent = quiz.explanation;
    resultArea.classList.remove('hidden'); // hiddenクラスを削除して表示

    // ボタンを「次の問題へ」に変更
    if (currentQuizIndex < quizzes.length - 1) {
        nextButton.textContent = '次の問題へ';
    } else {
        nextButton.textContent = '最初からやり直す';
    }
    isAnswerShown = true;
}

// ボタンがクリックされたときの処理
nextButton.addEventListener('click', function() {
    if (isAnswerShown) {
        // 答えが表示されている場合（＝次の問題へ進む）
        currentQuizIndex++;

        // 最後の問題の場合は最初に戻る
        if (currentQuizIndex >= quizzes.length) {
            currentQuizIndex = 0;
        }
        
        displayQuiz(currentQuizIndex); // 次の問題を表示
    } else {
        // 答えが表示されていない場合（＝答えを見る）
        showAnswer();
    }
});

// ページ読み込み時に最初の問題を表示
displayQuiz(currentQuizIndex);
