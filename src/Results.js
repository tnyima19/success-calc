import React from "react";
import confusionMatrix from './ConfusionMatrix.png';
import businesses from './businesses.png';

function Result(){
    return(<div class="container-fluid border mx-auto text-center">
        <h3>Discoveries</h3>
        <div class="row">
            <div class="col">
        <h3>Random Forest</h3>
        <p>
            Since there was no linear relationship between "Distance from Times Square" and "Success".
            Similarly there was no realationship between "Distance from nearest station" and "Success" or "Zip Code" and "Success"
            I chose Unsupervised model to predict the outcomes of test values. And there were 2 that predicted with 60-70% 
            accuracy. They were Naïve Bayes and Random Forests, but Random Forest was consistently more accurate than Naive Bayes. 
            It was able to predict with following confusion matrix. Therefore I chose Random Forest as my model to predict the "Success" 
            of businesses.
        </p>
        <p>
            Initially I suspected it may be predicting it by chance or assuming most to be successful because of the hight number 
            of successful business specially in "Tobacco Retail Dealer" type business. However, when 
            provided with data that had high number of failures, it was still able to successfully predict with over 60% accuracy.
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
            While rechecking and going through past model I realized that despite having no 
            direct linear relationship between features such as Distance from Times Square, Distance from nearest Station
            ,Zip Code. When using all these features together and creting a multidimentional vector. It was succesfully able to 
            predict Success with similar accuracy, and using multidimentional vector also gave similar results with Linear Regression, 
            which is higher than Random Forest. Therefore we can say individually features such as Distance from Station,Distance from Times Square, Type of
            Business, Zip Code do not have Linear realtionship, but all the features together can predict "Success" with higher accuracy than 
            Random Forest.I say this because the program output [0,1,2,4,5,6] as Relevant Features.
            These features are "Distance From Times Square", "Distance from Station", "Industry_Laundires", "Industry_Sidewalk Cafe", "Industry_Tobacco Retail Dealer"
            "Address Borough_brooklyn" respectively. 
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