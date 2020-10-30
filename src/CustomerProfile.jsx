import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setProfile(data));
  }, [props.id]);
  if (!profile) {
    return null;
  }
  return (
    <ul>
      <li>ID: {profile.id}</li>
      <li>Title: {profile.title}</li>
      <li>First Name: {profile.firstName}</li>
      <li>Surname: {profile.surname}</li>
      <li>Email: {profile.email}</li>
      <li>VIP: {profile.vip.toString()}</li>
      <li>Tel: {profile.phoneNumber}</li>
    </ul>
  );
};

export default CustomerProfile;
