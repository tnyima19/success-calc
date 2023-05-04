import React from "react";

function Result(){
    return(<div>
        <h2> I chose Lasso Regression </h2>
        <h3> What was your output for the final model you chose?</h3>
        <p>The mean square error: 0.2769423558897243</p>
        <p>Accuracy Score:  0.7230576441102757</p>
        <h3>Why did you choose this model?</h3>
        <p>Firstly because its the highest accuracy had low mean squared error 
        compared to Naive Bayes and Random Forest who also had high accuracy, but didn't 
        consistently predict with high accuracy like Lasso Regression. 
        Lasso Regression Accuracy score:
        Naive Bayes Accuracy score:0.61827|
        Naive Bayes confusion matrix: [[88 278][27 406]]|
        Random Forest Accuracy score: 0.67459|
        Random Forest confusion matrix:[[232 134][126 307]]|

        </p>
        <p>Any Inference, interpretations, and insights from teh final model results</p>
    </div>);
};

export default Result;