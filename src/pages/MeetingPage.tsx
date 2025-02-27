import { useEffect, useRef, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const MeetingPage = () => {
  const meetingContainer = useRef<HTMLDivElement>(null);
  const [credentials, setCredentials] = useState<{
    app_id: number;
    server_secret: string;
  } | null>(null);

  useEffect(() => {
    const fetchCredentials = async () => {
      console.log("Fetching credentials");
      try {
        const response = await fetch(
          "https://dataidea.pythonanywhere.com/meet/credentials"
        );
        const data = await response.json();
        setCredentials(data);
      } catch (error) {
        console.error("Failed to fetch credentials:", error);
      }
    };

    fetchCredentials();
  }, []);

  useEffect(() => {
    if (!credentials) return;

    function getUrlParams(url: string) {
      const urlSearchParams = new URLSearchParams(url.split("?")[1] || "");
      return Object.fromEntries(urlSearchParams.entries());
    }

    const params = getUrlParams(window.location.href);
    const roomID = params["roomID"] || Math.floor(Math.random() * 10000) + "";
    const userID = Math.floor(Math.random() * 10000) + "";
    const userName = params["userName"] || `Guest_${userID}`;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      credentials.app_id,
      credentials.server_secret,
      roomID,
      userID,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: meetingContainer.current as HTMLElement,
      sharedLinks: [
        {
          name: "Personal link",
          url: `${window.location.origin}${window.location.pathname}?roomID=${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      turnOnMicrophoneWhenJoining: true,
      turnOnCameraWhenJoining: true,
      showMyCameraToggleButton: true,
      showMyMicrophoneToggleButton: true,
      showAudioVideoSettingsButton: true,
      showScreenSharingButton: true,
      showTextChat: true,
      showUserList: true,
      maxUsers: 100,
      layout: "Auto",
      showLayoutButton: false,
    });
  }, [credentials]);

  return (
    <div
      ref={meetingContainer}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default MeetingPage;
