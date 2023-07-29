import React from 'react';

const Process = () => {
  return (
    <div>
      <h2>How It Works</h2>
      <p>Welcome to our Placement Cell website! Here's a step-by-step guide on how the site works:</p>
      <ol>
        <li>Students and admins can access the site's homepage.</li>
        <li>If you are a student, click on the "Sign Up" button to create an account as a student. Fill in the required information, including Roll Number, Name, Email, Password, and Retype Password. After successful sign-up, you will see a message "Wait for Admin Approval."</li>
        <li>If you are an admin, click on the "Sign Up" button and enter the unique Secret Key provided for admin registration. Fill in the required information, including Name, Email, Password, and Retype Password. After successful sign-up, you will be redirected to the sign-in page.</li>
        <li>Once you have signed up as an admin, you can now sign in using your registered email and password on the Admin Sign In page. After successful sign-in, you will be redirected to the Admin page.</li>
        <li>If you are a student waiting for admin approval, you can now visit the site's homepage again and click on the "Sign In" button to access the Student Sign In page. Enter your Roll Number and Password to sign in as a student. After successful sign-in, you will be redirected to the Student page.</li>
        <li>On the Admin page, the admin can perform various tasks such as managing student data, approving student registrations, and more.</li>
        <li>On the Student page, the student can view their profile, update information, and access other features relevant to their account.</li>
      </ol>
      <p>Please note that the provided Secret Key during admin sign-up should be unique and known only to authorized personnel for security purposes.</p>
      <p>That's it! You are now ready to use our Placement Cell website to manage placements and student data effectively.</p>
    </div>
  );
};

export default Process;
