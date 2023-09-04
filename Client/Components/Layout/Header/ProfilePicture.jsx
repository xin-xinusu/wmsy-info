import { useRouter } from "next/router";
import Account from "../../../../assets/svg/Account.svg";
import { Pages } from "../../../utils";
import { Loading } from "../../Loading";
import { UserIcon, UserIconContainer } from "./HeaderStyles";

const ProfilePicture = ({ picture, user, loading }) => {
  if (loading) {
    return <Loading />;
  }

  const router = useRouter();
  const goToProfile = () => router.push(Pages.ACCOUNT);
  const profilePictureSize = 40;

  return (
    <>
      {picture ? (
        <UserIconContainer onClick={goToProfile}>
          <UserIcon
            src={picture}
            alt={user.charAt(0)}
            width={profilePictureSize}
            height={profilePictureSize}
          />
        </UserIconContainer>
      ) : (
        <Account />
      )}
    </>
  );
};

export default ProfilePicture