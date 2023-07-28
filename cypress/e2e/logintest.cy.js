/// <reference types="cypress"/>
import { LoginPage } from "./tests/loginpage"
import { Homepage } from "./tests/homepage"

const loginPage = new LoginPage()
const homepage = new Homepage()

it('TC_Login_01', () => {
    cy.visit('https://gor-pathology.web.app/')
    loginPage.enterUsername('test@kennect.io')
    loginPage.enterPassword('Qwerty@1234')
    loginPage.clickLogin()
    homepage.validateData()
    homepage.logoutUser()
    
  })

  it('TC_Login_02', () => {
    cy.visit('https://gor-pathology.web.app/')
    loginPage.enterUsername('test@test.io')
    loginPage.enterPassword('Qwerty@1234')
    loginPage.clickLogin()
    cy.contains('There is no user record').should('be.visible')
  
    
  })

  it('TC_Login_03', () => {
    cy.visit('https://gor-pathology.web.app/')
    loginPage.enterUsername('test@kennect.io')
    loginPage.enterPassword('Qwerty')
    loginPage.clickLogin()
    cy.contains('The password is invalid').should('be.visible')
    
  })

  it('TC_Login_04', () => {
    cy.visit('https://gor-pathology.web.app/')
    loginPage.enterUsername('test@test.io')
    loginPage.enterPassword('Qwerty')
    loginPage.clickLogin()
    cy.contains('There is no user record').should('be.visible')
  
  })
