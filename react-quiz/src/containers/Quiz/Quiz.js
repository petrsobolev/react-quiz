import React, { Component } from 'react'
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

export default class Quiz extends Component {
    state = {
        actvieQustion : 0,
        quiz: [
            {
                id :1,
                question :'Какого цвета небо?',
                rightAnswerId : 2,
                answers : [
                    {text:'Черный', id : 1},
                    {text:'Синий', id : 2},
                    {text:'Красный', id : 3},
                    {text:'Зеленый', id : 4},
                ]
            },
            {
                id :2,
                question :'В каком году основали Питер',
                rightAnswerId : 3,
                answers : [
                    {text:'1700', id : 1},
                    {text:'1705', id : 2},
                    {text:'1703', id : 3},
                    {text:'1803', id : 4},
                ]
            }
        ]
    }
    onAnswerClickHandler = (answerId) =>{
        this.setState({
            actvieQustion : this.state.actvieQustion + 1
        })
    }
    render() {
        return (
            <div className ={classes.Quiz}>
                <div className = {classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers = {this.state.quiz[this.state.actvieQustion].answers}
                        question = {this.state.quiz[this.state.actvieQustion].question}
                        onAnswerClick = {this.onAnswerClickHandler}
                        quizLength = {this.state.quiz.length}
                        answerNumber = {this.state.actvieQustion + 1}
                    />
                </div>
            </div>
        )
    }
}
