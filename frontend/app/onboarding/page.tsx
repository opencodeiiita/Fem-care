"use client";

import OnboardingForm from "./onboardingForm";

export default function OnboardingPage() {
  return <OnboardingForm />;
}


//  This is the starting point after the user login so when it will click on the Let's Start button they will get 
//  directed to the Onboarding's Welcome page with the url /onboarding and this is our forst page (s=0) now from here
//  to handle page transitions like from welcome to basic profile to menstrual health n so on the logic is we will 
//  basically increment the value of s by 1 on each nect click (by using the onNext() functiion). so it will be like 
//  s == 0 ---> welcome page 
//  s == 1 ---> basic profile page 
//  s == 2 ---> menstrual health page and so one and to go back we will decrese the value of s by 1 

//  and all will be handled under the url /onboarding only thorugh this it was easy to handle routing 