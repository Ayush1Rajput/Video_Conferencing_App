import React, { useState } from 'react'
import withAuth from '../utils/withAuth'
import { Navigate, useNavigate } from 'react-router-dom'

function HomeComponent() {

  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  let handleJoinVideoCall = async () =>{
    navigate(`/${meetingCode}`);
  }

  return (
    <div>
      
    </div>
  )
}

export default withAuth(HomeComponent);