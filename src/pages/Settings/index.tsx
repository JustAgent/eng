import { Header } from '../../components/Header';
import "./Settings.scss"

export function Settings(props) {
  return (
    <div className={"settings__container"}>
      <Header text={"Settings"}/>
      <div className="settings__wrapper">
        <ul className="settings__list">
          <li>
            Manipulate black list
          </li>
          <li>
            Verification
          </li>
          <li>
            Change the phone number
          </li>
          <li>
            Change password
          </li>
        </ul>
        <ul className="settings__list">
          <li>
            Log out
          </li>
          <li>
            Delete account
          </li>
        </ul>
      </div>
    </div>
  );
}
