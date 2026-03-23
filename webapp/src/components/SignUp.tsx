import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faGoogle, faArrowRight } from '@fortawesome/free-solid-svg-icons'
} from 'firebase/auth';
import { auth } from 'A/firebase';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950"/>
  );
}

export default SignUp;
