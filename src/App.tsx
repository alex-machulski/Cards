import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Login} from "./n2-features/f1-auth/a1-login/Login";
import {Register} from "./n2-features/f1-auth/a2-register/Register";
import {Profile} from "./n2-features/f3-profile/Profile";
import Error404 from "./n2-features/f2-error404/Error404";
import {RestorePassword} from "./n2-features/f4-password/RestorePassword";
import {EnterPassword} from "./n2-features/f4-password/EnterPassword";
import {Main} from "./n1-main/m1-ui/Main/Main";
import {TestPage} from "./n2-features/f0-test/TestPage";

function App() {
    return (
        <div className="App">
            {/*//hr provider*/}
            <Main/>
            <div>
                {/*<Header/>*/}
                {/*<Main/>*/}
                <Route path={"/login"} render={() => <Login/>}/>
                <Route path={"/register"} render={() => <Register/>}/>
                <Route path={"/profile"} render={() => <Profile/>}/>
                <Route path={"/404"} render={() => <Error404/>}/>
                <Route path={"/restore-pass"} render={() => <RestorePassword/>}/>
                <Route path={"/enter-pass"} render={() => <EnterPassword/>}/>
                <Route path={"/test"} render={() => <TestPage/>}/>
            </div>
        </div>
    );
}

export default App;
