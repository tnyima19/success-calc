import React from "react";
import age_business from './SampleAverageDuration.png';
import success_types from './successful_business_types.png';
import unsuccess_types from './unsuccessful_types_small.png';
import success_unsucess_map from './Success_unsuccess.png';
import success_distance_from_times_sq from './successful_business_distance_form_times_sq_r50km.png';
import distance_from_station_and_type from './DistanceFromStation_Success_BusinessType.png';
import distance_from_times_sq_and_duration from'./Distance_from_times_sq_and_Duration.png';
import types_of_business from './Types_of_business.png';

function InitialFindings(){
    return(
        <div class="container-fluid border mx-auto text-center">
         
           
        <div class="row">
            <div class="col">
                <img src={success_unsucess_map} alt="business map" class="img-fluid"></img>
            </div>
            
        </div>
        <div class="row">
        <div class="col">
                <h3>Assumptions and Impressions</h3>
                <p> I chose "Distance From Times Square","Distance from nearest station", "Types of Business","Borough","Zip Code".
                    I chose these feature because of my assumptions about New York City.Times square is usually full of tourists so
                     I assumed Businesses in Times Square would earn higher revenue because of the high number of tourists in NYC,it is also 
                     the most accessible place in manhattan because of all the trains that go through Times Square.
                    Similarly lower "Distance from nearest station" means highly accessible from station for groceries, 
            food, snacks etc.
                When I first looked at this map I discovered that there were significantly higher number of businesses
                in Manhattan compared to Queens, Brooklyn, Staten Island and Bronx. I also noticed high densities of green(succesful businesses)
                around mid-town, compared to other parts of Manhattan. The density of business higher 
                around the train stations. Similarly the number of businesses decreased as you go further from mid-town. Similarly Island had the least amount of 
                businesses compared to other boroughs. This strengthened my bias so I created bar graph of all businesses and distance from Times Square and distance from 
                nearest station. which gave me this result below.
             . </p>
            </div>
            <div class="col">
                <h3>Assumptions</h3>
                <p>This strengthened my assumption that locations had an impact on the success of a business, because of the relation between 
                    number of successful businesses was higher closer to the Times Square. This led
                    me to check if there was linear realtionship between "Distance from Times Square" and "Age" of businesses.
                    However my assumption was proved to be wrong. There was no linear relationship between Distance from Times Square 
                    and Age of business as we can see down below. Similarly there was also no linear relation between "Distance from nearest station" and 
                    "Age of a business". I also checked if there was linear realtionship between zip codes and age of business howeever the
                    results were same.I had also assumed that the "Type of Business" was either second most important factor. So I also created
                    visual diagram to check if there was some realtionship between types of business and success of a business. But before that 
                    I also needed to define success of business. Although I was looking for relationship between Age of business and 
                    Distance from Times square I also realized that when I make prediction I would be predicting "Age" of business and this 
                    would have high error. So I needed to define "Success" first.

                </p>
            </div>
            <div class="table">
                <tr>
                    <th>
                    <img src={success_distance_from_times_sq} alt="business_success_bar" class="img-fluid"></img>
                    </th>
                    <th>
                    <img src={distance_from_times_sq_and_duration} alt="distance_age" class="img-fluid"></img>
                    </th>

                </tr>
                    
            </div>
            
        </div>
            <div class="row gx-1 gy-5 mt-5">
            <div class="col">
            <h3>Success and Age of business.</h3>
            <p>Although I didn't have access to profit records, I had access to "License created date" and "License 
                Expiring Date" which gave me age of a business and it was good measure of success, but access to profits
                would have enriched the data and increased accuracy.
                I assumed that higer age of business meant higher success of business but I needed to find out what would be
                the line between "Successful" and "Unsuccessful" business. So I used mean as an indicator for success of a business. 
                If a "Age" of business &gt; mean it would be considered "Successful" whereas
                else the business would be considered "Unsuccessful"
            I created also created this graph that provided me a very good sense of age of business and.</p>
            <p>The mean age of Business: 7.68 years </p>
            <p>The median age of Businesses: 5.65 years </p>
            <p>The standard deviation value: 5.5837 years</p>
            </div>

            <div class="col">
                <div class="card">
                <img src={age_business} alt="business age" class="img-fluid"></img>
                </div>
            </div>
            </div>

            <div class="row">
                <div class="col">
                    <img src={distance_from_station_and_type} alt="successful business distance" class="img-fluid"></img>
                </div>
                <div class="col">
                    <h2>Relation Between Types of Business and Success of Business.</h2>
                    <p>Firstly there were many types of businesses they ranged from Laundries, Tow truck, parking lot to Tobacco Retail Dealers. 
                        Due to many types of businesses I decided to focus on businesses which interested me. This included Laundries, Stoop Line Stand(Groceries),
                        Tobaccco Retail Dealer, Electronic Cigerrette Dealer,and Sidewalk Cafe. I used created this Visual diagram based on "Distance from Times Square" and "Success"
                        differentiated the types of Businesses with hues.
                    </p>
                    <p>
                        I can infer that most Electronic Ciegarette Dealer are not successful.This is probabily due to recent popularity of 
                        Electronic Cigerette. Most Electronic Cigerette sellers might be less than 7 years old. Similarly, there are very few Successful Laundries.
                        According to my research on Facebook listing and read facebook posts on Group discussions on Laundry owners, laundries are purchasedand
                        sold regularly. Many people use 
                        Laundries as a way to earn consistent money but later on move on to another business. So the definition of "Success" may not fit for 
                        laundries.
                        We can also see very high number of successful Stoop Line Stand(Groceries without alcohol).
                        We can also see very high number of successful and unsuccesful Tobacco Retail Dealer. During my analysis I idenfied that many
                        Tobaco Retail Dealers adversed themselves as "Grocerys" or "Foods", so that they can attract higher share of customers.
                    </p>
                </div>
                
            </div>

            <div class="row">
            
                <div class="col">
                    <h3> Types of Successful and Unsuccessful Business</h3>
                       <p> From the figure to the right, we can clearly distingush business types and their number.
                        Stoop line stands are groceries that have outdoor stands. Side walk Cafes are just regular cafe.
                        Tobacco Retail Dealer has the highest number. However, analyzing the data checking their individual 
                        business names. I realized that many Tobacco Retail Dealer also sell alcohol or cigerettes and advertise themselves as
                         Groceries or Food Shops so that they can get greater share of the market. Compared to Stoop Line Stand who only 
                         focus on selling gorceries.Side walk cafe had the lowest amount.
                         </p>
                        
                       
                </div>
                <div class="col">
                    <img src={types_of_business} alt="success business and distance from station" class="img-fluid"></img>
                </div>
               

            </div>
            <div class="row">
            
           
            </div>

        
        
        <h3>Types of Business</h3>
        <div class="row gx-1 gy-5">
            <div class="col">
            <p> Due the graph of Types of Succesful and Unsuccessful business and their counts. We can assume some correlation between specific types of business and success. 
                        This also implies that Types of Business may have major impact on predicting whether 
                        a business is successful because if we know the type of business we can easily predict 
                        the probability of its success by using this formula.</p>
                        <p>P(type of Business) = Total(Successful_types)/ Total number of Specific type of Business.</p>
                        <p>P(Tobacco Retail Dealer) = 1193/1597 = 0.74</p>
                        <p>So if you choose to create a business of Type 'Tobacco Retail Dealer', in NYC you have 0.74 chance of "success".</p>

            </div>
            <div class="col">
                <div class="card-body">
                    <img src={success_types} alt="success_types" class="img-fluid"></img>
                </div>
            </div>
        </div>
    
        <div class="card">
                <p>Unsuccessful Types Businesses</p>
                <img src={unsuccess_types} alt="unsuccess_types" class="img-fluid"></img>
        </div>
        
        
    </div>);
}
export default InitialFindings;