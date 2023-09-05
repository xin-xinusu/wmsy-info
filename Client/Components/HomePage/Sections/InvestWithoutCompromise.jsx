import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';

import WindowContext from '../../../contexts/window.context';
import { COLORS } from '../../../utils/constants';
import { deviceDimensionToNumber } from '../../../utils/strings';
import { HOME_PAGE_TEXT } from '../../../utils/texts';
import { Button, ButtonSizes } from '../../Button';
import { InputField } from '../../InputField/InputField';
import { TVariant, TWeight, Typography } from '../../Typography';
import {
  EmailAddressInput,
  InvestWithoutCompromiseSection,
  AlreadySubscribedHolder
} from '../HomePageStyles.js';
import { 
  DeviceDimensions,
  setLocalStorageItem,
  fetchLocalStorageItem,
  removeLocalStorageItem
} from '../../../utils';

export const InvestWithoutCompromise = () => {
  const { windowSize } = useContext(WindowContext);
  const [ email, setEmail ] = useState ('')
  const [ alreadySubscribed, setAlreadySubscribed ] = useState(false)
  const [ responseMessage, setResponseMessage ] = useState(null)

  const fullWidth =
    deviceDimensionToNumber(windowSize) <
    deviceDimensionToNumber(DeviceDimensions.MinLaptopWidth); // 1024

  const handleSubmit = async() => {
    // check if email passes checks for @ and .
    if(email.includes("@") && email.includes(".")){
      try {
        // submit to api - to be saved
        const response = await axios.post('/api/email-subscription', { email });
        setAlreadySubscribed(true)
        setResponseMessage(response.data.message)
      } catch (error) {
        setLocalStorageItem('subscribed', false)
        setResponseMessage("Subscription failed, please try again later")
      }
    } else { 
      setResponseMessage('Please enter a valid email address')
    }
  }

  const handleInput = (value) => {
    if(responseMessage){
      setResponseMessage(null)
    }
    setEmail(value)
  }

  const subscribeWithNewEmail = () => {
    // clear any previous response message
    setResponseMessage('')
    // clear page state 
    setAlreadySubscribed(false)
    // clear subscibed localstorge item
    removeLocalStorageItem('subscribed')
  }

  useEffect(() => {
    // when page loads check if device has subscribed
    const isSubscribed = fetchLocalStorageItem('subscribed')
    // set page state
    setAlreadySubscribed(isSubscribed)
  }, [0]);

  return (
    <InvestWithoutCompromiseSection>
      <Typography variant={TVariant.L} weight={TWeight.BOLD}>
        Invest without compromise.
      </Typography>
      <Typography variant={TVariant.XM} weight={TWeight.LIGHT}>
        {HOME_PAGE_TEXT.investWithoutCompromiseText}
      </Typography>
      {
        !alreadySubscribed && responseMessage
          ? <Typography
                variant={TVariant.S}
                color={COLORS.RED}
                weight={TWeight.BOLD}
              >{responseMessage}</Typography>
          : null
      }
      {
        !alreadySubscribed
          ? <EmailAddressInput>
            <InputField 
              placeholder="Your e-mail address"
              onChange={(e)=>handleInput(e.target.value)}
            ></InputField>
            <Button 
              onClick={handleSubmit}
              size={ButtonSizes.XS2} 
              fullWidth={fullWidth}
            >
              <Typography
                variant={TVariant.M}
                color={COLORS.WHITE}
                weight={TWeight.BOLD}
              >
                Join Here
              </Typography>
            </Button>
          </EmailAddressInput>
          : <AlreadySubscribedHolder>
            <Typography 
              variant={TVariant.M} 
              weight={TWeight.LIGHT}
              color={COLORS.RED}
            >
              {responseMessage ? responseMessage : "You are already subscribed"}
            </Typography>
            <Button 
              onClick={subscribeWithNewEmail}
              size={ButtonSizes.XS2} 
              fullWidth={fullWidth}
            >
              <Typography
                variant={TVariant.M}
                color={COLORS.WHITE}
                weight={TWeight.BOLD}
              >
                Add New Subscription Address
              </Typography>
            </Button>
          </AlreadySubscribedHolder>
      }
      
    </InvestWithoutCompromiseSection>
  );
};
