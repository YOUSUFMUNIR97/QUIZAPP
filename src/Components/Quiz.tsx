import { useState } from 'react'
import Result from './Result';




function Quiz() {

    const QuizData = [
        {
            id: 1.,
            question: "Which language runs in a web browser?",
            options: ["Java", "C", "Python", "JavaScript"],
            answer: 4

        },
        {
            id: 2.,
            question: "What does CSS stand for?",
            options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
            answer: 2
        },
        {
            id: 3.,
            question: "What does HTML stand for?",
            options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Helicopters Terminals Motorboats Lamborginis"],
            answer: 1
        },
        {
            id: 4.,
            question: "What year was JavaScript launched?",
            options: ["1996", "1995", "1994", "none of the above"],
            answer: 2
        },
    ]
    const [currentdata, setCurrentData] = useState<number>(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // const changeQuestion = () =>  {
    //     setCurrentData(currentdata+1)
    // }

    const changeQuestion = () => {
        updatescore();
        if (currentdata < QuizData.length - 1) {
            setCurrentData(currentdata + 1);
            setClickedOption(0)
        } else {
            setShowResult(true)
        }
    };

    const updatescore = () => {
        if (clickedOption === QuizData[currentdata].answer)
            setScore(score + 1)
    }

    const resetAll = () => {
        setShowResult(false);
        setCurrentData(0);
        setClickedOption(0);
        setScore(0);
    }


    return (
        <div className='header'>
            <div className='Main'>
                <p>Quiz App</p>
                {showResult ? (
                    <Result Score={score} TotalScore={QuizData.length} tryagain={resetAll} />
                ) : (
                    <>
                        <div className='Question'>
                            <span>{QuizData[currentdata].id}</span>
                            <span>{QuizData[currentdata].question}</span>
                        </div>

                        <div className='Option'>
                            {QuizData[currentdata].options.map((val, i) => {
                                return (
                                    <button
                                        className={`option-btn ${clickedOption == i + 1 ? "checked" : null
                                            }`}
                                        onClick={() => setClickedOption(i + 1)}>
                                        {val}
                                    </button>
                                )
                            })}

                        </div>

                        <input className="nextbtn" type='button' value={'Next'} onClick={changeQuestion} />
                    </>
                )}
            </div>
        </div>
    )
}

export default Quiz
