export class PatientTests{

    addPatientNoname(email, phone){
        
        cy.xpath(`//a[contains(@href,'/tests')]`).click({force: true})
        cy.xpath(`//a[contains(@href,'/patients/add')]`).click({force: true})
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='email']`).type(email)
        //cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='name']`).type(name)
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='phone']`).type(phone)
        cy.xpath(`//span[contains(@class, 'MuiButton-label') and text()='General Details']`).click({force: true})
        
        
    }

    addPatientNophone(name, email){
        
        cy.xpath(`//a[contains(@href,'/tests')]`).click({force: true})
        cy.xpath(`//a[contains(@href,'/patients/add')]`).click({force: true})
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='email']`).type(email)
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='name']`).type(name)
        //cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='phone']`).type(phone)
        cy.xpath(`//span[contains(@class, 'MuiButton-label') and text()='General Details']`).click({force: true})
        
        
        
    }

    addPatientdetails(email, phone, name){
        
        cy.xpath(`//a[contains(@href,'/tests')]`).click({force: true})
        cy.xpath(`//a[contains(@href,'/patients/add')]`).click({force: true})
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='email']`).type(email)
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='name']`).type(name)
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='phone']`).type(phone)
        cy.xpath(`//span[contains(@class, 'MuiButton-label') and text()='General Details']`).click({force: true})
        
        
    }

    addPatientgeneraldetailsnoHeight(weight, age){
        
        cy.wait(3000);
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='weight']`).type(weight);
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='age']`).type(age);
        cy.wait(3000)
        cy.xpath(`//div[contains(@aria-labelledby,'select-gender')]`).click()
        cy.get('[data-value="male"]').click()
        cy.xpath(`//button[contains(@class,'MuiButton-contained') and @type='button']`).click({force: true})
        
    }
    addPatientgeneraldetailsnoweight(height, age){
        
        cy.wait(3000);
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='height']`).type(height);
        cy.xpath(`//input[contains(@class,'MuiInputBase-input') and @name='age']`).type(age);
        cy.wait(3000)
        cy.xpath(`//div[contains(@aria-labelledby,'select-gender')]`).click()
        cy.get('[data-value="male"]').click()
        cy.xpath(`//button[contains(@class,'MuiButton-contained') and @type='button']`).click({force: true})
        
    }
}