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
                <p> I selected the following features for analysis: "Distance From Times Square,"
                     "Distance from Nearest Station," "Types of Business," "Borough," and "Zip Code."
                      These features were chosen based on my assumptions about New York City. Times Square
                       is typically crowded with tourists, leading me to assume that businesses in this area
                        would generate higher revenue due to the large number of tourists in NYC. Additionally,
                         Times Square is the most accessible location in Manhattan, benefiting from the various
                          train routes passing through the area.

Likewise, a lower "Distance from Nearest Station" indicates a higher level of accessibility to groceries,
 food, snacks, and other amenities.

Upon examining a map, I observed a significantly larger number of businesses in Manhattan compared to Queens,
 Brooklyn, Staten Island, and the Bronx. Furthermore, there were concentrated clusters of successful businesses,
  represented by higher densities of green markers, primarily located around midtown Manhattan and train stations.
   As one moves away from midtown, the number of businesses gradually decreases. The borough of Staten Island 
   had the fewest number of businesses among all the boroughs. These observations further reinforced my initial bias,
    due to which I created a bar graph illustrating the distribution of businesses based on their distance
     from Times Square and the nearest train station. The resulting graph is presented below.
             </p>
            </div>
            <div class="col">
                <h3>Assumptions</h3>
                <p>Based on my findings, it further reinforced my initial assumption that the location of a business plays
 a significant role in its success. This was evident from the higher concentration of successful
  businesses in proximity to Times Square. As a result, I decided to investigate whether there was a
   linear relationship between the "Distance from Times Square" and the "Age" of businesses. However,
    my assumption was proven incorrect, as no linear relationship was observed, as depicted below. Similarly,
     no linear relationship was found between the "Distance from Nearest Station" and the "Age of a business."
      Additionally, I explored the potential linear relationship between zip codes and the age of businesses,
       but the results remained consistent.

I had also initially considered the "Type of Business" as the second most important factor. 
To examine any potential relationship between the types of businesses and their success,
 I created a visual diagram. However, before proceeding, it became essential to define what
  constitutes a "successful" business. Although I initially focused on the relationship between
   the age of a business and its distance from Times Square, I realized that my prediction would
    ultimately involve forecasting the "Age" of a business, which could introduce a high degree of error.
     Therefore, I deemed it necessary to establish a clear definition of "Success" first.

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
            <p>Although I lacked access to specific profit records,
 I was able to utilize the "License Created Date" and "License Expiring Date"
  as proxies for determining the age of a business. While this measure served as a
   reasonable approximation of success, incorporating actual profit data would have
    enhanced the dataset's richness and increased the overall accuracy of the analysis.

Initially, I assumed that a higher age of a business would correlate with a greater 
level of success. However, it was crucial to establish a clear distinction between "Successful"
 and "Unsuccessful" businesses. To accomplish this, I employed the mean value as a threshold
  indicator for business success. Businesses with an "Age" greater than the mean were classified
   as "Successful," while those falling below the mean were deemed "Unsuccessful."

In addition to this approach, I also created a graph that provided valuable insights into the distribution of business ages. This visualization proved to be a valuable tool for assessing the overall age patterns within the dataset.
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
                    <p>Within the dataset, there was a diverse range of businesses, spanning from Laundries,
                         Tow Trucks, and Parking Lots to Tobacco Retail Dealers. Given the multitude of business
                          types, I made the decision to concentrate on those that piqued my interest.
                           This narrowed down my focus to specific categories such as Laundries, Stoop Line Stands
                            (Groceries), Tobacco Retail Dealers, Electronic Cigarette Dealers, and Sidewalk Cafes.

To gain a comprehensive understanding of the relationship between the 
"Distance from Times Square" and the "Success" of businesses, I developed a visual diagram.
 By utilizing different hues to distinguish between the various types of businesses, I aimed
  to present a clear representation of the data's patterns and insights.
                    </p>
                    <p>
                    Based on the visual diagram, several noteworthy observations can be made. 
                    Firstly, it is evident that a majority of Electronic Cigarette Dealers are not
                     classified as successful. This trend could be attributed to the recent rise in
                      popularity of electronic cigarettes. As a result, many of these dealers may be
                       relatively young, with less than seven years of operation.

Additionally, there are relatively few successful Laundries. Through research conducted on Facebook
 listings and group discussions among laundry owners, it was discovered that laundries are often bought
  and sold on a regular basis. Many individuals utilize laundries as a means of generating consistent
   income but eventually transition to other business ventures. Consequently, the definition of "success"
    may not align well with the nature of laundries.

On the other hand, there is a notable presence of successful Stoop Line Stands
 (groceries without alcohol) within the dataset. This suggests that these types of 
 businesses have achieved a higher level of success.

Furthermore, the visual diagram indicates a significant number of both successful and
 unsuccessful Tobacco Retail Dealers. During the analysis, it was identified that many 
 tobacco retail dealers advertise themselves as "groceries" or "food establishments" to 
 attract a larger customer base.

Overall, these observations highlight distinct patterns and dynamics within specific 
business categories, shedding light on the varying degrees of success among them.
                    </p>
                </div>
                
            </div>

            <div class="row">
            
                <div class="col">
                    <h3> Types of Successful and Unsuccessful Business</h3>
                       <p> Referring to the figure on the right, it provides a clear distinction between the different
 types of businesses and their respective numbers. Stoop Line Stands are characterized as
  groceries with outdoor stands, while Sidewalk Cafes refer to typical cafes. Notably, there
   is a significant presence of Tobacco Retail Dealers, surpassing other business types in 
   terms of quantity.

However, upon further analysis by examining individual business names, an interesting
 trend emerged. It was discovered that many Tobacco Retail Dealers also engage in the 
 sale of alcohol or cigarettes, strategically positioning themselves as groceries or food
  shops to capture a larger market share. This contrasts with Stoop Line Stands, which solely 
  focus on selling groceries. Lastly, Sidewalk Cafes exhibit the lowest number among the observed business types.

These insights shed light on the diverse strategies employed by businesses to expand their
 offerings and appeal to a wider customer base, underscoring the distinct characteristics
  and dynamics within each category.
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