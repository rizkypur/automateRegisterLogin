class RegisterNewMember  {

    async regMember(name, email, pass, confPass){
        const btnCreate = $('//*[@resource-id="com.loginmodule.learning:id/textViewLinkRegister"]');
        await btnCreate.click();

        const txtName = $('//*[@resource-id="com.loginmodule.learning:id/textInputEditTextName"]');
        await txtName.setValue(name)

        const txtEmail = $('//*[@resource-id="com.loginmodule.learning:id/textInputEditTextEmail"]');
        await txtEmail.setValue(email);

        const passwd = $('//*[@resource-id="com.loginmodule.learning:id/textInputEditTextPassword"]');
        await passwd.setValue(pass);

        const confPasswd = $('//*[@resource-id="com.loginmodule.learning:id/textInputEditTextConfirmPassword"]');
        await confPasswd.setValue(confPass);

        const btnReg = $('//*[@resource-id="com.loginmodule.learning:id/appCompatButtonRegister"]');
        await btnReg.click();

        await driver.pause(2000);

    }

}

module.exports = new RegisterNewMember();