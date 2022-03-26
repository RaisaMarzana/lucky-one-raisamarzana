import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='questions'>
            <div className='header'>
                <h2>Questions and Answers</h2>
            </div>
            <div className='container'>
                <h4>Question 1</h4>
                <div>
                    <h3>How React Works ?</h3>
                    <h4>Props</h4>
                    <p>React is a JavaScript library that creates user interfaces in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries. React works in declarative code. To show what we mean by declarative code, we want you to imagine the following code expressed as an app. We use declarative code to create components, which is how we display information. Essentially, components are reusable UIs which allow you to split the app into separate blocks that act independently of each other.</p>
                </div>
            </div>
            <div className='container'>
                <h4>Question 2</h4>
                <div>
                    <h3>What are the differences between Props and State ?</h3>
                    <h4>Props</h4>
                    <p>Props are read-only. Props allow you to pass data from one component to other components as an argument. Props can be accessed by the child component.</p>
                    <h4>State</h4>
                    <p>State changes can be asynchronous. State holds information about the components. State cannot be accessed by child components.</p>
                </div>
            </div>
            <div className='container'>
                <h4>Question 3</h4>
                <div>
                    <h3>How useState works ?</h3>
                    <p>The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. useState enables you to add state to function components. Calling React. useState inside a function component generates a single piece of state associated with that component.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;