"use client";

import LoaderUI from "@/components/LoaderUI";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import useGetCallById from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import { useState } from "react";
 
function MeetingPage() {
  const params = useParams();
  const { isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  
  // Get a safe ID value - use empty string if invalid
  const meetingId = params?.id && typeof params.id === 'string' ? params.id : '';
  const { call, isCallLoading } = useGetCallById(meetingId);

  // Show invalid ID message if the ID is empty
  if (!meetingId) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-2xl font-semibold">Invalid meeting ID</p>
      </div>
    );
  }

  if (!isLoaded || isCallLoading) return <LoaderUI />;

  if (!call) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-2xl font-semibold">Meeting not found</p>
      </div>
    );
  }

  return (
    <StreamCall call={call}>
      <StreamTheme>
        {!isSetupComplete ? (
          <MeetingSetup onSetupComplete={() => setIsSetupComplete(true)} />
        ) : (
          <MeetingRoom />
        )}
      </StreamTheme>
    </StreamCall>
  );
}
export default MeetingPage;