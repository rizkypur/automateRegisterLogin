const memberLogin = require('../page objects/login.object');
const regNewMember = require('../page objects/register.object');

describe('Automte App Register & Login', () => {
    before( async () => {
        await regNewMember.regMember(
            "Aleph Test",
            "aleph.test@mail.com",
            "at2022_",
            "at2022_"
        );

        await driver.back();
        
    });

    it('Login with Valid Credential', async () => {

        await memberLogin.inputMember(
            "aleph.test@mail.com",
            "at2022_"
        );

        await memberLogin.tapBtnLogin();

        //Assertion for text should be show "Android NewLine Learning"    
        const txtHome = $('//*[@text="Android NewLine Learning"]');
        await expect(txtHome).toBeDisplayed();
                 	
        //Assertion for text should be show "Android NewLine Learning"    
        const txtHomeEmail = $('//*[@resource-id="com.loginmodule.learning:id/textViewEmail"]');
        await expect(txtHomeEmail).toHaveText("aleph.test@mail.com")

        await driver.pause(5000);

        await driver.back();
        
    });
    
    it('Login with Invalid Password', async () => {
        
        await memberLogin.inputMember(
            "aleph.test@mail.com",
            "at22_"
        );

        await memberLogin.tapBtnLogin();

        //Assertion for Error Message "Wrong Email or Password" 
        const txtWrong = $('//*[@text="Wrong Email or Password"]');
        await expect(txtWrong).toBeDisplayed();

        await driver.pause(5000);
      
        
    });

    it('Login without Input Email and Password', async () => {

        await memberLogin.inputMember(
            "",
            ""
        );
        
        await memberLogin.tapBtnLogin();

        //Assertion for Error Message "Enter Valid Email" 
        const txtNotValidEmail = $('//*[@text="Enter Valid Email"]');
        await expect(txtNotValidEmail).toBeDisplayed();

        await driver.pause(5000);
      
        
    });
 
         
     
});