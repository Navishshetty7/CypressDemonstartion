/// <reference types="cypress"/>
import { LoginPage } from "./tests/loginpage"
import { Homepage } from "./tests/homepage"
import { PatientTests } from "./tests/patientests"

const patientests = new PatientTests()
const loginPage = new LoginPage()
const homepage = new Homepage()

it('TC_ADDP_02', () => {
    cy.visit('https://gor-pathology.web.app/')
    loginPage.enterUsername('test@kennect.io')
    loginPage.enterPassword('Qwerty@1234')
    loginPage.clickLogin()
    patientests.addPatientNoname('test@test.io' ,'8377363667')
    cy.contains('Patient name is required').should('be.visible')
    homepage.logoutUser()
    
  })

  it('TC_ADDP_03', () => {
    cy.visit('https://gor-pathology.web.app/')
    loginPage.enterUsername('test@kennect.io')
    loginPage.enterPassword('Qwerty@1234')
    loginPage.clickLogin()
    patientests.addPatientNophone('test' ,'test@test.io')
    cy.contains('Required').should('be.visible')
    homepage.logoutUser()

  })

  it('TC_ADDP_04', () => {
    cy.visit('https://gor-pathology.web.app/')
    loginPage.enterUsername('test@kennect.io')
    loginPage.enterPassword('Qwerty@1234')
    loginPage.clickLogin()
    patientests.addPatientdetails('test@test.io' ,'8377363667' ,'test')
    patientests.addPatientgeneraldetailsnoHeight('100', '21')
    cy.contains('Enter patients height').should('be.visible')
    homepage.logoutUser()

  })

  it('TC_ADDP_05', () => {
    cy.visit('https://gor-pathology.web.app/')
    loginPage.enterUsername('test@kennect.io')
    loginPage.enterPassword('Qwerty@1234')
    loginPage.clickLogin()
    patientests.addPatientdetails('test@test.io' ,'8377363667' ,'test')
    patientests.addPatientgeneraldetailsnoweight('100', '21')
    cy.contains('Enter patients weight').should('be.visible')
    homepage.logoutUser()

  })

