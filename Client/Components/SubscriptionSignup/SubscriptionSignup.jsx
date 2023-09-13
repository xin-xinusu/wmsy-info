import React, { useEffect, useContext } from 'react';
import axios from 'axios';

import { GlobalContext } from '../../contexts/global.provider'
import { setEmail, setResponseMessage, setAlreadySubscribed } from '../../contexts/actions/subscriber.action'

import WindowContext from '../../contexts/window.context';
import { COLORS } from '../../utils/constants';
import { deviceDimensionToNumber } from '../../utils/strings';
import { Button, ButtonSizes } from '../Button';
import { InputField } from '../InputField/InputField';
import { TVariant, TWeight, Typography } from '../Typography';

import { 
  SubscriptionSignupHolder,
  EmailAddressInput,
  AlreadySubscribedHolder
} from './SubscriptionSingupStyles'

import {
  DeviceDimensions,
  setLocalStorageItem,
  fetchLocalStorageItem,
  removeLocalStorageItem
} from '../../utils';

export const SubscriptionSignup = () => {
  const { windowSize } = useContext(WindowContext);
  const { 
    subscriberState: {
      responseMessage,
      signup: { email },
      status: { alreadySubscribed }
    },
    subscriberDispatch
  } = useContext(GlobalContext);

  const fullWidth =
    deviceDimensionToNumber(windowSize) <
    deviceDimensionToNumber(DeviceDimensions.MinLaptopWidth); // 1024

  const handleSubmit = async() => {
    // check if email passes checks for @ and .
    if(email.includes("@") && email.includes(".")){
      try {
        // submit to api - to be saved
        const response = await axios.post('/api/email-subscription', { email });
        setAlreadySubscribed(true)(subscriberDispatch)
        setResponseMessage(response.data.message)(subscriberDispatch);
        setLocalStorageItem('subscribed', true)
      } catch (error) {
        setLocalStorageItem('subscribed', false)
        setResponseMessage("Subscription failed, please try again")(subscriberDispatch)
      }
    } else { 
      setResponseMessage('Please enter a valid email address')(subscriberDispatch)
    }
  }

  const handleInput = (value) => {
    if(responseMessage){
      setResponseMessage(null)(subscriberDispatch)
    }
    setEmail(value)(subscriberDispatch)
  }

  const subscribeWithNewEmail = () => {
    // clear any previous response message
    setResponseMessage('')(subscriberDispatch)
    // clear page state 
    setAlreadySubscribed(false)(subscriberDispatch)
    // clear subscibed localstorge item
    removeLocalStorageItem('subscribed')
  }

  useEffect(() => {
    // when page loads check if device has subscribed
    const isSubscribed = fetchLocalStorageItem('subscribed')
    // set page state
    setAlreadySubscribed(isSubscribed)(subscriberDispatch)
  }, [0]);

  return (
    <SubscriptionSignupHolder>
      
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
    </SubscriptionSignupHolder>
  );
};
