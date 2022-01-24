import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
    const {
        waiting,
        loading,
        questions,
        index,
        correct,
        nextQuestion,
        checkAnswer,
    } = useGlobalContext();
    if (waiting) {
        return <SetupForm />;
    }
    if (loading) {
        return <Loading />;
    }
    const { question, incorrect_answers, correct_answer } = questions[index];
    // const answers = [...incorrect_answers, correct_answer];
    let answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4);
    //add at the end because answers only reach index of 2
    if (tempIndex === 3) {
        answers.push(correct_answer);
    } else {
        //push item with random index to the end
        answers.push(answers[tempIndex]);
        //put correct answer on its place
        answers[tempIndex] = correct_answer;
    }
    return (
        <main>
            <Modal />
            <section className="quiz">
                <p className="correct-answers">
                    correct answers: {correct} / {index}
                </p>
                <article className="container">
                    <h2 dangerouslySetInnerHTML={{ __html: question }} />
                    <div className="btn-container">
                        {answers.map((answer, index) => {
                            return (
                                <button
                                    key={index}
                                    className="answer-btn"
                                    dangerouslySetInnerHTML={{ __html: answer }}
                                    onClick={() =>
                                        checkAnswer(correct_answer === answer)
                                    }
                                />
                            );
                        })}
                    </div>
                </article>
                <button className="next-question" onClick={nextQuestion}>
                    skip question
                </button>
            </section>
        </main>
    );
}

export default App;
