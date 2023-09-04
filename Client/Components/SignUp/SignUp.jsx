import { useMutation } from "@apollo/client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { REGISTER_CUSTOMER } from "../../graphql/register.mutation";
import { AUTH_PROVIDERS, NEXT_AUTH_STATUS } from "../../utils/authentication";
import { COLORS } from "../../utils/constants";
import { Pages } from "../../utils/pages";
import { Button } from "../Button";
import { InputField } from "../InputField";
import { TFont, TVariant, TWeight, Typography } from "../Typography";
import { ErrorSection, StyledRegisterContainer } from "./SignUpStyles";

const SignUp = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === NEXT_AUTH_STATUS.UNAUTHENTICATED) {
      signIn(AUTH_PROVIDERS.GOOGLE);
    }
  }, [session]);

  const [error, setError] = useState("");
  const [formState, setFormState] = useState({
    firstName: session.data.user.name.split(' ')[0],
    lastName: session.data.user.name.split(' ')[session.data.user.name.split(' ').length - 1]
  });
  const [register, { data: regData, loading: regLoading, error: regError }] =
    useMutation(REGISTER_CUSTOMER);

  const handleChange = (key) => (e) => {
    setFormState({ ...formState, [key]: e.target.value });
  };

  const handleRegister = () => {
    if (!formState.firstName || !formState.lastName) {
      setError("Please fill in all fields");
      return;
    }
    register({ variables: { data: { ...formState } } })
      .then(() => router.push(Pages.HOME))
      .catch((err) => {
        console.error(err);
        setError("Something went wrong");
      });
  };

  console.log('userSession :>> ', session.status === "authenticated", session.data);

  return (
    <StyledRegisterContainer>
      <Typography variant={TVariant.XL} font={TFont.LOGO} weight={TWeight.BOLD}>
        WMSY
      </Typography>
      <Typography variant={TVariant.M} weight={TWeight.BOLD}>
        Get Started
      </Typography>
      <Typography variant={TVariant.XM} weight={TWeight.LIGHT}>
        Create an account to access our portfolio
      </Typography>
      <InputField 
        label="First Name" 
        onChange={handleChange("firstName")}
        value={formState.firstName}
      />
      <InputField 
        label="Last Name" 
        onChange={handleChange("lastName")}
        value={formState.lastName}
      />
      <ErrorSection error={error !== ""}>
        <Typography variant={TVariant.B} color={COLORS.RED}>
          {error}
        </Typography>
      </ErrorSection>
      <Button onClick={handleRegister} fullWidth>
        <Typography color={COLORS.WHITE}>Sign Up</Typography>
      </Button>
    </StyledRegisterContainer>
  );
};

export default SignUp;
