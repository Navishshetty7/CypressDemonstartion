export class LoginPage{

    enterUsername(email){
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type(email)
        
        
    }
    
    enterPassword(password){
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(password)
    }
    
    clickLogin(){
        cy.get('.jss9 > .MuiButton-contained > .MuiButton-label').click()
        
    }
}