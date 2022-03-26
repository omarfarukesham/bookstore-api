import React from 'react';

const FaQ = () => {
    return (
        <div>
            <hr></hr>
            <h1 className='text-center fs-2 my-3 text-primary fw-bold'>রিয়াক্ট প্রশ্ন ও উত্তর</h1>
            <div className="accordion" id="accordionExample">
             <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 #1. How React work ?
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            React is a Javascript library that can create a dynamic user interface(UI). To perform perfectly React follow an efficient declarative code pattern. Moreover, React internally decode the Javascript core syntax but the fusion of JSX help its markup language flavour although behind the scene babel transpile the JSX code into javascript code. More importantly, React library work with Virtual DOM that very effectively manipulate the real DOM. Furthermore, this tiny library can integrate with other libraries such as bootstrap, font awesome etc. 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              #2. Difference between Props and State in React
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
    
            Props and State, both are excellently working to make perform in React library to create more usability, with different purposes. Some difference here - 
<br></br>
Props - 
1. props follow unidirectional data flow.<br></br>
2. props always convey data, function, from parent component to child component. <br></br>
3. props data only readable from child component.<br></br>
4. props are immutable.<br></br>
State - <br></br>
 1. state is mutable.<br></br>
2. state follow the asynchronous method. <br></br>
3. It can be modified by setState.<br></br>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               #3. How useState work ?
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            The useState is called a hook of React library.  useState can be used once or multiple times in a functional component. This hook tracks the state variables and ensures updates whenever they changed any state, finally it re-renders the component. useState works like an asynchronous method. More interestingly React library hook are not working with the class-based component, it is only working with the functional components. 
            </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default FaQ;