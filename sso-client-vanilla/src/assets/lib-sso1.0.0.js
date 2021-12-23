// signup <-> login transition
// let container = document.getElementById('container')

// toggle = () => {
//     container.classList.toggle('sign-in')
//     container.classList.toggle('sign-up')
// }

// setTimeout(() => {
//     container.classList.add('sign-in')
// }, 200)

class SSOElement {

    id;
    app;

    constructor(divId, authorizeApp) {
        this.id = divId;
        this.app = authorizeApp;
    }

    initialize() {
        let rootDiv = document.getElementById(this.id);

        let containerDiv = document.createElement('div');
        containerDiv.id = "container";
        containerDiv.classList.add("container");

        // Forms Sectional
        let formSectionDiv = document.createElement('div');
        formSectionDiv.classList.add("row");

        // Sign up
        let signUpDiv = document.createElement('div');
        signUpDiv.classList.add("col");
        signUpDiv.classList.add("align-items-center");
        signUpDiv.classList.add("flex-col");
        signUpDiv.classList.add("sign-up");

        let _sdFormWrapper = document.createElement('div');
        _sdFormWrapper.classList.add("form-wrapper")
        _sdFormWrapper.classList.add("align-items-center");

        let _sdForm = document.createElement('div');
        _sdForm.classList.add("form");
        _sdForm.classList.add("sign-up");

        let _sdEmailInputDiv = document.createElement('div');
        _sdEmailInputDiv.classList.add("input-group");
        let _sdEmailI = document.createElement('i');
        _sdEmailI.classList.add("bx");
        _sdEmailI.classList.add("bx-mail-send");
        let _sdEmailInput = document.createElement('input');
        _sdEmailInput.type = "email";
        _sdEmailInput.placeholder = "Email";
        _sdEmailInputDiv.appendChild(_sdEmailI);
        _sdEmailInputDiv.appendChild(_sdEmailInput);

        let _sdPassInputDiv = document.createElement('div');
        _sdPassInputDiv.classList.add("input-group");
        let _sdPassI = document.createElement('i');
        _sdPassI.classList.add("bx");
        _sdPassI.classList.add("bxs-lock-alt");
        let _sdPassInput = document.createElement('input');
        _sdPassInput.type = "password";
        _sdPassInput.placeholder = "Password";
        _sdPassInputDiv.appendChild(_sdPassI);
        _sdPassInputDiv.appendChild(_sdPassInput);

        let _sdCPassInputDiv = document.createElement('div');
        _sdCPassInputDiv.classList.add("input-group");
        let _sdCPassI = document.createElement('i');
        _sdCPassI.classList.add("bx");
        _sdCPassI.classList.add("bxs-lock-alt");
        let _sdCPassInput = document.createElement('input');
        _sdCPassInput.type = "password";
        _sdCPassInput.placeholder = "Password";
        _sdCPassInputDiv.appendChild(_sdCPassI);
        _sdCPassInputDiv.appendChild(_sdCPassInput);

        let _sdButton = document.createElement('button');
        _sdButton.innerText = "Sign up";
        _sdButton.onclick = () => {
            // TODO
        }

        let _sdOptionsP = document.createElement('p');
        let _sdPLoginText = document.createElement('span');
        _sdPLoginText.innerText = "Already have an account?";
        let _sdPLoginLink = document.createElement('b');
        _sdPLoginLink.innerText = "Login here";
        _sdPLoginLink.classList.add("pointer");
        _sdPLoginLink.onclick = () => {
            containerDiv.classList.toggle('sign-in')
            containerDiv.classList.toggle('sign-up')
        }
        _sdOptionsP.appendChild(_sdPLoginText);
        _sdOptionsP.appendChild(_sdPLoginLink);

        _sdForm.appendChild(_sdEmailInputDiv);
        _sdForm.appendChild(_sdPassInputDiv);
        _sdForm.appendChild(_sdCPassInputDiv);
        _sdForm.appendChild(_sdButton);
        _sdForm.appendChild(_sdOptionsP);

        _sdFormWrapper.appendChild(_sdForm);

        signUpDiv.appendChild(_sdFormWrapper);
        // End Sign up

        // Login
        let loginDiv = document.createElement('div');
        loginDiv.classList.add("col");
        loginDiv.classList.add("align-items-center");
        loginDiv.classList.add("flex-col");
        loginDiv.classList.add("sign-in");

        let _lFormWrapper = document.createElement('div');
        _lFormWrapper.classList.add("form-wrapper")
        _lFormWrapper.classList.add("align-items-center");

        let _lForm = document.createElement('div');
        _lForm.classList.add("form");
        _lForm.classList.add("sign-in");

        let _lEmailInputDiv = document.createElement('div');
        _lEmailInputDiv.classList.add("input-group");
        let _lEmailI = document.createElement('i');
        _lEmailI.classList.add("bx");
        _lEmailI.classList.add("bx-mail-send");
        let _lEmailInput = document.createElement('input');
        _lEmailInput.type = "email";
        _lEmailInput.placeholder = "Email";
        _lEmailInputDiv.appendChild(_lEmailI);
        _lEmailInputDiv.appendChild(_lEmailInput);

        let _lPassInputDiv = document.createElement('div');
        _lPassInputDiv.classList.add("input-group");
        let _lPassI = document.createElement('i');
        _lPassI.classList.add("bx");
        _lPassI.classList.add("bxs-lock-alt");
        let _lPassInput = document.createElement('input');
        _lPassInput.type = "password";
        _lPassInput.placeholder = "Password";
        _lPassInputDiv.appendChild(_lPassI);
        _lPassInputDiv.appendChild(_lPassInput);

        let _lButton = document.createElement('button');
        _lButton.innerText = "Login";
        _lButton.onclick = () => {
            // TODO
        }

        let _lOptionsPReset = document.createElement('p');
        let _lPResetLink = document.createElement('b');
        _lPResetLink.innerText = "Forgot password?";
        _lPResetLink.classList.add("pointer");
        _lPResetLink.onclick = () => {
            // TODO
        }
        _lOptionsPReset.appendChild(_lPResetLink);

        let _lOptionsP = document.createElement('p');
        let _lPLoginText = document.createElement('span');
        _lPLoginText.innerText = "Don't have an account?";
        let _lPLoginLink = document.createElement('b');
        _lPLoginLink.innerText = "Register here";
        _lPLoginLink.classList.add("pointer");
        _lPLoginLink.onclick = () => {
            containerDiv.classList.toggle('sign-in')
            containerDiv.classList.toggle('sign-up')
        }
        _lOptionsP.appendChild(_lPLoginText);
        _lOptionsP.appendChild(_lPLoginLink);

        _lForm.appendChild(_lEmailInputDiv);
        _lForm.appendChild(_lPassInputDiv);
        _lForm.appendChild(_lButton);
        _lForm.appendChild(_lOptionsPReset);
        _lForm.appendChild(_lOptionsP);

        _lFormWrapper.appendChild(_lForm);

        loginDiv.appendChild(_lFormWrapper);
        // End Login

        formSectionDiv.appendChild(signUpDiv);
        formSectionDiv.appendChild(loginDiv);
        // End Form Sectional

        // Transitions
        let bkgDiv = document.createElement('div');
        bkgDiv.classList.add("row");
        bkgDiv.classList.add("content-row");

        let bkgDivL = document.createElement('div');
        bkgDivL.classList.add("col");
        bkgDivL.classList.add("align-items-center");
        bkgDivL.classList.add("flex-col");
        let bkgDivLH = document.createElement('div');
        bkgDivLH.classList.add("text");
        bkgDivLH.classList.add("sign-in");
        let bkgDivLHT = document.createElement('h2');
        bkgDivLHT.innerText = "Welcome";
        bkgDivLH.appendChild(bkgDivLHT);
        let bkgDivLD = document.createElement('div');
        bkgDivLD.classList.add("img");
        bkgDivLD.classList.add("sign-in");
        bkgDivL.appendChild(bkgDivLH);
        bkgDivL.appendChild(bkgDivLD);

        let bkgDivS = document.createElement('div');
        bkgDivS.classList.add("col");
        bkgDivS.classList.add("align-items-center");
        bkgDivS.classList.add("flex-col");
        let bkgDivSH = document.createElement('div');
        bkgDivSH.classList.add("text");
        bkgDivSH.classList.add("sign-up");
        let bkgDivSHT = document.createElement('h2');
        bkgDivSHT.innerText = "Join us";
        bkgDivSH.appendChild(bkgDivSHT);
        let bkgDivSD = document.createElement('div');
        bkgDivSD.classList.add("img");
        bkgDivSD.classList.add("sign-up");
        bkgDivS.appendChild(bkgDivSD);
        bkgDivS.appendChild(bkgDivSH);

        bkgDiv.appendChild(bkgDivL);
        bkgDiv.appendChild(bkgDivS);
        // End transitions

        containerDiv.appendChild(formSectionDiv);
        containerDiv.appendChild(bkgDiv);

        containerDiv.classList.add('sign-in')

        rootDiv.appendChild(containerDiv);
    }
}

