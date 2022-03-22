class MemberLogin  {

    async inputMember(email, password){
        const emailMember = $('//*[@resource-id="com.loginmodule.learning:id/textInputEditTextEmail"]');
        await emailMember.setValue(email);

        const passwdMember = $('//*[@resource-id="com.loginmodule.learning:id/textInputEditTextPassword"]');
        await passwdMember.setValue(password);  

    }

    async tapBtnLogin(){
        const btnLogin = $('//*[@text="LOGIN"]');
        await btnLogin.click();
    }

}

module.exports = new MemberLogin();