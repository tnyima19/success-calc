import React from "react";
import age_business from './SampleAverageDuration.png';
import success_types from './successful_business_types.png';
import unsuccess_types from './unsuccessful_types.png';
import success_unsucess_map from './Success_unsuccess.png'
import success_distance_from_times_sq from './successful_business_distance_from_times_sq_r100km.png'
import success_distance_from_station from './successful_distance_from_station.png'

function InitialFindings(){
    return(
        <div class="container-fluid border mx-auto">
            <h2 class="text-center">Initial Discoveries</h2>
        <div class="row">
            <div class="col">
                <img src={success_unsucess_map} alt="business map" class="img-fluid"></img>
            </div>
            <div class="col">
                
                <h3>Distance from Mid Town and Success</h3>
                <p>When I first looked at this map I discovered that there were higher number of Successful business
                in manhattan compared to Queens, Brooklyn, Staten Island and Bronx. I also saw that teh density of 
                successful and unsuccesful business ws higher around the train stations. Either all business wanted
                to be accessible from the station or only those business who were accessible become successful. I 
                also discovered that the highest density of the bisiness were aroud midtown, east village. So I checked
                if distance from times square had some relation to the success of a business. There was a good relation
                between times square and the business. The further you go from times square the lesser the number of 
                successful businesses. I chose times square because its very close to port authority, its also couple 
                blocks from Grand Central. It has access to almost all trains that go everywhere in NYC.</p>
            </div>
        </div>
            <div class="row gx-1 gy-5 mt-5">
        
            <div class="col">
            <h3>Success and Age of business.</h3>
            <p>During my analysis I also realized that first I needed to define
            success for a business. I didn't have access to profit records so I needed alternate
            variable that would give me a good measure of success. Using this graph I realized that I could used
            age/(Duration of business) to weigh success.</p>
            <p>The mean age of Business: </p>
            <p>The median age of Businesses: </p>
            <p>The mode age of Businesses: </p>
            <p>The standard deviation value: </p>
            <p>I used histogram to show the number of business of and their respective ages.</p>
            </div>

            <div class="col">
                <div class="card">
                <img src={age_business} alt="business age" class="img-fluid"></img>
                </div>
            </div>
            </div>

            <div class="row">
                <div class="col">
                    <img src={success_distance_from_times_sq} alt="successful business distance" class="img-fluid"></img>
                </div>
                <div class="col">
                    <h2>Realtion between distance from Midtown and Success of a business.</h2>
                    <p>From the diagram I realized that there is a correlation between distance from times
                        square and Success of a Business.
                    </p>
                </div>
                
            </div>

            <div class="row">
                <div class="col">
                    <h3> Distance from Station and Success</h3>
                    <p>Similar to Distance form Times Square, there was also higher correlation between distance from station
                        and success of a business.Business had higher chances of succes the closer they were. As we can see from the diagram
                        that the curve is highly left-skewed.</p>

                        <p>Mean distance of successful business is:0.44997 km</p>
                        <p>Median distance of successful business = 0.27165 km</p>
                        <p>mean distance of unsuccessful business is:0.458132 km</p>
                        <p>Median distance of unsuccessful business = 0.299064 km </p>
                </div>
                <div class="col">
                    <img src={success_distance_from_station} alt="success business and distance from station" class="img-fluid"></img>
                </div>

            </div>


        
        
        <h3>Types of Business</h3>
        <div class="row gx-1 gy-5">
            <div class="col">
                <p>I also found out many types of business. There were more than types of business so I decided to focus on 
                small business that interested me. Which are visualized below. Stoop Line Stand are groceries, and I also
                found out that many Tobacco Retail Dealer also sell and advertise themselves as Groceries so that they can 
                get greater share of the market. It could also be because of this reason they are more successful. Not only 
                do they sell groceries, they also are involved in selling alcohol and cigerettes and attracting customers who 
                in contrast to shops that only sell alcohol or Electronic cigerettes.
            </p>
            </div>
            <div class="col">
                <div class="card-body">
                    <img src={success_types} alt="success_types" class="img-fluid"></img>
                </div>
            </div>
        </div>
        <div class="container-fluid border">
            <div class="row gx-1 gy-5">
            <p>Unsuccessful business types</p>
                <div class="col"> 
                    <div class="card">
                        <img src={unsuccess_types} alt="unsuccess_types" class="img-fluid"></img>
                    </div>
                </div>
                <div class="col">
                <p>We can see that Laundry has the highest number of unsuccessful types. There are also large number
                of oif Electronic Cigerrette Deealer which are Unsuccessful. While researching I also realized the reason 
                why Laundries had such lower "age" and as a result "Success" according to my definition. It was because many 
                people used laundry as a means to earn money to persue other business and was sold more oftern to other people.</p>
                </div>
            </div>
        
        </div>
        <div class="container">
            <button type="button" class="btn btn-outline-dark">Press Here</button>
        </div>
        
    </div>);
}
export default InitialFindings;