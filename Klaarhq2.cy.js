///<reference types ='cypress' />
Cypress.on('uncaught:exception',(err,runnable) =>{
    return false
})

describe('Klaarhq',()=>{
    it('KlaarWebsite',()=>{
       
       cy.visit('https://dev.klaarhq.com/auth/sign_in?returnUrl=%2Fprofile')
        cy.viewport(1366, 768)
        cy.wait(4000)

        //1.Login Test
        //Negative emailid and password
        //email
        cy.get('[data-cy="login-email-text-field"]').type('selva.ganesh@gamma.klaar.team')
        //Password
        cy.get('[data-cy="login-password-text-field"]').type('Selva2021')
        //Login
        cy.get("#login-btn").click({force:true})
        cy.wait(2000)

        //Positive emailid and password
        //email
        cy.get('[data-cy="login-email-text-field"]').clear()
        .type('deepa.nayak@gamma.klaar.team')
        //Password
        cy.get('[data-cy="login-password-text-field"]').clear()
        .type('Klaar2021')
        //Login
        cy.get("#login-btn").click({force:true})
        cy.wait(2000)

        //setting 
        cy.get('[data-cy="settings-nav-menu-button"] > .tw-h-14').click({force:true})

       //2.Wordspace Settings            
       cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(1) > [data-cy="submenu-button"]')
       .click({force:true})
      
       cy.wait(5000)
       //file upload
       cy.get('.mt-8')
       .attachFile("cypress 101.png", {subjectType:'drag-n-drop'});

       cy.wait(5000)

       // Delete file
        cy.get('[data-cy="settings-workspace-logo-cancel-upload-button"]')
        .click({force:true})

       //3.Customize modules        
       cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(2) > [data-cy="submenu-button"]')
       .click()
       
       //My Strength Switch on
       cy.get('body > div.main-app > app-root > app-layout > nz-layout > nz-layout > nz-content > div > app-aspiration-settings > div > nz-card:nth-child(3) > div.ant-card-body > div:nth-child(1) > div.aspiration-actions.ant-col.ant-col-lg-6.ant-col-xl-5 > nz-switch > button > span.ant-switch-handle')
       .click({force:true})
       cy.wait(4000)

       //Profile

       //My Strength Switch off
       cy.get('body > div.main-app > app-root > app-layout > nz-layout > nz-layout > nz-content > div > app-aspiration-settings > div > nz-card:nth-child(3) > div.ant-card-body > div:nth-child(1) > div.aspiration-actions.ant-col.ant-col-lg-6.ant-col-xl-5 > nz-switch > button > span.ant-switch-handle')
       .click({force:true})
       cy.wait(4000)
       
       //My Skill Switch on
       cy.get('body > div.main-app > app-root > app-layout > nz-layout > nz-layout > nz-content > div > app-aspiration-settings > div > nz-card:nth-child(3) > div.ant-card-body > div:nth-child(2) > div.aspiration-actions.ant-col.ant-col-lg-6.ant-col-xl-5 > nz-switch > button > span.ant-switch-handle')
       .click({force:true})
       cy.wait(4000)

       //My Skill Switch off
       cy.get('body > div.main-app > app-root > app-layout > nz-layout > nz-layout > nz-content > div > app-aspiration-settings > div > nz-card:nth-child(3) > div.ant-card-body > div:nth-child(2) > div.aspiration-actions.ant-col.ant-col-lg-6.ant-col-xl-5 > nz-switch > button > span.ant-switch-handle')
       .click({force:true})
       cy.wait(4000)

       //Health Switch on
       cy.get('body > div.main-app > app-root > app-layout > nz-layout > nz-layout > nz-content > div > app-aspiration-settings > div > div:nth-child(9) > div.tab-switch.ant-col.ant-col-lg-6.ant-col-xl-5 > nz-switch > button > span.ant-switch-handle')
       .click({force:true})
       cy.wait(4000)

       //Health Switch off
       cy.get('body > div.main-app > app-root > app-layout > nz-layout > nz-layout > nz-content > div > app-aspiration-settings > div > div:nth-child(9) > div.tab-switch.ant-col.ant-col-lg-6.ant-col-xl-5 > nz-switch > button > span.ant-switch-handle')
       .click({force:true})
       cy.wait(4000)

       //4.User Setting         
       cy.get(':nth-child(3) > [data-cy="submenu-button"]').click()
       cy.wait(2000)
       cy.get('.tw-justify-end > .ant-dropdown-trigger').trigger('mouseover').click({force:true})
       
       //cy.get('#cdk-overlay-12 > div > ul > li:nth-child(1)').click({force:true})
    
       //Click Add User
       cy.contains('Add User').click({force:true})

       //name
       cy.get('[data-cy="settings-add-user-full-name-text-field"]')
       .type('SelvaMan')

       //email
       cy.get('[data-cy="settings-add-user-email-text-field"]')
       .type('selva.man123@gamma.klaar.team')

       //department
       cy.get('[data-cy="settings-add-user-select-department-dropdown-area"] > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input')
       .type('Software').type('{enter}')

       //title
       cy.get('[data-cy="settings-add-user-select-title-dropdown-area"] > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input')
       .type('Software Dude').type('{enter}')

       //manager
       cy.get('[data-cy="settings-add-user-select-manager-dropdown-area"] > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input')
       .type('Alex Richards (alex.richards@gamma.klaar.team)').type('{enter}')

       //user id
       cy.get('[data-cy="settings-add-user-id-text-field"]')
       .type('543210')

       //location
       cy.get('[data-cy="settings-add-user-location-text-field"]')
       .type('Tirupur')

       //hrpf
       cy.get('[data-cy="settings-add-user-select-hrbp-dropdown-area"] > .ant-select-selector')
       .type('Alex Richards (alex.richards@gamma.klaar.team)').type('{enter}')

       // add now
       cy.get('[data-cy="modal-submit-button"]')
       .click({force:true})

       cy.wait(5000)

       //type in the search box
       cy.get('[data-cy="user-list-search-text-field"]')
       .type('SelvaMan')

       //click selvaman
       cy.get(':nth-child(3) > [data-cy="user-list-user-email-field"] > .tw-flex.ng-star-inserted > .tw-self-center')
       .click({force:true})

       cy.wait(5000)

       //update name
       cy.get('[data-cy="settings-edit-user-personal-info-full-name-text-field"]').clear()
       .type('SelvaSir')

       //update email
       cy.get('[data-cy="settings-edit-user-personal-info-company-email-text-field"]').clear()
       .type('selva.Sir@gamma.klaar.team')

       //click save
       cy.get('[data-cy="settings-edit-user-save-button"] > .ng-star-inserted')
       .click({force:true})

       //5.User Custom Fields       

       //1.	Navigate to the Settings module
       cy.get('[data-cy="settings-nav-menu-button"] > .tw-h-14').click()

       //2.	Navigate to the User list page
       cy.get(':nth-child(3) > [data-cy="submenu-button"]').click()
       cy.wait(2000)

       //3.	Navigate to the User fields page
       cy.get(':nth-child(3) > .ant-tabs-tab-btn').click()

       //User Custom Fields

       // type Name in Custom Field
       cy.get(':nth-child(1) > :nth-child(2) > [data-cy="settings-user-fields-custom-field-name-text-area"]')
       .type('SelvaSir')

       //Click Enabled
       cy.get(':nth-child(1) > :nth-child(3) > [data-cy="settings-user-fields-custom-field-switch-button"] > .ant-switch > .ant-switch-handle')
       .click()

       //click disable
       //cy.get(':nth-child(2) > :nth-child(3) > [data-cy="settings-user-fields-custom-field-switch-button"] > .ant-switch > .ant-switch-handle')
       //.click()

       //click delete
       cy.get(':nth-child(2) > :nth-child(4) > [data-cy="settings-user-fields-custom-field-delete-button"] > svg')
       .click({force:true}) 

       //6.Verify workspace settings     

       //1.	Navigate to the Settings module
       cy.get('[data-cy="settings-nav-menu-button"] > .tw-h-14').click()

       //2.Navigate to the Workspace
       cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(1) > [data-cy="submenu-button"]')
       .click({force:true})

       cy.wait(5000)
       

       //3. Verify workspace name
       cy.get('.user-name')
       .should('have.text','Deepa Nayak').and('be.visible')

     
       
        

    })
})
