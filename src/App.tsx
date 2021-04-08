import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Login} from "./n2-features/f1-auth/a1-login/Login";
import {Register} from "./n2-features/f1-auth/a2-register/Register";
import {Profile} from "./n2-features/f3-profile/Profile";
import Error404 from "./n2-features/f2-error404/Error404";
import {RestorePassword} from "./n2-features/f4-password/RestorePassword";
import {EnterPassword} from "./n2-features/f4-password/EnterPassword";
import {Main} from "./n1-main/m1-ui/Main/Main";
import {TestPage} from "./n2-features/f0-test/TestPage";

export const LOGIN_PATH = "/login";
export const REGISTER_PATH = "/register";
export const PROFILE_PATH = "/profile";
export const RESTORE_PASS_PATH = "/restore-pass";
export const ENTER_PASS_PATH = "/enter-pass";
export const TEST_PAGE_PATH = "/test";

const App = () => {
    return (
        <div className="App">

            <Main/>
            <div>
                {/*<Header Nikolai's branch/>*/}
                <Switch>
                    <Route exact path={"/"} render={() => <Profile/>}/>
                    <Route path={LOGIN_PATH} render={() => <Login/>}/>
                    <Route path={REGISTER_PATH} render={() => <Register/>}/>
                    <Route path={PROFILE_PATH} render={() => <Profile/>}/>
                    <Route path={RESTORE_PASS_PATH} render={() => <RestorePassword/>}/>
                    <Route path={ENTER_PASS_PATH} render={() => <EnterPassword/>}/>
                    <Route path={TEST_PAGE_PATH} render={() => <TestPage/>}/>
                    <Route render={() => <Error404/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
