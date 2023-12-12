import "../style/style_components/button-maxi.css";
import Title from "../components/Title";
import HeaderLongUser from "../components/HeaderLongUser";
import Input from "../components/Input";
import ButtonMaxi from "../components/ButtonMaxi";

function UserProfileUser() {
  return (
    <div className="user-profile-page">
      <HeaderLongUser />
      <div>
        <Title />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <ButtonMaxi />
      </div>
    </div>
  );
}

export default UserProfileUser;
