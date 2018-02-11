import React, { Component } from 'react';

import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Results from '../Results';

class Questionnaire extends Component {
    constructor(props) {
        super(props);

        let answersArray = {
            0: [
                { buttonName: "Обарзование" },
                { buttonName: "Туризм" },
                { buttonName: "Блогосфера" },
                { buttonName: "СМИ" },
            ],
            1: [
                { buttonName: "Счётчик" },
            ],
            2: [
                { buttonName: "Важно" },
                { buttonName: "Неважно" },
            ],
            3: [
                { buttonName: "Важно" },
                { buttonName: "Неважно" },
            ],
        };

        this.state = {
            finished: true,
            stepIndex: 0,
            answers: answersArray,
        };
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 5,
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    renderStepActions(step) {
        const {stepIndex, answers} = this.state;

        let answersList = answers[step];
        let answersRender = null;

        if (answersList) {
            answersRender = answersList.map((answer, index) =>
                <div style={{marginTop: '10px'}}>
                    <RaisedButton
                        label={answer.buttonName}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        primary={true}
                        onClick={this.handleNext}
                        style={{marginRight: 12}}
                    />
                </div>
            );
        }

        return (
            <div style={{margin: '12px 0'}}>
                {answersRender}
                {step > 0 && (
                    <div style={{marginTop: '15px'}}>
                        <RaisedButton
                            label="Назад"
                            disabled={stepIndex === 0}
                            disableTouchRipple={true}
                            disableFocusRipple={true}
                            onClick={this.handlePrev}
                        />
                    </div>
                )}
            </div>
        );
    }
    render() {
        const {finished, stepIndex} = this.state;
        return (
            <div>
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel>Сфера применения</StepLabel>
                        <StepContent>
                            <p>
                                Выберите сферу бизнеса к которой принадлежит сайт.
                                <br/>
                                Если сайт не является частью бизнеса, выберите примерную сферу к которой он относится.
                            </p>
                            {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Способ сбора данных</StepLabel>
                        <StepContent>
                            <p>
                                Выберите инструмент сбора данных, который вам предпочтителен.
                                <br/>
                                (В данный момент доступен только Счётчик)
                            </p>
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Свобода использования</StepLabel>
                        <StepContent>
                            <p>
                                Важно ли иметь возможность пользоваться абсолютно бесплатно всеми функциями системы?
                                <br/>
                                Платные системы предлагают расширенные возможности и имеют больший функционал.
                            </p>
                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>СМС-информирование</StepLabel>
                        <StepContent>
                            <p>
                                Желаете ли иметь возможность быть проинформированным, если сайт окажется недоступным или произойдёт сбой
                            </p>
                            {this.renderStepActions(3)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Карта кликов</StepLabel>
                        <StepContent>
                            <p>
                                Некоторые системы имеют функцию "Карта кликов", позволяющую подсветить наиболее интересные места на страницах сайта.
                            </p>
                            <img src='https://www.alex-seo.ru/upload/iblock/bda/seokarta.jpg' />
                            <p>
                                Желаете ли вы увеличить шанс рекомендации данных системы?
                            </p>
                            {this.renderStepActions(3)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Гибкие отчеты</StepLabel>
                        <StepContent>
                            <p>
                                Основной идеей такой функции является выбор
                                необходимых метрик, необходимых периодов, а далее сохранение в виде
                                отдельного типа отчета.
                            </p>
                            <p>
                                Данная функция рекомендуется для продвинутых пользователей систем веб-аналитики.
                            </p>
                            {this.renderStepActions(3)}
                        </StepContent>
                    </Step>
                </Stepper>
                {finished && (
                    <p style={{margin: '20px 0', textAlign: 'center'}}>
                        <Results/>
                        <br/>
                        <RaisedButton
                            label="Повторить тест"
                            disableTouchRipple={true}
                            disableFocusRipple={true}
                            secondary={true}
                            onClick={(event) => {
                            event.preventDefault();
                            this.setState({stepIndex: 0, finished: false});
                        }}
                        />
                    </p>
                )}
            </div>
        );
    }
}

export default Questionnaire;