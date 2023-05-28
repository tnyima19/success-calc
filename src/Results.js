import React from "react";
import confusionMatrix from './ConfustionMatrix.png';
import businesses from './businesses.png';

function Result(){
    return(<div class="container-fluid border mx-auto text-center">
        <h3>Discoveries</h3>
        <div class="row">
            <div class="col">
        <h3>Random Forest</h3>
        <p>
        As the analysis revealed no linear relationship between "Distance from Times Square"
         and "Success," nor between "Distance from Nearest Station" or "Zip Code" and "Success,"
          an unsupervised model was selected to predict the outcomes of test values. Two models,
           Naïve Bayes and Random Forests, were utilized, both achieving an accuracy rate of 60-70%.
            However, Random Forest consistently outperformed Naïve Bayes in terms of accuracy.
             The chosen Random Forest model generated the following confusion matrix, affirming its
              suitability for predicting the "Success" of businesses. Hence, Random Forest was selected
               as the preferred model for this prediction task.
        </p>
        <p>
        Initially, there was a suspicion that the selected model might be making predictions by chance or assuming 
        a higher success rate due to the significant number of successful businesses, 
        particularly in the "Tobacco Retail Dealer" category. However, this suspicion was alleviated
         when the model was tested with data containing a substantial number of failures. Despite the
          increased presence of failures in the dataset, the Random Forest model consistently demonstrated its capability to predict with over 60% accuracy. 
        This finding provided further confidence in the reliability and effectiveness of the model's 
        predictive capabilities.
        </p>
        <p>Accuracy score = 0.682397
        </p>
        <p>  where does the model get wrong ?
            where does the model get right?</p>
        <p>

        </p>
            </div>
           
            <div class="col">
            <img src={confusionMatrix} alt="confusion matrix" class="img-fluid"></img>
            </div>

        </div>
        <div class="row">
        <div class="col">

        <h2> Lasso Regression </h2>
        <p>
        Upon further review and examination of the past model, 
        it became apparent that although there is no direct linear
         relationship between individual features such as Distance 
         from Times Square, Distance from Nearest Station, and Zip Code,
          combining all these features into a multidimensional vector proved
           successful in predicting "Success" with similar accuracy. Furthermore,
            when using the multidimensional vector, Linear Regression produced even
             better results than the Random Forest model.

This indicates that while individual features may not exhibit linear relationships,
 the collective influence of all features together can effectively predict "Success"
  with higher accuracy. The program output identified the following relevant features:
   "Distance From Times Square," "Distance from Station," "Industry_Laundries," "Industry_Sidewalk Cafe,"
    "Industry_Tobacco Retail Dealer," and "Address Borough_brooklyn."

These findings highlight the importance of considering multiple features
 simultaneously and the potential for improved predictive accuracy when using 
 a multidimensional approach.
        </p>
        <p>The mean square error: 0.2769423558897243</p>
        <p>Accuracy Score:  0.7230576441102757</p>
        <p>Any Inference, interpretations, and insights from teh final model results</p>
        <h3>Inferences</h3>
        <ul class="list-group ">
            <li>From the first phase we can infer that indiviual features such as "Distance From Times Square","Distance from nearests station"
             have low realtion with with the age or success of Business.</li>
             <li>However "Type of Businesss" has high relationship with successs of Business.</li>
             <li> Althouth our initial results showed that individual features do not have linear relationship, but we can use mutifeatured 
            x vectors which using Lasso Regression, gave similar prediction to that of Random Forest. I chose Lasso Regression because we can get 
            releavant features and it also doesn't use the features that are not necessary.</li>
        </ul>
        <h3> Limitations and future considerations</h3>
        <ul class="list-group" >
            <li>I only concerned with the external factors  that contributed to success of business such as "Distance from Station",
            "Distance from Times square", "Distance".</li>
            <li> Because most laundries sold after couple years after making consistent money. The Defnition of "Sucess" does not fit its purpose. It would be based on amount of money 
            it earned for the owner rather than its age. </li>
            <li>Similarly most E-Cigerettes are below 7 years old due to their recent popularity, so naturally they would
            be considered unsuccessful.</li>
            <li> I could use other shops that are sell different items to make a good comparison.</li>

        </ul>
        </div>
        </div>
        <div class="row">
                <div class="col">
                <img src={businesses} alt="businesses" class="img-fluid"></img>
                </div>
           
            </div>
    
    </div>);
};

export default Result;