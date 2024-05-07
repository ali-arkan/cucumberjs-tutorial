Feature: Total Amount Calculation

@totalAmount
Scenario: Total due amount
Given I buy drilling tool worth $200
When I buy the plant worth $5
Then Total due amount is $210