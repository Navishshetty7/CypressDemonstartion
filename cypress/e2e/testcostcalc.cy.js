/// <reference types="cypress"/>
import { LoginPage } from "./tests/loginpage"
import { Homepage } from "./tests/homepage"
//import { PatientTests } from "./tests/patientests"

//const patientests = new PatientTests()
const loginPage = new LoginPage()
const homepage = new Homepage()

it('TC_TestCalc_01', () => {
    cy.visit('https://gor-pathology.web.app/')
    loginPage.enterUsername('test@kennect.io')
    loginPage.enterPassword('Qwerty@1234')
    loginPage.clickLogin()
    homepage.validateData()
    homepage.validateCalculator()
    
  })

  it('TC_TestCalc_02', () => {
    cy.visit('https://gor-pathology.web.app/')
    loginPage.enterUsername('test@kennect.io')
    loginPage.enterPassword('Qwerty@1234')
    loginPage.clickLogin()
    homepage.validateData()
    homepage.validateCalculator()
    
  })