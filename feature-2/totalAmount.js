
/*
Feature: Calculare total amount

Scenario: Total due amount
Given I buy drilling tool worth $200
When I buy the plant worth $5
Then Total due amount is $205
*/

const{Before, Given, When, Then}= require('@cucumber/cucumber')

let x

Given('I buy drilling tool worth ${int}',function(int){
    x= int;
});


When('I buy the plant worth ${int}',function(int){
    x= x+int;
});


Then('Total due amount is ${int}',function(int){
    console.log(x)

});