{/* <div id="container" class="container">
        <!-- FORM SECTION -->
        <div class="row">
            <!-- SIGN UP -->
            <div class="col align-items-center flex-col sign-up">
                <div class="form-wrapper align-items-center">
                    <div class="form sign-up">
                        <!-- <div class="input-group">
                            <i class='bx bxs-user'></i>
                            <input type="text" placeholder="Username">
                        </div> -->
                        <div class="input-group">
                            <i class='bx bx-mail-send'></i>
                            <input type="email" placeholder="Email">
                        </div>
                        <div class="input-group">
                            <i class='bx bxs-lock-alt'></i>
                            <input type="password" placeholder="Password">
                        </div>
                        <div class="input-group">
                            <i class='bx bxs-lock-alt'></i>
                            <input type="password" placeholder="Confirm password">
                        </div>
                        <button>
                            Sign up
                        </button>
                        <p>
                            <span>
                                Already have an account?
                            </span>
                            <b onclick="toggle()" class="pointer">
                                Login here
                            </b>
                        </p>
                    </div>
                </div>

            </div>
            <!-- END SIGN UP -->
            <!-- SIGN IN -->
            <div class="col align-items-center flex-col sign-in">
                <div class="form-wrapper align-items-center">
                    <div class="form sign-in">
                        <div class="input-group">
                            <i class='bx bxs-user'></i>
                            <input type="email" placeholder="Email">
                        </div>
                        <div class="input-group">
                            <i class='bx bxs-lock-alt'></i>
                            <input type="password" placeholder="Password">
                        </div>
                        <button>
                            Login
                        </button>
                        <p>
                            <b>
                                Forgot password?
                            </b>
                        </p>
                        <p>
                            <span>
                                Don't have an account?
                            </span>
                            <b onclick="toggle()" class="pointer">
                                Register here
                            </b>
                        </p>
                    </div>
                </div>
                <div class="form-wrapper">

                </div>
            </div>
            <!-- END SIGN IN -->
        </div>
        <!-- END FORM SECTION -->
        <!-- CONTENT SECTION -->
        <div class="row content-row">
            <!-- SIGN IN CONTENT -->
            <div class="col align-items-center flex-col">
                <div class="text sign-in">
                    <h2>
                        Welcome
                    </h2>

                </div>
                <div class="img sign-in">

                </div>
            </div>
            <!-- END SIGN IN CONTENT -->
            <!-- SIGN UP CONTENT -->
            <div class="col align-items-center flex-col">
                <div class="img sign-up">

                </div>
                <div class="text sign-up">
                    <h2>
                        Join us
                    </h2>

                </div>
            </div>
            <!-- END SIGN UP CONTENT -->
        </div>
        <!-- END CONTENT SECTION -->
    </div> */}