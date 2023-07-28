export class Homepage{

    validateData(){
        cy.wait(10)
        cy.get('.jss73').contains('TODO')
        cy.get('.jss77 > .MuiBox-root').contains('Test Cost Calculator')
    }

    logoutUser(){
        cy.get('.MuiAvatar-root').click()
        cy.xpath(`//div[starts-with(@class,'MuiAvatar-root MuiAvatar-circle') and text()='T']`).click({force: true})
        //cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.xpath(`//span[starts-with(@class,'MuiButton-label') and text()='Sign out of Lab']`).click({force: true})
    }

    validateCalculator(){
        //cy.get('').eq(0).type('AFP').trigger('input');
        cy.get('#patient-test').click()
        cy.get('#patient-test-option-1').click()
        cy.get('.MuiSelect-root').click()
        cy.get('[data-value="5"]').click()
        //cy.xpath(`//li[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button' and text()='5%']`)
        cy.xpath(`//div[starts-with(@class, 'MuiBox-root jss') and text()='332.5 ₹']`).contains('332.5 ₹')
    }

    addPatient(){
        
        
        cy.xpath(`//a[contains(@href,'/tests')]`).click()
        cy.wait(5000)
        cy.xpath(`//a[contains(@href,'/patients/add')]`).click({force: true})
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='name']`).type('Test')
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='email']`).type('test@gmail.com')
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='phone']`).type('8923837372')
        
        
    }

    
}