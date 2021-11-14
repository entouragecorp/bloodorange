import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useHistory } from 'react-router'
import QuizOrangeBg from './../Assets/orange-vape-bg.png'
import QuizOrangeBg2 from './../Assets/orange-vape-bg-2.png'
import QuizGreenBg from './../Assets/green-quiz-bg.png'
import QuizGreenBg2 from './../Assets/green-quiz-bg-2.png'
import QuizVapeTubeBg from './../Assets/orange-tube-bg.png'

/**
* @author
* @function Quiz
**/

// We are going to have a list of questions
// from this list we're going to randomly select an index
// this index will be stored in memory and deleted from the other array
// we then run an conditional statement to determine what are the answers
// we then concatinate when the answer is correct or do nothing if it is not.
// we're nor going to call and random search function on the old array for another question.

const Quiz = (props) => {
    var completed = []
    var points = 0
    var counter = 0
    const question = useRef()
    const a = useRef()
    const b = useRef()
    const c = useRef()
    const d = useRef()
    const e = useRef()
    const bg = useRef()
    const showA = useRef()
    const showB = useRef()
    const showC = useRef()
    const showD = useRef()
    const showE = useRef()
    const questionaire_limit = 5
    const list_of_questions = [
      {
        question: '1. Saturday Sweet & Sour Sativa Ready to Roll comes in which size formats?',
        options: {
          a: '1/8 ounce (3.5g)',
          b: '1/4 ounce (7g)',
          c: '1/2 ounce (15g)'
        },
        answer: 'c',
        bg: `url(${QuizOrangeBg})`
      },
      {
        question: '2. How does Saturday prepare their Ready to Roll Dried Flower?',
        options: {
          a: '1,000 Employees simultaneously hand-grinding',
          b: 'Explosive Devices',
          c: 'Perfectly milled whole flower'
        },
        answer: 'c',
        bg: `url(${QuizGreenBg2})`
      },
      {
        question: "3. What strains are blended to create Saturday Sweet & Sour Read to Roll?",
        options: {
          a: 'Ghost Train Haze  x Ultra Sour',
          b: 'Black Domina x Mango Haze',
          c: 'Lemon Z x OG Kush'
        },
        answer: 'a',
        bg: `url(${QuizOrangeBg2})`
      },
      {
        question: "4. What are the two dominant flavour/aromas you can expect from Saturday Sweet & Sour?",
        options: {
          a: "Fruit + Fuel",
          b: "Pepper + Citrus",
          c: "Pine + Berry"
        },
        answer: 'a',
        bg: `url(${QuizGreenBg})`
      },
      {
        question: '5. Saturday Sweet & Sour Ready to Roll is the perfect mill size for:',
        options: {
          a: 'Rolling into a joint or a blunt',
          b: 'Packing into a pre-roll cone',
          c: 'Adding to a bowl or a pipe',
          d: 'A dry herb Vaporizer',
          e: 'All of the above'
        },
        answer: 'e',
        bg: `url(${QuizVapeTubeBg})`
      }
    ]
    const history = useHistory()

    useEffect(() => {
        randList()
    }, [])

    const randList = () => {
      gsap.to('.green_bg', {backgroundColor: '#535938', duration: 0})
      if (completed.length >= questionaire_limit) {
        if(points < 4){
          localStorage.setItem('points', points)
          history.push('/points')
          // window.location.reload()
        }
        else{
          localStorage.setItem('points', points)
          history.push('/data-capture')
        }
      } else {
        let random = counter++
        const check_completed = completed.find(element => element == random)

        // For some reason zero is being ignored. That why it's in the conditional statement below.
        if (check_completed || check_completed === 0) {
          randList()
        }
        else {
          completed.push(random)
          question.current.textContent = list_of_questions[random].question
          bg.current.style.background = list_of_questions[random].bg
          bg.current.style.backgroundSize = '100% 100%'


          for (const key in list_of_questions[random].options) {
            if (list_of_questions[random].options[key]) {
              eval(key).current.textContent = list_of_questions[random].options[key]
              eval(`show${key.toUpperCase()}`).current.className = `green_bg ${key}`
            } else {
              eval(`show${key.toUpperCase()}`).current.className = 'displayNone'
            }
          }
        }
      }
    }

    const selectved_answer = (selected_data) => {

      gsap.to(`.${selected_data}`, {backgroundColor: '#40473F', duration: 0.5})
      let index = completed[completed.length -1]

      if(selected_data == list_of_questions[index].answer) {
        eval(selected_data).current.textContent = 'Correct';
        points++;  console.log(`updated points: ${points}`)
      } else{
        eval(selected_data).current.textContent = 'Incorrect';
      }

      setTimeout(()=>{
          randList()
      }, 1000)
    }

    return (
        <div className={'Prizing'} ref={bg}>
            <div id='quiz_holder'>
                <div id='title_holder'>
                    <h3 ref={question}></h3>
                </div>
                <div id='answer_list'>
                    <div ref={showA} className='displayNone' onClick={() => selectved_answer('a')}><p className='ans' ref={a}></p></div>
                    <div ref={showB} className='displayNone' onClick={() => selectved_answer('b')}><p className='ans' ref={b}></p></div>
                    <div ref={showC} className='displayNone' onClick={() => selectved_answer('c')}><p className='ans' ref={c}></p></div>
                    <div ref={showD} className='displayNone' onClick={() => selectved_answer('d')}><p className='ans' ref={d}></p></div>
                    <div ref={showE} className='displayNone' onClick={() => selectved_answer('e')}><p className='ans' ref={e}></p></div>
                </div>
            </div>
        </div>
    )

}

export default Quiz
