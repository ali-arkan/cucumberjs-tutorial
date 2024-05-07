/*
Feature: Add Functionality in Application

    This feature will add two numbers and display the sum of the both numbers
Scenario: Adding two numbers
Given Numbers are provided
When Sum up both numbers here
Then Display sum of Numbers
*/

const {Given, When, Then}= require('@cucumber/cucumber')


Given('Numbers are provided', function () {
    num1 = 5;
    num2 = 10;
    return console.log('Numbers are:'+' '+num1+' '+'and'+' '+num2);
    });



When('Sum up both numbers here', function () {
    sum = num1 + num2;
    return console.log('Addition is performed here');
    });



Then('Display sum of Numbers', function () {
    
    return console.log('Sum of numbers are:'+' '+sum);
    });