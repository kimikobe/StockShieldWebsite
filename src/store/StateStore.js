import { observable } from "mobx";

class StateStore {
    isLogon = false;
    @observable isLogin = false;
    @observable contentBody = null;
}

export default new StateStore();