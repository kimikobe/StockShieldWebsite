import { action } from "mobx";
import StateStore from "../store/StateStore";

export default class StateActions{

    @action
    static setLogin() {
       
        StateStore.isLogon = true;
    }

}