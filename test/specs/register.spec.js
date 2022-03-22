const regNewMember = require('../page objects/register.object');

describe('Automate App Register & Login', () => {
    afterEach( async () => {
        await driver.back();
    });

    it('Register App with Valid Credential', async () => {

       await regNewMember.regMember(
           "Aleph Test",
           "aleph.test@mail.com",
           "at2022_",
           "at2022_"
       );

        const txtSuccess = $('//*[@text="Registration Successful"]');
        await expect(txtSuccess).toBeDisplayed();

        await driver.pause(5000);
        
    });

    it('Register App without Input a Name', async () => {

        await regNewMember.regMember(
            "",
            "aleph.test.com",
            "at2022_",
            "at2022_"
        );
 
         //Assertion Text Enter Full Name should be Displayed
         const txtEnterValidEmail = $('//*[@text="Enter Full Name"]');
         await expect(txtEnterValidEmail).toBeDisplayed();
 
         await driver.pause(5000);
         
     });

    it('Register App with Invalid Email format', async () => {

        await regNewMember.regMember(
            "Aleph Test",
            "aleph.test.com",
            "at2022_",
            "at2022_"
        );


         //Assertion Text Enter Valid Email should be Displayed
         const txtEnterValidEmail = $('//*[@text="Enter Valid Email"]');
         await expect(txtEnterValidEmail).toBeDisplayed();

 
         await driver.pause(5000);
         
     });
});