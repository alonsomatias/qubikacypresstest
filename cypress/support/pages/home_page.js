export function openContactUs(){
    cy.get('li[class^="contact-us"]').click();
}

export function fieldFormat(value) {
    return 'label[for^="' + value + '"]';
}

export function validateErrorMessages(fieldNames, exist = true){
    fieldNames.forEach((fieldName) => {
        if(exist) {
          cy.get(fieldFormat(fieldName)).siblings('ul').children().children('label')
            .should('have.text', 'Please complete this required field.')
            .should('have.css', '-webkit-text-fill-color', 'rgb(255, 0, 0)');
        }
        else{
          cy.get(fieldFormat(fieldName)).siblings('ul').should('not.exist');
        }
    })
}

export function typeField(fieldName, value){
    cy.get(fieldFormat(fieldName)).siblings('div[class="input"]').children('input').type(value);
}

export function submitForm() {
    cy.get('input[type="submit"]').click()
}